"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const axios_1 = require("axios");
const app_1 = require("./app");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
const _GOOGLE_TEXTSEARCH_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const _GOOGLE_AUTOSEARCH_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
const _GOOGLE_PLACEDETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";
const _GOOGLE_PHOTO_BASE_URL = "https://maps.googleapis.com/maps/api/place/photo?maxheight=";
const CORS = require("cors")({ origin: true });
//// userid , 
//// city : { place_id , name , thumbnailUrl, location:{lat:'',lng:''}}
//// place : {place_id , name ,rating , thumbnailUrl , location:{lat:'',lng:''}}};
//// 
exports.addBookmarkPlace = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { userid, city, place, key } = req.body;
        const cityDocRef = db.collection("users")
            .doc(userid)
            .collection("cities")
            .doc(city["place_id"]);
        const cityRef = yield cityDocRef.get();
        if (!cityRef.exists) {
            if (city["name"]) {
                yield cityDocRef.set(city);
            }
            else if (key) {
                const response = yield _getCityDetails(key, city["place_id"]);
                const { place_id, name, geometry, photos } = response.data.result;
                const cityToSave = {
                    place_id,
                    name,
                    location: Object.assign({}, geometry.location),
                    photoUrl: photos ? _getPhotoUrl(photos[0]["photo_reference"], 280, key) : null,
                };
                yield cityDocRef.set(cityToSave);
            }
        }
        yield cityDocRef.collection("places")
            .doc(place["place_id"])
            .set(place);
        res.send(200);
    }
    catch (error) {
        res.send(error);
    }
}));
//// userid ,cityId, placeId
exports.removeBookmarkPlace = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { userid, cityid, placeid } = req.query;
        const cityDocRef = db.collection("users")
            .doc(userid)
            .collection("cities")
            .doc(cityid);
        const placeDocRef = cityDocRef
            .collection("places")
            .doc(placeid);
        const placeRef = yield placeDocRef.get();
        if (placeRef.exists) {
            yield placeDocRef.delete();
            const placesRef = yield cityDocRef.collection("places").get();
            placesRef.empty && (yield cityDocRef.delete());
        }
        res.send(200);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.getBookmarks = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const userid = req.query.userid;
        const citiesRef = yield db.collection("users").doc(userid).collection("cities").get();
        let cities = {};
        citiesRef.forEach(city => {
            const cityData = city.data();
            cities = Object.assign({}, cities, { [cityData.place_id]: cityData });
        });
        res.send(cities);
    }
    catch (error) {
        res.send(error);
    }
}));
exports.getBookmarkPlaces = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const userid = req.query.userid;
        const cityid = req.query.cityid;
        const places = yield _getBookmarkedPlacesInCity(userid, cityid);
        res.send(places);
    }
    catch (error) {
        res.send(error);
    }
}));
/// This is for textsearch google places api
exports.searchPlace = functions.https.onRequest((req, res) => {
    CORS(req, res, () => __awaiter(this, void 0, void 0, function* () {
        try {
            const query = req.query;
            const config = {
                params: Object.assign({}, query)
            };
            const result = yield axios_1.default.get(_GOOGLE_TEXTSEARCH_URL, config);
            res.send(result.data);
        }
        catch (error) {
            console.log("searchPlace:: error", error);
            res.send(error);
        }
    }));
});
/// This is for textsearch google autocomplete api
exports.autoCompleteSearch = functions.https.onRequest((req, res) => {
    CORS(req, res, () => __awaiter(this, void 0, void 0, function* () {
        try {
            const { key, text, location, radius } = req.query;
            const config = {
                params: {
                    input: text,
                    key: key,
                    location: location,
                    radius: radius,
                    strictbounds: true
                }
            };
            const result = yield axios_1.default.get(_GOOGLE_AUTOSEARCH_URL, config);
            res.send(result.data);
        }
        catch (error) {
            res.send(error);
        }
    }));
});
////This is to check if place id already bookmarked
exports.isPlaceBookmarked = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { userid, cityid, placeid } = req.query;
        const isMarked = yield _isPlaceBookmarked(userid, cityid, placeid);
        res.send(isMarked);
    }
    catch (error) {
        res.send(error);
    }
}));
//// This is for getting details of place using google api
exports.getPlaceDetails = functions.https.onRequest((req, res) => {
    CORS(req, res, () => __awaiter(this, void 0, void 0, function* () {
        try {
            const { key, placeid, cityid, userid } = req.query;
            const config = {
                params: {
                    key,
                    placeid
                }
            };
            const result = yield axios_1.default.get(_GOOGLE_PLACEDETAILS_URL, config);
            let isMarked = false;
            if (userid && cityid) {
                isMarked = yield _isPlaceBookmarked(userid, cityid, placeid);
            }
            const finalResult = Object.assign({}, result.data, { bookmarked: isMarked });
            res.send(finalResult);
        }
        catch (error) {
            res.send(error);
        }
    }));
});
//// This is for getting details of city along with list of bookmarks using google api
exports.getCityDetails = functions.https.onRequest((req, res) => {
    CORS(req, res, () => __awaiter(this, void 0, void 0, function* () {
        try {
            const { key, cityid, userid } = req.query;
            const response = yield _getCityDetails(key, cityid);
            const places = yield _getBookmarkedPlacesInCity(userid, cityid);
            const finalResult = Object.assign({}, response.data, { places: places });
            res.send(finalResult);
        }
        catch (error) {
            res.send(error);
        }
    }));
});
exports.app = { nextApp: app_1.default };
const _getBookmarkedPlacesInCity = function (userid, cityid) {
    return __awaiter(this, void 0, void 0, function* () {
        if (userid && cityid) {
            const placesRef = yield db.collection("users")
                .doc(userid)
                .collection("cities")
                .doc(cityid)
                .collection("places").get();
            let places = {};
            placesRef.forEach(place => {
                const placeData = place.data();
                places = Object.assign({}, places, { [placeData.place_id]: placeData });
            });
            return places;
        }
        return null;
    });
};
/// This is a provate function to check is place is bookmarked
const _isPlaceBookmarked = function (userid, cityid, placeid) {
    return __awaiter(this, void 0, void 0, function* () {
        if (userid && userid !== "" &&
            cityid && cityid !== "" &&
            placeid && placeid !== "") {
            const cityDocRef = db.collection("users")
                .doc(userid)
                .collection("cities")
                .doc(cityid);
            const placeDocRef = cityDocRef
                .collection("places")
                .doc(placeid);
            const placeRef = yield placeDocRef.get();
            return placeRef.exists;
        }
        return false;
    });
};
const _getCityDetails = function (key, cityid) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = {
            params: {
                key,
                placeid: cityid,
                fields: "name,geometry,photos,place_id"
            }
        };
        const response = yield axios_1.default.get(_GOOGLE_PLACEDETAILS_URL, config);
        return response;
    });
};
const _getPhotoUrl = function (photoReference, maxHeight, key) {
    return `${_GOOGLE_PHOTO_BASE_URL}${maxHeight}&photoreference=${photoReference}&key=${key}`;
};
//# sourceMappingURL=index.js.map
import { Record , Map , List} from "immutable";
import { getPredictions, getPlaces } from "./selector";

describe("getPrediction and places selector" , () => {
  const myRecord = Record({
    predictions: undefined,
    selectedCity: undefined,
    selectedPlaces: undefined,
    places: undefined,
    query: undefined,
    bookmarks: undefined
  });
    
  const initialState = Map({
    "place" : new myRecord({
      predictions: List([
        {
          text:"sample 1"
        },
        {
          "text" : "sample 2"
        }
      ]),
      selectedCity: Map({
        "place_id" : "cityid123",
        
      }),
      selectedPlaces: Map(),
      places: Map({
        "results" : [
          {"place_id" : "place123"},
          {"place_id" : "place345"}
        ]
      }),
      query: Map({
        term: "xyz",
        label:"xyz",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123":Map({
          "places"  : Map({
            "place123":{
              "place_id":"place123"
            }
          })
        })  
      })
    })
  });

  it("should return correct prediction" , () => {
    expect(getPredictions(initialState)).toEqual([
      {
        text:"sample 1"
      },
      {
        "text" : "sample 2"
      }
    ]);
    
  });

  it("should return correct places" , () => {
    expect(getPlaces(initialState)).toEqual([
      {
        "place_id" : "place123" ,
        isBookmarked:true,
        "addBookmarkPending": undefined,
        "deleteBookmarkPending": undefined
      },
      {
        "place_id" : "place345",
        "addBookmarkPending": undefined,
        "deleteBookmarkPending": undefined,
        isBookmarked:false
      }
    ]);
  });
  
});
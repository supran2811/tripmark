
import { Map, List, Record} from "immutable";

import {
  FETCH_CITY_DETAILS,
  RESET_CITY_DETAILS,
  TEXT_SEARCH,
  AUTOCOMPLETE_SEARCH,
  CLEAR_SUGGESTIONS,
  FETCH_PLACE_DETAILS,
  ADD_BOOKMARK,
  GET_BOOKMARK_PLACES,
  DELETE_BOOKMARK,
  SET_DELETE_BOOKMARK,
  SET_ADD_BOOKMARK,
  GET_BOOKMARKS,
  CLEAR_BOOKMARKS
} from "./actionTypes";

import reducer from "./reducer";

describe("place reducer" , () => {

  const myRecord = Record({
    predictions: undefined,
    selectedCity: undefined,
    selectedPlaces: undefined,
    places: undefined,
    query: undefined,
    bookmarks: undefined
  });
    
  const initialState = new myRecord({
    predictions: List(),
    selectedCity: undefined,
    selectedPlaces: Map(),
    places: Map(),
    query: Map({
      term: "",
      label:"",
      type: "text"
    }),
    bookmarks: undefined
  });

  it("should return initial state by default" , () => {
    expect(reducer(undefined,{}).hashCode()).toEqual(initialState.hashCode());
  });
  it("should return correct state for getting city details" , () => {
    const action = {
      type:FETCH_CITY_DETAILS.SUCCESS,
      response : {
        data: {
          result:{
            place_id:"cityid123"
          },
          places:{
            "placeid123":{
              "place_id":"placeid123"
            }
          }
        }
      }
    };
    const newState = reducer(undefined,action);
    expect(newState.get("selectedCity")).toEqual(Map({
      place_id:"cityid123"
    }));

    expect(newState.get("bookmarks")).toEqual(Map({
      "cityid123":Map({
        "places" :Map({
          "placeid123":{
            "place_id":"placeid123"
          }
        })
      })
    }));
  });

  it("should return correct place details state" , () => {
    const action = {
      type:FETCH_PLACE_DETAILS.SUCCESS,
      response : {
        data : {
          result : {
            "place_id"  : "placeid123",
            "name" : "placename"
          },
          bookmarked:true
        }
      }
    };
    const newState = reducer(undefined , action);
    expect(newState.get("selectedPlaces")).toEqual(Map({"placeid123" :Map({
      "place_id"  : "placeid123",
      "name" : "placename",
      "bookmarked":true
    })}));
  });

  it("should return correct state for auto complete search" , () => {
    const action = {
      type :AUTOCOMPLETE_SEARCH.SUCCESS,
      query  :{
        term:"xyz",
        label:"",
        type:"text"
      },
      response:{
        data : {
          predictions:[
            {
              text:"1"
            },
            {
              text:"2"
            }
          ]
        }
      }
    };
    const newState = reducer(undefined,action);
    expect(newState.get("predictions")).toEqual(List([
      {
        text:"1"
      },
      {
        text:"2"
      }
    ]));
    expect(newState.get("query")).toEqual(Map({
      term:"xyz",
      label:"",
      type:"text"
    }));
  });

  it("should return correct state for clear suggestions" , () => {
    const action = {
      type : CLEAR_SUGGESTIONS.ACTION
    };
    const updateState = new myRecord({
      predictions: List([
        {
          text:"1"
        },
        {
          text:"2"
        }
      ]),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "xyz",
        label:"xyz",
        type: "text"
      }),
      bookmarks: undefined
    });
    const newState = reducer(updateState , action);
    expect(newState.get("predictions")).toEqual(List([]));
    expect(newState.get("query")).toEqual(Map({
      "term" : "",
      "label" : "xyz",
      "type" : "text"
    }));
  });
  it("should return correct state for text search" , () => {
    const action = {
      type : TEXT_SEARCH.SUCCESS,
      response : {
        data : {
          "status" : "OK",
          "results" : [{
            "place_id" : "placeid123"
          },
          {
            "place_id" : "placeid124"    
          }]
        }
      },
      query : {
        term :"xyz",
        type :"text"
      }
    };
    const newState = reducer(undefined,action);
    expect(newState.get("places")).toEqual(Map({
      "status" : "OK",
      "results" : [{
        "place_id" : "placeid123"
      },
      {
        "place_id" : "placeid124"    
      }]
    }));
  });

  it("should return correct state for add bookmark" , () => {
    const action = {
      type : ADD_BOOKMARK.PENDING,
      city: {
        "place_id":"cityid123"
      },
      place :{
        "place_id":"placeid123"
      }
    };
    const newState = reducer(undefined , action);
    expect(newState.get("bookmarks")).toEqual(Map({
      "cityid123" : Map({
        "place_id" : "cityid123",
        "places" : Map({
          "placeid123" : {
            "place_id" : "placeid123",
            "addBookmarkPending":true
          }
        })
      })
    }));
  });

  it("should return correct state for add bookmark success" , () => {
    const action = {
      type : ADD_BOOKMARK.SUCCESS,
      city: {
        "place_id":"cityid123"
      },
      place :{
        "place_id":"placeid123"
      }
    };
    const updatedState = new myRecord({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123" : Map({
          "place_id" : "cityid123",
          "places" : Map({
            "placeid123" : {
              "place_id" : "placeid123",
              "addBookmarkPending":true
            }
          })
        })
      })
    });
    const newState = reducer(updatedState , action);
    expect(newState.get("bookmarks")).toEqual(Map({
      "cityid123" : Map({
        "place_id" : "cityid123",
        "places" : Map({
          "placeid123" : {
            "place_id" : "placeid123"
          }
        })
      })
    }));
  });
  it("should return correct state for add bookmark error" , () => {
    const action = {
      type :ADD_BOOKMARK.ERROR,
      city: {
        "place_id":"cityid123"
      },
      place :{
        "place_id":"placeid123"
      }
    };
    const updatedState = new myRecord({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123" : Map({
          "place_id" : "cityid123",
          "places" : Map({
            "placeid123" : {
              "place_id" : "placeid123",
              "addBookmarkPending":true
            }
          })
        })
      })
    });
    const newState = reducer(updatedState,action);
    expect(newState.get("bookmarks")).toEqual(Map({}));
  });
  it("should return correct state for delete bookmark" , () => {
    const action = {
      type:DELETE_BOOKMARK.PENDING,
      cityid:"cityid123",
      placeid:"placeid123"
    };
    const updatedState = new myRecord({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123" : Map({
          "place_id" : "cityid123",
          "places" : Map({
            "placeid123" : {
              "place_id" : "placeid123"
            }
          })
        })
      })
    });
    const newState = reducer(updatedState,action);
    expect(newState.get("bookmarks")).toEqual(Map({
      "cityid123" : Map({
        "place_id" : "cityid123",
        "places" : Map({
          "placeid123" : {
            "place_id" : "placeid123",
            "deleteBookmarkPending":true
          }
        })
      })
    }));
  });
  it("should return correct state for delete bookmark sucess" , () => {
    const action = {
      type:DELETE_BOOKMARK.SUCCESS,
      cityid:"cityid123",
      placeid:"placeid123"
    };
    const updatedState = new myRecord({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123" : Map({
          "place_id" : "cityid123",
          "places" : Map({
            "placeid123" : {
              "place_id" : "placeid123",
              "deleteBookmarkPending":true
            }
          })
        })
      })
    });
    const newState = reducer(updatedState,action);
    expect(newState.get("bookmarks")).toEqual(Map({}));
  });
  it("should return correct state for delete bookmark error" , () => {
    const action = {
      type:DELETE_BOOKMARK.ERROR,
      cityid:"cityid123",
      placeid:"placeid123"
    };
    const updatedState = new myRecord({
      predictions: List(),
      selectedCity: undefined,
      selectedPlaces: Map(),
      places: Map(),
      query: Map({
        term: "",
        label:"",
        type: "text"
      }),
      bookmarks: Map({
        "cityid123" : Map({
          "place_id" : "cityid123",
          "places" : Map({
            "placeid123" : {
              "place_id" : "placeid123",
              "deleteBookmarkPending":true
            }
          })
        })
      })
    });
    const newState = reducer(updatedState,action);
    expect(newState.get("bookmarks")).toEqual(Map({
      "cityid123" : Map({
        "place_id" : "cityid123",
        "places" : Map({
          "placeid123" : {
            "place_id" : "placeid123"
          }
        })
      })
    }));
  });
});
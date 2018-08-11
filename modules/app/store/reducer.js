import { RESET_ERROR } from "./actionTypes";


const initialState = {
  loading:false,
  error:false,
  pendingRequestCount:0
}

export default function appReducer(state = initialState , action) {

  if(action.type.endsWith('PENDING')) {
    const pendingRequestCount = state.pendingRequestCount+1;
    return {
      ...state,
      loading:true,
      error:false,
      errorData:undefined,
      pendingRequestCount:pendingRequestCount
    }
  }
  else if(action.type.endsWith('SUCCESS')) {
    const pendingRequestCount = state.pendingRequestCount > 0 ? state.pendingRequestCount - 1:state.pendingRequestCount;

    return {
      ...state,
      loading:pendingRequestCount > 0,
      pendingRequestCount:pendingRequestCount
    }
  }
  else if(action.type.endsWith('ERROR')) {
    const pendingRequestCount = state.pendingRequestCount > 0 ? state.pendingRequestCount - 1:state.pendingRequestCount;
    return {
      ...state,
      loading:pendingRequestCount > 0,
      pendingRequestCount:pendingRequestCount,
      error:true,
      errorData:action.error ? action.error : {status:'Unable to connect to server'}
    }
  }
  else if(action.type === RESET_ERROR.ACTION) {
    return {
      ...state,
      error:false,
      errorData:undefined
    }
  }
  return state;
}
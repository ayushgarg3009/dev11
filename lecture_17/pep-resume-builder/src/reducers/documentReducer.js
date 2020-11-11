import initialState from './initialState.json';
import * as actionCodes from '../actions/actionTypes';
import update from 'immutability-helper'

// export default function documentReducer(state = initialState.document, action) {
//     switch(action.type){
//         case actionCodes.SET_SKIN:
//             return update(state,{skinCd:{$set:action.skinCd}});
//         default:
//             return state;
//     }
//   }

export default function documentReducer(state = initialState.document, action) {
    switch(action.type){
        case actionCodes.SET_SKIN:
            return update(state,{$set:action.document});
        case actionCodes.UPDATE_SKIN:
            return update(state,{$merge:action.document});
        default:
            return state;
    }
  }
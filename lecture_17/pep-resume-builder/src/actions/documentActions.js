import gettingStarted from '../components/presentation/gettingStarted'
import * as actionTypes from './actionTypes'
const { v4: uuidv4 } = require('uuid');

// export function setSkinCd(skinCd){
//     return {type: actionTypes.SET_SKIN, skinCd : skinCd}
// }

// export function updateSkinCd(skinCd){
//     return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
// }


export const setSkinCd= (skinCd)=>{
    return async (dispatch, getstate,{getFirebase, getFirestore})=>{

        console.log(getstate());
        const firestore = getFirestore();
        let id = uuidv4();
        let createdDate = new Date();
        // firestore.collection('resumes').doc(id).set({"document":{"id":id, "skinCd":skinCd,"createdDate": createdDate}}).then(()=>
        //     dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: id, createdDate:createdDate}})
        // ) 
        await firestore.collection('resumes').add({"document":{"skinCd":skinCd,"createdDate": createdDate}}).then((res)=>{
            dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: res.id, createdDate:createdDate}})
        }
        ) 
        .catch((error)=>
            dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
        )
    }
}


export const updateSkinCd=(documentId, skinCd)=>{
    return (dispatch, getstate,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        let docId = uuidv4();
        let modifiedDate = new Date();
        firestore.collection('resumes').doc(documentId)
        .set({
            "skinCd": skinCd, 
            "modifiedDate": modifiedDate 
        }, { merge:true })
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_SKIN, document:{skinCd : skinCd, modifiedDate : modifiedDate }})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
        )
    }
}
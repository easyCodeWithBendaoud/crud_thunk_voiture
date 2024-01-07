 import axios from 'axios'
import * as type  from './typeActionVoiture'
 
 //creation d'action asynchrone redux-thunk fetchVoiture

 export function fetchVoiture(){

    return function (dispatch,getState){
         console.log(getState())
         dispatch({type:type.FETCH_VOITURE_REQUEST})
        fetch("http://localhost:3500/voitures")
        .then(res=>res.json())
        .then(data=>dispatch({type:type.FETCH_VOITURE_SUCCESS,payload:data}))
        .catch(err=>dispatch({type:type.FETCH_VOITURE_FAILURE,payload:err.message}))

    }
 }

 //action asynchrone redux-thunk delete voiture
 export function deleteVoiture(id){

return function(dispatch,getState){
const voiture=getState().voitures.find(v=>v.id===id)
console.log(voiture)
if(voiture){
    axios.delete(`http://localhost:3500/voitures/${id}`)
    .then(res=>dispatch({type:type.DELETE_VOITURE_SUCCESS,payload:id}))
    .catch(err=>dispatch({type:type.DELETE_VOITURE_FAILURE,payload:err.message}))
}
}

 }

 export  function postVoiture(voiture){

    return function(dispatch,getState){
        const myvoiture=getState().voitures.find(v=>v.matricule===voiture.matricule)
        if(!myvoiture){
            axios.post("http://localhost:3500/voitures",voiture)
            .then(res=>dispatch({type:type.POST_VOITURE_SUCCESS,payload:res.data}))
            .catch(err=>dispatch({type:type.POST_VOITURE_FAILURE,payload:err.message}))
        }else{
            dispatch({type:type.POST_VOITURE_FAILURE,payload:"attention matricule dupliquée!!!!"})  
        }
    }
 }



 export  function   updateVoiture(voiture){

    return function(dispatch,getState){
       
            axios.patch(`http://localhost:3500/voitures/${voiture.id}`,voiture)
            .then(res=>dispatch({type:type.UPDATE_VOITURE_SUCCESS,payload:voiture}))
            .catch(err=>dispatch({type:type.UPDATE_VOITURE_FAILURE,payload:err.message}))
       
    }
 }
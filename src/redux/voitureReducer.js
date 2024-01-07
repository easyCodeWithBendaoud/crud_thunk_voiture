import * as type from './typeActionVoiture'

const initState={voitures:[],loading:false,erreur:""}
export function voitureReducer(state=initState,action){
switch (action.type) {
    case type.FETCH_VOITURE_REQUEST:
        return{...state,loading:true}
    case type.FETCH_VOITURE_SUCCESS:
        
      return {...state,voitures:action.payload,loading:false,erreur:""}
    case type.FETCH_VOITURE_FAILURE:
        return{...state,erreur:action.payload,loading:false}
    case type.DELETE_VOITURE_SUCCESS:
        return {...state,voitures:state.voitures.filter(v=>v.id!==action.payload)}
        case type.DELETE_VOITURE_FAILURE:
            return{...state,erreur:action.payload,loading:false}
    case type.POST_VOITURE_SUCCESS:
        return{...state,voitures:[...state.voitures,action.payload]}
        case type.POST_VOITURE_FAILURE:
            return{...state,erreur:action.payload,loading:false}
    default:
       return  state;
}
    
}
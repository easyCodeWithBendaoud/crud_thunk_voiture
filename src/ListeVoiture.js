import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteVoiture, fetchVoiture } from './redux/actionVoiture'

function ListeVoiture() {

const dispatch=useDispatch()
useEffect(()=>{
dispatch(fetchVoiture())

},[])

const voitures=useSelector(state=>state.voitures)
const erreur=useSelector(state=>state.erreur)
const loading=useSelector(state=>state.loading)

  return (
    <div>ListeVoiture
        {loading && <p>chargement.......</p>}
        {erreur && <p style={{color:"red"}}>{erreur}</p>}
{(loading==false && !erreur) &&<div>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>matricule</th>
            <th>marque</th>
            <th>categorie</th>
            <th>reservé</th>
            <th>Supprimer</th>
        </tr>
    </thead>

    <tbody>
            {voitures.map((v,index)=>{return(<tr key={index}>
                <td>{v.id}</td>
                <td>{v.matricule}</td>
                <td>{v.marque}</td>
                <td>{v.categorie}</td>
                <td>
                <input type="checkbox"  checked={v.reserve}/>
                  {v.reserve?"oui":"non"}
                
                </td>
                <td>
                    <button onClick={()=>dispatch(deleteVoiture(v.id))}>delete</button>
                </td>
                
                </tr>)})}
    </tbody>
</table>

    
    </div>}

    </div>
  )
}

export default ListeVoiture
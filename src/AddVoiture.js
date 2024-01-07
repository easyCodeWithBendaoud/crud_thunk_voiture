import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postVoiture } from './redux/actionVoiture'

function AddVoiture() {
    const [matricule,setMatricule]=useState("")
    const [marque,setMarque]=useState("")
    const [categorie,setCategirie]=useState("")
    const [reserve,setReserve]=useState(false)
    const erreur=useSelector(state=>state.erreur)
    const dispatch=useDispatch()
    function handleSubmit(ev){
        ev.preventDefault()
        dispatch(postVoiture({matricule:matricule,marque:marque,categorie:categorie,reserve:reserve}))
    }
  return (
    <div>AddVoiture
<form onSubmit={(ev)=>handleSubmit(ev)}>
    <div>
        <label>matricule:</label> 
        <input type="text" onChange={(ev)=>setMatricule(ev.target.value)} />
    </div>
    <div>
        <label>marque:</label> 
        <input type="text" onChange={(ev)=>setMarque(ev.target.value)}  />
    </div>
    <div>
        <label>categorie:</label> 
        <input type="text" onChange={(ev)=>setCategirie(ev.target.value)}  />
    </div>
    <div>
        <label>rservé:</label> 
        <input type="checkbox" onChange={()=>setReserve(!reserve)} checked={reserve} />
    </div>
    <button type="submit" >Ajouter</button>
    {erreur && <p style={{color:"red"}}>{erreur}</p>}
</form>




    </div>
  )
}

export default AddVoiture
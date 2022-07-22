import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./SectionContent.css";

export function SectionContent() {
  const [guestName, /*setGuestName*/] = useState('Vitor')

  const params = useParams()

  function handleConfirmation() {
    //axios.patch(`https://backend-sophia-guests-production.up.railway.app/guests/${params.id}`)

    console.log(params)
  }

  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://backend-sophia-guests-production.up.railway.app/guests/${params.guestId}`)
      .then((res) => {
        console.log(res.data);
      })
  
    
  }, [])
  
  return (
    <div className="content-area__body">
      <h3>Oi {guestName}.</h3>
      <h3>Para viver as emoções desse dia tão importante, quero estar ao lado de pessoas especiais como você. Conto com a sua presença!</h3>
      <button onClick={handleConfirmation}>Confirmar Presença</button>
    </div>
  );
}

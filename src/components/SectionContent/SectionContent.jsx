import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SectionContent.css";

const api = axios.create({
  baseURL: "https://backend-sophia-guests-production.up.railway.app/guests/",
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
  }
});

export function SectionContent() {
  const [guestName, setGuestName] = useState("");
  const [fetchingGuest, setFetchingGuest] = useState(true);
  const [thanksMessage, setThanksMessage] = useState(false);

  const params = useParams();

  function handleConfirmation() {
    api.patch(`https://backend-sophia-guests-production.up.railway.app/guests/${params.guestId}`, {
      confirm: 'sim'
    })

    setThanksMessage(true)

  }

  useEffect(() => {
    api
      .get(
        `https://backend-sophia-guests-production.up.railway.app/guests/${params.guestId}`
      )
      .then((res) => {
        setGuestName(res.data.name);
        setFetchingGuest(false);
      });
  }, []);

  return (
    <div className="content-area__body">
      {fetchingGuest ? (
        <h3>Caregando..</h3>
      ) : thanksMessage ? (<><h3>Obrigada por confirmar sua presença!</h3></>) : (
        <>
          <h3>Oi {guestName}.</h3>
          <h3>
            Para viver as emoções desse dia tão importante, quero estar ao lado
            de pessoas especiais como você. Conto com a sua presença!
          </h3>
          <button onClick={handleConfirmation}>Confirmar Presença</button>
        </>
      )}
    </div>
  );
}

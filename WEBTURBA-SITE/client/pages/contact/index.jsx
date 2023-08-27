import { Button } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createRDV } from "@/reduxFiles/RDV/action";
import { createCN } from "@/reduxFiles/CN/action";

export default function index() {
  const dispatch = useDispatch()

  const [swith, setTSwith] = useState(false);

  const [nom, setNom] = useState('');
  const [prenom, setPre] = useState('');
  const [email, setEm] = useState('');
  const [contact, setCon] = useState('');
  const [objet, setObj] = useState('');
  const [type, setTy] = useState('');
  const [date, setDat] = useState('');
  const [heure, setHeu] = useState('');
  const [message, setMe] = useState('');
  // const [message, setMe] = useState('');

  const [donnees, setDonnes] = useState({
    nom: "",
    prenom : "",
    email : "",
    contact : "",
    objet : "",
    type: "", 
    date:"",
    heure: "",
    message: ""
  });


  const onSubmit = (e) => {
    e.preventDefault()
    console.log(objet)
    if (objet === "") {
      const body = {
        nom: nom,
        prenom : prenom,
        email : email,
        contact : contact,
        message: message
      }
      console.log(body)
      dispatch(createCN(body))
      setNom('')
      setPre('')
      setEm('')
      setCon('')
      setMe('')

    } else {
      const body = {
        nom: nom,
        prenom : prenom,
        email : email,
        contact : contact,
        objet : objet,
        type: type, 
        date:date,
        heure: heure,
        message: message
      }
  
      console.log(body)
      dispatch(createRDV(body))

      setCon('')
      setDat('')
      setEm('')
      setHeu('')
      setMe('')
      setNom('')
      setObj('')
      setPre('')
      setTy('')
    }
  }
    

  return (
    <div className="contact">
      <div className="content">
        <div className="content-left">
          <div className="top">
            <Button
              className={!swith && "active"}
              onClick={() => setTSwith(false)}
            >
              Contactez-nous
            </Button>
            <Button
              className={swith && "active"}
              onClick={() => setTSwith(true)}
            >
              Rendez-vous
            </Button>
          </div>{" "}
          {swith ? (
            <form className="contact-form">
              <div className="form-top">
                <div className="left">
                  <input type="text" value={nom} onChange={e => setNom(e.target.value)} placeholder="Entrer votre nom" />
                  <input type="text" value={email} onChange={e => setEm(e.target.value)} placeholder="Entrer votre email" />
                  <input type="date" id="dateInput" name="date" value={date} onChange={e=> setDat(dateInput.value)} placeholder="date" />
                  {/* <input type="radio" name="choix" id="choix1"/> */}

                  
                    <label style={{display: 'flex'}}>
                      Entreprise <input type="radio" id="radioOption1" value="Entreprise" onChange={e => setTy(radioOption1.value)} name="foobar" /> 
                    </label>
                    
                  <input type="text" value={objet} onChange={e=> setObj(e.target.value)} placeholder="Objet" />
                </div>
                <div className="right">
                  <input type="text" value={prenom} onChange={e=> setPre(e.target.value)} placeholder="Entrer votre prénom" />
                  <input type="text" value={contact} onChange={e=> setCon(e.target.value)} placeholder="Entrer votre contact" />
                  <input type="time" id="timeInput" name="heure" value={heure} onChange={e => setHeu(timeInput.value)} placeholder="Heure" />
                  {/* <input type="radio" name="choix" id="choix2" /> */}
                  
                  {/* <div> */}
                  <label style={{display: 'flex'}}>
                    Particulier <input type="radio" id="radioOption2" name="foobar" value="Particulier" onChange={e => setTy(radioOption2.value)} />
                  </label>
                  {/* </div> */}

                </div>
              </div>
              <textarea
                cols="10"
                rows="10"
                value={message} onChange={e=> setMe(e.target.value)} placeholder="Votre message"
              ></textarea>
              <Button onClick={(e) => onSubmit(e)}>Envoyer</Button>
            </form>
          ) : (
            <form className="contact-form">
              <div className="form-top">
                <div className="left">
                  <input type="text" value={nom} onChange={e=>setNom(e.target.value)} placeholder="Entrer votre nom" />
                  <input type="text" value={email} onChange={e=>setEm(e.target.value)} placeholder="Entrer votre email" />
                </div>
                <div className="right">
                  <input type="text" value={prenom} onChange={e=>setPre(e.target.value)} placeholder="Entrer votre prénom" />
                  <input type="text" value={contact} onChange={e=>setCon(e.target.value)} placeholder="Entrer votre contact" />
                </div>
              </div>
              <textarea
                cols="20"
                rows="10"
                value={message} onChange={e=>setMe(e.target.value)} placeholder="Votre message"
              ></textarea>
              <Button onClick={(e) => onSubmit(e)}>Envoyer</Button>
            </form>
          )}
        </div>
        <div className="content-right">
          {!swith ? (
            <Image
              src="/assets/images/contact_img.png"
              width={400}
              height={400}
            />
          ) : (
            <Image
              src="/assets/images/rdv-img.png"
              width={400}
              height={400}
            />
          )}
        </div>
      </div>
      <div className="map">
        <Image src="/assets/images/map.png" width={2000} height={120} />
      </div>
    </div>
  );
}

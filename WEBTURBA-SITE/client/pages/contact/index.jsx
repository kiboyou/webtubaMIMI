import { Button } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";

export default function index() {
  const [swith, setTSwith] = useState(false);

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
                  <input type="text" placeholder="Entrer votre nom" />
                  <input type="text" placeholder="Entrer votre email" />
                  <input type="date" id="date" name="date" placeholder="date" />
                  <input type="radio" name="choix" id="choix1" />
                  <input type="text" placeholder="Objet" />
                </div>
                <div className="right">
                  <input type="text" placeholder="Entrer votre prénom" />
                  <input type="text" placeholder="Entrer votre contact" />
                  <input type="time" id="heure" name="heure" placeholder="Heure" />
                  <input type="radio" name="choix" id="choix2" />
                </div>
              </div>
              <textarea
                cols="10"
                rows="10"
                placeholder="Votre message"
              ></textarea>
              <Button>Envoyer</Button>
            </form>
          ) : (
            <form className="contact-form">
              <div className="form-top">
                <div className="left">
                  <input type="text" placeholder="Entrer votre nom" />
                  <input type="text" placeholder="Entrer votre email" />
                </div>
                <div className="right">
                  <input type="text" placeholder="Entrer votre prénom" />
                  <input type="text" placeholder="Entrer votre contact" />
                </div>
              </div>
              <textarea
                cols="20"
                rows="10"
                placeholder="Votre message"
              ></textarea>
              <Button>Envoyer</Button>
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

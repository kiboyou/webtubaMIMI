import React from "react";
import Image from "next/image"
import Livre from "../../public/assets/images/livre-blog.png"
import Title from "@/components/Title";
import Actualite from "@/components/blog/actualite";
import CardActualite from "@/components/blog/actualiteCard";

export default function index() {

    return (
        <div className="blog-page">
            <header>
                <Image src={Livre} alt="Image de bibliotheque de livre" />
            </header>
            <main>
                <div className="container-title">
                    <Title title="A LA UNE" />
                </div>
                <Actualite />
                <div className="evenement-container">
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                    <CardActualite taille="event" image="image-event" description="event-actualite" />
                </div>
                <div className="informations">
                    <div className="enfant-info">
                        <h1>Ne ratez rien,</h1>
                        <p>Inscrivez-vous à la Sens+ Newsletter pour recevoir directement nos dernières actualités partout où vous êtes.</p>
                        <div>
                            <form action="" method="post">
                                <input type="email" name="" placeholder="Votre adresse email" id="" />
                                <button>S'abonner</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
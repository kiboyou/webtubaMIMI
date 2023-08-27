import React from "react";
import Image from "next/image"
import Livre from "../../public/assets/images/livre-blog.png"
import Title from "@/components/Title";
import Actualite from "@/components/blog/actualite";
import CardActualite from "@/components/blog/actualiteCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getallBlog } from "@/reduxFiles/Blog/action";


export default function index() {

    const dispatch = useDispatch();
    const Blogs = useSelector(state => state.blog);
  
    useEffect(() => {
      dispatch(getallBlog());
    }, [dispatch]);

    console.log(Blogs)

    return (
        <div className="blog-page">
            <header>
                <Image src={Livre} alt="Image de bibliotheque de livre" />
            </header>
            <main>
                <div className="container-title">
                    <Title title="A LA UNE" />
                </div>
                <Actualite blogs={Blogs} />

                <div className="evenement-container">
                { 
                    Blogs.map((item, index) => (
                        <CardActualite taille="event" image="image-event" description="event-actualite" img={item.img} date={item.date} texte={item.texte} />
                    ))
                }

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
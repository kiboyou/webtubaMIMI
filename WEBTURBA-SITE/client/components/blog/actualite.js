import React from "react";
import { Carousel } from '@mantine/carousel';
import Image from "next/image"
import CardActualite from "./actualiteCard";
import User2 from "../../public/assets/images/user2.png"
import User3 from "../../public/assets/images/user3.png"
import User1 from "../../public/assets/images/user1.png"



export default function Actualite({blogs}) {

    console.log('====================================');
    console.log(blogs);
    console.log('====================================');

    return (
        <div className="component-actualite">
            <Carousel
                height={200}
                slideSize="33.333333%"
                slideGap="md"
                loop
                align="start"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
            >
            {blogs.map((item, index) => (
                <Carousel.Slide key={index}>
                <div className="card-actualite">
                    <div className="card-image">
                    <Image src={`${item.img}`} alt="Utilisateur 1" width="70" height="70" unoptimized/>
                    </div>
                    <div className="content-actualite">
                    <div className="date">
                        <p>{item.date}</p>
                    </div>
                    <div className="description">
                        <p>
                       {item.texte}
                        </p>
                    </div>
                    </div>
                </div>
                </Carousel.Slide>
            ))}
            </Carousel>
        </div>
    )
}
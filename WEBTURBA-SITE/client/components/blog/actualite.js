import React from "react";
import { Carousel } from '@mantine/carousel';
import Image from "next/image"
import CardActualite from "./actualiteCard";
import User2 from "../../public/assets/images/user2.png"
import User3 from "../../public/assets/images/user3.png"
import User1 from "../../public/assets/images/user1.png"



export default function Actualite() {

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
                <Carousel.Slide>
                    <CardActualite />
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="card-actualite">
                        <div className="card-image">
                            <Image src={User2} alt="Utilisateur 1" />
                        </div>
                        <div className="content-actualite">
                            <div className="date">
                                <p>13 juillet 2023</p>
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Error fuga tempore,
                                    vitae reiciendis dolorum non facere mollitia 
                                    doloremque esse autem!
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="card-actualite">
                        <div className="card-image">
                            <Image src={User3} alt="Utilisateur 1" />
                        </div>
                        <div className="content-actualite">
                            <div className="date">
                                <p>13 juillet 2023</p>
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Error fuga tempore,
                                    vitae reiciendis dolorum non facere mollitia 
                                    doloremque esse autem!
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="card-actualite">
                        <div className="card-image">
                            <Image src={User1} alt="Utilisateur 1" />
                        </div>
                        <div className="content-actualite">
                            <div className="date">
                                <p>13 juillet 2023</p>
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Error fuga tempore,
                                    vitae reiciendis dolorum non facere mollitia 
                                    doloremque esse autem!
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="card-actualite">
                        <div className="card-image">
                            <Image src={User2} alt="Utilisateur 1" />
                        </div>
                        <div className="content-actualite">
                            <div className="date">
                                <p>13 juillet 2023</p>
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Error fuga tempore,
                                    vitae reiciendis dolorum non facere mollitia 
                                    doloremque esse autem!
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className="card-actualite">
                        <div className="card-image">
                            <Image src={User3} alt="Utilisateur 1" />
                        </div>
                        <div className="content-actualite">
                            <div className="date">
                                <p>13 juillet 2023</p>
                            </div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Error fuga tempore,
                                    vitae reiciendis dolorum non facere mollitia 
                                    doloremque esse autem!
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
            </Carousel>
        </div>
    )
}
import React from "react";
import Image from "next/image"
import User1 from "../../public/assets/images/user1.png"
import User2 from "../../public/assets/images/user2.png"
import User3 from "../../public/assets/images/user3.png"


export default function CardActualite({taille, image, description}) {

    return (
        <div className={`card-actualite ${taille}`}>
            <div className={`card-image ${image}`}>
                <Image src={User1} alt="Utilisateur 1" />
            </div>
            <div className={`content-actualite ${description}`}>
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

    )
}
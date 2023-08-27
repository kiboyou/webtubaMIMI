import React from "react";
import Image from "next/image"
import User1 from "../../public/assets/images/user1.png"
import User2 from "../../public/assets/images/user2.png"
import User3 from "../../public/assets/images/user3.png"


export default function CardActualite({taille, image, description, date, texte, img}) {

    return (
        <div className={`card-actualite ${taille}`}>
            <div className={`card-image ${image}`}>
                <Image src={`${img}`} alt="Utilisateur 1" width="70" height="70" unoptimized/>
            </div>
            <div className={`content-actualite ${description}`}>
                <div className="date">
                    <p>{date}</p>
                </div>
                <div className="description">
                    <p>
                       {texte}
                    </p>
                </div>
            </div>
        </div>

    )
}
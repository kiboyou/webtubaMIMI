import React from "react";
import Title from "../Title";
import Image from "next/image"
import Team from "../../public/assets/images/teams.png"
import User from "../../public/assets/images/echecs.png"

export default function Teams() {

    return (
            <div className="container-teams">
                <Title title="NOTRE EQUIPE" />
                <div className="teams-card">
                    <div className="team-image">
                        <Image src={Team} alt="image d'equipe" className="image" />
                    </div>
                    <div className="container-image">
                        <div className="card-image">
                            <Image src={User} alt="image d'equipe" className="image" />
                        </div>
                        <div className="card-image">
                            <Image src={User} alt="image d'equipe" className="image" />
                        </div>
                        <div className="card-image">
                            <Image src={User} alt="image d'equipe" className="image" />
                        </div>
                    </div>
                </div>
            </div>
        )
}
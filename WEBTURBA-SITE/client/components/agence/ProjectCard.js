import Image from "next/image";
import React from "react";


export default function ProjectCard({item}) {

    return (
            <div className="project-card">
                <div className="image-card">
                    <Image src={item.image} width={100} alt="image du projet" height={100}/>
                </div>
                    <div className="description">
                        <p>
                            {
                                item.description
                            }
                        </p>    
                </div>
            </div>
        )
}
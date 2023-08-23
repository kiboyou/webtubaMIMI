import React from "react";
import { projectData } from "./projectData";
import Title from "../Title";
import ProjectCard from "./ProjectCard";


export default function Project() {

    return (
            <div className="project">
                <div className="container">
                    <Title title={'NOS PROJETS'}/>
                    <div className="bottom">
                        {
                            projectData.map((item , index) => <ProjectCard key={index} item={item}/>)
                        }
                    </div>
                </div>
            </div>
    )
}
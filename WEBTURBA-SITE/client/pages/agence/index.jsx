import About from "@/components/agence/About";
import Project from "@/components/agence/Project";
import Teams from "@/components/agence/teams";
import Image from "next/image";
import React from "react";


export default function index() {

    return (
        <div style={{position: "relative", color: "white", zIndex: 500}} className="agence-page">
            <header>
                <Image src="/assets/images/img-agence.png" width={1000} height={500}/>           
            </header>
            <div className="content">
                <About />
                <Project />
                <Teams />
            </div>
        </div>
    )
}

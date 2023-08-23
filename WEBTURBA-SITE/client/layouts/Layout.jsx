import FollowUS from "@/components/FollowUS";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

export default function Layout({children}) {
    return (
        <div className="layout">
            <div className="layout-fond">

            </div>
            <FollowUS />
            <nav>
                <Nav />
            </nav>
            <main>
                {
                    children
                }
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
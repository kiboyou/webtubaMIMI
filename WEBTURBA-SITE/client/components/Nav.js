import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="logo">
          <Image
            src="/assets/images/log hori 1.png"
            width={150}
            priority
            height={50}
            alt="logo web turba"
          />
        </div>
      </Link>
      <div className="items">
        <ul>
          <Link href="/">
            <li className={router.pathname == "/" ? "active" : ""}>ACCEUIL</li>
          </Link>
          <Link href="/agence">
            <li className={router.pathname == "/agence" ? "active" : ""}>
              L'AGENCE
            </li>
          </Link>
          <Link href="/realisation">
            <li className={router.pathname == "/realisation" ? "active" : ""}>
              NOS REALISATIONS
            </li>
          </Link>
          <Link href="/blog">
            <li className={router.pathname == "/blog" ? "active" : ""}>BLOG</li>
          </Link>
          <Link href="/contact">
            <li className={router.pathname == "/contact" ? "active" : ""}>
              CONTACTS
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

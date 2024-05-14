"use client";

import { useState } from "react";
import Image from "next/image";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import './styles.css';


export default function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="header-wrapper">
            <RiMenu3Fill className={`${isActive ? 'hide' : 'menu-icon'}`} onClick={() => setIsActive((prevState) => !prevState)} />
             <header className={`${isActive ? 'header-container' : 'hide-header'}`}>
            <IoMdClose className="menu-icon" onClick={() => setIsActive((prevState) => !prevState)} />
            <nav className="nav-wrapper">

                <ul className="menu-wrapper">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Sobre</li>
                    <li className="menu-item">Serviços</li>
                    <li className="menu-item">Produtos</li>
                    <li className="menu-item">Blog</li>
                    <li className="menu-item">Contato</li>
                </ul>
            </nav>
        </header>
        </div>
       
    )
}
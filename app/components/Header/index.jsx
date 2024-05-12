import Image from "next/image";
import { Menu11Icon } from '@hugeicons/react-pro';
import './styles.css';


export default function Header() {
    return (
        <header className="header-container">
            <Menu11Icon size={24} color="black" />
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
    )
}
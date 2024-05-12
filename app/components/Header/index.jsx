import Image from "next/image";
import './styles.css';


export default function Header() {
    return (
        <header className="header-container">
            
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
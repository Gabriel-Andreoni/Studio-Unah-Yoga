import './styles.css'
import { IoIosArrowDown } from "react-icons/io";

import Header from "../Header";

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <Header />

            <div className="hero-container">
                <h1 className="hero-title"><span>Unah</span> <span>Yoga</span></h1>
                <IoIosArrowDown className="hero-icon" />
            </div>
        </div>
    )
}
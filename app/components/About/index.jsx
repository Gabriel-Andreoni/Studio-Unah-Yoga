import './styles.css';

import Image from 'next/image';
import AboutImage from '/public/about-img.jpg'

export default function About() {
    return (
        <section className="about-wrapper">
            <div className="about-image">
                <Image src={AboutImage} alt="" width="500" height="500"/>
            </div>
            <div className="about-apresentation">
                <h2>Onde você recuperar suas energias?</h2>
                <p>O estudio Unah Yoga é um espaço acolhedor e tranquilo dedicado à prática do yoga. Oferecemos uma variedade de aulas, desde Hatha e Vinyasa até Yoga Restaurativa e Meditação Guiada, adequadas para todos os níveis de experiência. Nossos instrutores são certificados e comprometidos em proporcionar uma experiência de bem-estar holística. O ambiente do estúdio é sereno, com decoração minimalista, luz suave e aromas relaxantes, criando um refúgio perfeito para a mente e o corpo. Venha descobrir a harmonia e o equilíbrio no estudio Unah Yoga.</p>
            </div>
        </section>
    )
}
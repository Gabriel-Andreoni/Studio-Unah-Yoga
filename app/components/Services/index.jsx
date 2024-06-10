"use client";

import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import './styles.css';

const modalidades = [
    {
        id: 1,
        title: 'Atividade?',
        subtitle: 'Yoga Ativo',
        description: (
            <>
                <h3>Para os que buscam se desafiar</h3>
                <p>Proposta de meditação em movimento, unindo posturas e respiração <br />Aprimora o corpo físico, a capacidade respiratória e senso de autoconfiança.</p>
            </>
        ),
        image: '',
    },
    {
        id: 2,
        title: 'Presença?',
        subtitle: 'Yoga Presente',
        description: (
            <>
                <h3>Ideal para iniciantes.</h3>
                <p>Proposta de pausa e presença, posturas que trazem consciência de si, sintoniza corpo e mente. <br /> Podendo ser desafiador e aterrado.</p>
            </>
        ),
    },
    {
        id: 3,
        title: 'Relaxamento?',
        subtitle: 'Yoga Tranquilo',
        description: (
            <>
                <h3>Para quem deseja desacelerar e se reconectar.</h3>
                <p>Menos posturas, quietude e voltado para a restauração do corpo, da mente e das emoções.</p>
            </>
        ),
    },
];

const modalidadesExtras = [
    {
        id: 4,
        title: "Postura?",
        subtitle: "Surya Namaskar",
        description: (
            <>
                <h3>Saudação ao Sol.</h3>
                <p>Sequência de 12 posturas do hathia yoga que combinam respiração e movimento, para quem deseja se encher de energia e vitalidade.</p>
            </>
        ),
    },
    {
        id: 5,
        title: "Autoconhecimento?",
        subtitle: "Meditação",
        description: (
            <>
                <h3></h3>
                <p>Um processo de autoconhecimento para quem deseja trazer mais consciência de si e uma melhor relação com seu universo particular.</p>
            </>
        ),
    },
    {
        id: 6,
        title: "Aprofundar?",
        subtitle: "Técnicas de Postura",
        description: (
            <>
                <h3></h3>
                <p>Para quem deseja se aprofundar na consciência corporal e aprimoramento físico.</p>
            </>
        ),
    },
];

function LoopedServices({ serviceArray, activeID, setActiveID, isHide,  setIsHide }) {
    return (
        <>
            {serviceArray.map((service) => (
                <li
                    key={service.id}
                    className={`services-card ${activeID === service.id ? 'active' : ''} ${isHide === service.id ? 'hidden' : ''}`}
                    onClick={() => setActiveID(service.id)}
                >
                    <h2>{service.title}</h2>
                    <h3>{service.subtitle}</h3>

                <IoMdClose className={`close-icon ${activeID === service.id ? 'active' : ''}`}  onClick={(e) => {
                    e.stopPropagation();
                    setIsHide(service.id);
                    setActiveID(null);
                }}/>
                </li>
            ))}
        </>
    );
}

export default function Services() {
    const [activeID, setActiveID] = useState(null);
    const [isHide, setIsHide] = useState(false);


    return (
        <section className="services-wrapper">
            <div className="services-content">
                <h2>O que seu corpo pede hoje?</h2>
                <ul className="services-list">
                    <LoopedServices
                        serviceArray={modalidades}
                        activeID={activeID}
                        setActiveID={setActiveID}
                        isHide={isHide}
                        setIsHide={setIsHide}
                    />
                    <LoopedServices
                        serviceArray={modalidadesExtras}
                        activeID={activeID}
                        setActiveID={setActiveID}
                        isHide={isHide}
                        setIsHide={setIsHide}
                    />
                </ul>
            </div>
        </section>
    );
}

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
                <h4>Para os que buscam se desafiar</h4>
                <p>Proposta de meditação em movimento, unindo posturas e respiração <br />Aprimora o corpo físico, a capacidade respiratória e senso de autoconfiança.</p>
                <button>Conheça-já</button>
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
                <h4>Ideal para iniciantes.</h4>
                <p>Proposta de pausa e presença, posturas que trazem consciência de si, sintoniza corpo e mente. <br /> Podendo ser desafiador e aterrado.</p>
                <button>Conheça-já</button>
            </>
        ),
    },
    {
        id: 3,
        title: 'Relaxamento?',
        subtitle: 'Yoga Tranquilo',
        description: (
            <>
                <h4>Para quem deseja desacelerar e se reconectar.</h4>
                <p>Menos posturas, quietude e voltado para a restauração do corpo, da mente e das emoções.</p>
                <button>Conheça-já</button>
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
                <h4>Saudação ao Sol.</h4>
                <p>Sequência de 12 posturas do hathia yoga que combinam respiração e movimento, para quem deseja se encher de energia e vitalidade.</p>
                <button>Conheça-já</button>
            </>
        ),
    },
    {
        id: 5,
        title: "Autoconhecimento?",
        subtitle: "Meditação",
        description: (
            <>
                <h4>Meditação</h4>
                <p>Um processo de autoconhecimento para quem deseja trazer mais consciência de si e uma melhor relação com seu universo particular.</p>
                <button>Conheça-já</button>
            </>
        ),
    },
    {
        id: 6,
        title: "Aprofundar?",
        subtitle: "Técnicas de Postura",
        description: (
            <>
                <h4>Técnicas de Postura</h4>
                <p>Para quem deseja se aprofundar na consciência corporal e aprimoramento físico.</p>
                <button>Conheça-já</button>
            </>
        ),
    },
];

function LoopedServices({ serviceArray, activeID, setActiveID}) {
    return (
        <>
            {serviceArray.map((service) => (
                <li
                    key={service.id}
                    className={`services-card ${activeID === service.id ? 'active' : ''}`}
                    onClick={() => setActiveID(service.id)}
                >
                    <h2>{service.title}</h2>
                    <div>{service.description}</div>

                <IoMdClose className={`close-icon ${activeID === service.id ? 'active' : ''}`}  onClick={(e) => {
                    e.stopPropagation();
                    setActiveID(null);
                }}/>
                </li>
            ))}
        </>
    );
}

export default function Services() {
    const [activeID, setActiveID] = useState(null);


    return (
        <section className="services-wrapper">
            <div className="services-content">
                <h2>O que seu corpo pede hoje?</h2>
                <ul className="services-list">
                    <LoopedServices
                        serviceArray={modalidades}
                        activeID={activeID}
                        setActiveID={setActiveID}
                    />
                    <LoopedServices
                        serviceArray={modalidadesExtras}
                        activeID={activeID}
                        setActiveID={setActiveID}
                    />
                </ul>
            </div>
        </section>
    );
}

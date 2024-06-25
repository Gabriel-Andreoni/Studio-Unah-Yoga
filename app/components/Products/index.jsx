"use client";

import Image from 'next/image';

import { register } from 'swiper/element/bundle';

import './styles.css';

import product1 from '/public/jampalama.jpg';
import product2 from '/public/palo-santo.jpg';
import product3 from '/public/incenso.jpg';

const ProductsList = [
    {
        id: 1,
        src: product1,
        title: 'Japamala',
        description: (
            <>
                <p>
                    Ferramenta utilizada por praticantes de yoga e meditação.
                </p>

                <button>Saiba mais</button>
            </>

        )

    },

    {
        id: 2,
        src: product2,
        title: 'Palo Santo',
        description: (
            <>
                <p>
                    Ligado à cura, à proteção e à purificação
                </p>

                <button>Saiba mais</button>
            </>

        )

    },

    {
        id: 3,
        src: product3,
        title: 'Incenso',
        description: (
            <>
                <p>
                Naturais e artesanais, feitos com carinho e qualidade.
                </p>

                <button>Saiba mais</button>
            </>

        )

    },

]

register();

export default function Products() {
    return (
        <div className="products-wrapper">
            <section className="products-title">
                <h2>Produtos pensados no seu dia-a-dia</h2>

            </section>
            <section className="products-content">
                <swiper-container
                    className="products-slide"
                    slides-per-view="1"
                    navigation="true"
                    pagination="true"
                    scrollbar="true"
                >
                    <swiper-slide>

                    </swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>

                </swiper-container>
            </section>
        </div>
    )
}
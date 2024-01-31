"use client";

import About from './components/About';
import Hero from './components/Hero';
import Services from './components/Services';
import * as S from './styles'; 

export default function Home() {
  return (
    <S.MainContainer>
      <Hero />
      <About />
      <Services />
    </S.MainContainer>
  )
}

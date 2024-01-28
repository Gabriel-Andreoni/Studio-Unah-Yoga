"use client";

import About from './components/About';
import Hero from './components/Hero';
import * as S from './styles'; 

export default function Home() {
  return (
    <S.MainContainer>
      <Hero />
      <About />
    </S.MainContainer>
  )
}

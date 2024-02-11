import * as S from './styles';
import Header from "../Header";
import HeroImage from '/public/hero-image.png';
import Image from 'next/image';

export default function Hero() {
    return (
        <S.HeroWrapper>
            <Header />

            <S.HeroContainer>
                <S.HeroApresentation>
                    <S.HeroTitle>Studio Unah Yoga</S.HeroTitle>
                    <S.HeroSubtitle>Olhe para dentro e encontre o universo</S.HeroSubtitle>
                    <S.HeroButton>Saiba Mais</S.HeroButton>
                </S.HeroApresentation>

                <S.HeroImage>
                    <Image src={HeroImage} alt="foto de uma moça em posição de yoga" width="500" height="500" loading="lazy" />
                </S.HeroImage>

            </S.HeroContainer>
        </S.HeroWrapper>
    )
}
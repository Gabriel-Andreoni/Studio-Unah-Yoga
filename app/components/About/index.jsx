import * as S from './style';
import Image from 'next/image';
import AboutImage from '/public/about-image.png';
import WhatsAppIcon from '/public/whatsapp.png';
import InstagramIcon from '/public/instagram.png';

export default function About() {
    return (
        <S.AboutWrapper>
            <S.AboutContent>
                <S.AboutTitle>About section</S.AboutTitle>

                <S.AboutText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magnam labore quam totam, fugit asperiores, incidunt odio obcaecati eum aspernatur recusandae? Reprehenderit inventore non aut nesciunt tempora adipisci dolor perferendis!
                </S.AboutText>

                <S.AboutText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta blanditiis a dolorem cupiditate quis, officia asperiores pariatur consequatur recusandae ex exercitationem, id aspernatur! Magni amet praesentium nulla impedit illum.</S.AboutText>


                <S.SocialMediaContainer>
                    <Image style={{cursor: 'pointer'}} src={WhatsAppIcon} alt="icone do whatsapp" width="48" height="48" />
                    <Image style={{cursor: 'pointer'}} src={InstagramIcon} alt="icone do instagram" width="48" height="48" />
                </S.SocialMediaContainer>
            </S.AboutContent>

            <S.AboutImage>
                <Image src={AboutImage} alt="Imagem de uma mandala" width="400" height="400" />
            </S.AboutImage>
        </S.AboutWrapper>
    )
}

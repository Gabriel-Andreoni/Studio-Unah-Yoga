import * as S from './styles';
import Image from 'next/image';
import ServiceBigTitleImg from '/public/service-big-title-img.png';
import CardListImg from '/public/card-services-img.png';
import styled from 'styled-components'

const services = [
    {
        id: 1,
        title: 'Atividade?',
        subtitle: 'Yoga Ativo',
        description: 'Para os que buscam se desafiar. Proposta de meditação em movimento, unindo posturas e respiração. Aprimora o corpo físico, a capacidade respiratória e sendo de autoconfiança.'
    },

    {
        id: 2,
        title: 'Presença?',
        subtitle: 'Yoga Presente',
        description: 'Ideal para iniciantes. Proposta de pausa e presença, posturas que trazem consciência de si, sintoniza corpo e mente. Podendo ser desafiador e aterrado.'
    },
    {
        id: 3,
        title: 'Relaxamento?',
        subtitle: 'Yoga Tranquilo',
        description: 'Para quem deseja desacelerar e se reconectar. Menos posturas, quietude e voltando para a restauração do corpo, da mente e das emoções.'
    },
]

const extraServices = [
    {
        id: 1,
        title: 'Postura?',
        subtitle: 'Surya Namaskar',
        description: 'Saudação ao Sol. Sequencia de 12 posturas do hatha yoga que combinam respiração e movimento, para quem deseja se echer de energia e vitalidade.'
    },

    {
        id: 2,
        title: 'Autoconhecimento?',
        subtitle: 'Meditação',
        description: 'Um processo de autoconhecimento para quem deseja trazer mais consciência de si e uma melhor relação com seu universo particular.'
    },

    {
        id: 3,
        title: 'Aprofundar?',
        subtitle: 'Técnicas de Postura',
        description: 'Para quem deseja se aprofundar na consciência corporal e aprimoramento físico.'
    }
]

const StyledImage = styled(Image)`
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    
   
    margin: 0 auto;

    @media (max-width: 480px) {
        width: 300px;
        height: 300px;

        top: 25%;
    }


`;

const StyledBackgroundCard = styled(Image)`
    position: absolute;
    top: -80%;
    right: -29%;
    rotate: 225deg;

    @media (max-width: 480px) {
        top: -20%;
        right: -79%;
    }
`;

export default function Services() {
    return (
        <S.ServicesContainer>
            <S.ServicesBigTitle>
                <StyledImage
                    src={ServiceBigTitleImg}
                    width="500"
                    height="500"
                    alt="Imagem de uma pessoa em posição de yoga"
                    loading="lazy"
                />

                <S.ServicesTitle>Serviços</S.ServicesTitle>
            </S.ServicesBigTitle>

            <S.ServicesContent>
                <S.ServicesList>
                    {services.map((service) => {
                        return (
                            <S.ServiceListItem key={service.id}>
                                <StyledBackgroundCard
                                    src={CardListImg}
                                    width="500"
                                    height="500"
                                    alt="Imagem de uma flor de lotus"
                                    loading="lazy"

                                />
                                <S.ServiceItemTitle>{service.title}</S.ServiceItemTitle>
                                <S.ServiceItemSubtitle>{service.subtitle}</S.ServiceItemSubtitle>
                                <S.ServiceItemText>{service.description}</S.ServiceItemText>
                            </S.ServiceListItem>
                        )
                    })}
                </S.ServicesList>
            </S.ServicesContent>

        </S.ServicesContainer>
    )
}
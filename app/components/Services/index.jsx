import * as S from './styles';
import Image from 'next/image';
import ServiceBigTitleImg from '/public/service-big-title-img.png';
import CardListImg from '/public/card-services-img.png';

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

export default function Services() {
    return (
        <S.ServicesContainer>
            <S.ServicesBigTitle>
                <Image style={{
                    position: 'absolute',
                    top: '20%',
                    inset: 0,
                    margin: '0 auto'

                }} src={ServiceBigTitleImg} alt='Imagem de uma pessoa em posição de yoga' width='500' height='500' />

                <S.ServicesTitle>Serviços</S.ServicesTitle>
            </S.ServicesBigTitle>

            <S.ServicesContent>
                <S.ServicesList>
                    {services.map((service) => {
                        return (
                            <S.ServiceListItem key={service.id}>
                                <Image style={{
                                        position: 'absolute',
                                        top: '-80%',
                                        right: '-29%',
                                        rotate: '225deg'
                                }} src={CardListImg} alt='Imagem de uma lotus' width='500' height='500' />
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
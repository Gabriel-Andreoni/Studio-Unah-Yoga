import * as S from './styles';
import TapeteYoga from '/public/tapete.jpg';
import BlocoYoga from '/public/bloco.jpg';
import KitAlinhamento from '/public/kit-alinhamento.jpg';
import RoupaYoga from '/public/roupa.jpg';
import BolaYoga from '/public/bola.jpg';
import MantaYoga from '/public/manta.jpg';

const products = [
    {
        id: 1,
        title: 'Tapete de Yoga Eco-Friendly',
        description: 'Este tapete de yoga é feito de material eco-friendly, proporcionando uma base antiderrapante e confortável para suas práticas diárias. Seu design durável e leve torna-o perfeito para transportar para qualquer lugar.',
        image: TapeteYoga
    },

    {
        id: 2,
        title: 'Bloco de Yoga de Espuma de Alta Densidade',
        description: 'Nosso bloco de yoga de espuma de alta densidade é essencial para aprimorar sua postura e flexibilidade. Leve e durável, este bloco oferece suporte ideal durante poses desafiadoras, ajudando você a alcançar novos patamares em sua prática.',
        image: BlocoYoga
    },

    {
        id: 3,
        title: 'Kit de Alinhamento de Yoga',
        description: 'Atingir a postura perfeita nunca foi tão fácil com nosso kit de alinhamento de yoga. Incluindo uma correia de algodão e dois blocos de espuma, este conjunto é projetado para ajudá-lo a aprimorar sua técnica e alcançar um novo nível de equilíbrio e flexibilidade.',
        image: KitAlinhamento
    },

    {
        id: 4,
        title: 'Roupa de Yoga Respirável',
        description: 'Sinta-se confortável e confiante em sua prática com nossa roupa de yoga respirável. Feita com tecido leve e elástico, esta coleção oferece liberdade de movimento enquanto absorve a umidade, mantendo você fresco e seco durante cada postura.',
        image: RoupaYoga
    },

    {
        id: 5,
        title: 'Bola de Yoga Anti-Burst',
        description: 'Fortaleça seu núcleo e melhore sua estabilidade com nossa bola de yoga anti-burst. Feita de material durável e resistente, esta bola é perfeita para exercícios de equilíbrio, fortalecimento e alongamento, ajudando você a alcançar seus objetivos de condicionamento físico.',
        image: BolaYoga
    },

    {
        id: 6,
        title: 'Manta de Yoga Reversível',
        description: 'Envolva-se em conforto e estilo com nossa manta de yoga reversível. Com uma textura macia e absorvente, esta manta é perfeita para acolher seu corpo durante a prática de yoga e também pode ser usada como uma adição elegante à sua decoração doméstica.',
        image: MantaYoga
    }
]

export default function Products() {
    return (
        <S.ProductsContainer>
            <h1>Products Page</h1>

            <S.ListProducts>
                {products.map((product) => {
                    return (
                        <S.ProductItem key={product.id}>
                            <S.ProductHeader>
                                <S.ProductImage src={product.image} width="200" height="200" alt="Imagem do produto" />
                            </S.ProductHeader>

                            <S.ProcuctContent>
                                <S.ProductTitle>{product.title}</S.ProductTitle>
                                <S.ProductDescription>{product.description}</S.ProductDescription>
                                <S.ProductButton>Saiba mais</S.ProductButton>
                            </S.ProcuctContent>
                        </S.ProductItem>
                    )
                })}
            </S.ListProducts>
        </S.ProductsContainer>
    )
}
import './styles.css';

const prodocuts = [
    {
        id: 1,
        title: 'Atividade?',
        subtitle: 'Yoga Ativo',
        description: () => {
            return (
                <>
                    <h3>Para os que buscam se desafiar</h3>
                    <p>Proposta de meditação em movimento, unindo posturas e respiração <br />Aprimora o corpo físico, a capacidade respiratória e senso de autoconfiança.</p>
                </>
            )
        },
        image: '',
    },

    {
        id: 2,
        title: 'Presença?',
        subtitle: 'Yoga Presente',
        description: () => {
            return (
                <>
                    <h3>Para os que buscam se desafiar</h3>
                    <p>Proposta de meditação em movimento, unindo posturas e respiração <br />Aprimora o corpo físico, a capacidade respiratória e senso de autoconfiança.</p>
                </>
            )
        }
    }
]

const loopedProducts = prodocuts.map((product) => {
    return (
        <li key={product.id}>{product.title}</li>
    )
})
export default function Services() {
    return (
        <section className="services-wrapper">
            <div className="services-header">
                <h1>Serviços</h1>
            </div>
            <div className="services-content">
                <ul>
                    {loopedProducts}
                </ul>
            </div>
        </section>
    )
}
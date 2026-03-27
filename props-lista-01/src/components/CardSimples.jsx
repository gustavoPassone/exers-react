function CardSimples(props) {
    return (
        <>
            <div className="card-simples">
                <p>{props.titulo}</p>
                <p>{props.descricao}</p>
            </div>
        </>
    )
}

export default CardSimples
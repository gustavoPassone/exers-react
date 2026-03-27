function CardProduto(props) {
    return (
        <>
            <p>{props.nome}</p>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </>
    )
}

export default CardProduto
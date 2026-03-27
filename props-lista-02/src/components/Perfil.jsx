function Perfil(props) {
    return (
        <>
            <p>{props.nome}</p>
            <p>{props.preco}</p>
            <img src={props.imagem} alt="" />
        </>
    )
}

export default Perfil
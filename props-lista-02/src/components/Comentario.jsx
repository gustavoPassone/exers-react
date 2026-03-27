function Comentario(props) {
    return (
        <>
            <img src={props.imagem} alt="" />
            <p>{props.titulo}</p>
            <p>{props.texto}</p>
        </>
    )
}

export default Comentario
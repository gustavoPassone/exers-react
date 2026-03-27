function Aluno(props) {
    return (
        <>
            <p>{props.nome}</p>
            <p>{props.nota}</p>
            <p>{props.nota >=7 ? "Aprovado" : "Reprovado"}</p>
        </>
    )
}

export default Aluno
function Menu(props) {
    return (
        <>
            <nav>
                <ul>
                    <li><a href={props.link}>{props.pagina}</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
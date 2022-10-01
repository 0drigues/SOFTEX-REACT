function Person({foto, nome, idade, prof}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {prof}</p>
        </div>
    )
}

export default Person
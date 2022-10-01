function Event1() {

    function myEvent(){
        console.log("Evento disparado com sucesso!")
        alert("Evento disparado com sucesso!")
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={myEvent}>Disparar</button>
        </div>
    )
}

export default Event1
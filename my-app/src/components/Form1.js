import {useState} from 'react';
import styles from './Form1.module.css'

function Form1() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(`Usuário ${name} foi cadastrado com sucesso!`)
        alert(`Usuário ${name} foi cadastrado com sucesso!`);
    }

    const [name, setName] = useState();

    return(
        <div>
            <h1>Cadastro de dados</h1>
            <form onSubmit = {cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    className ={styles.formBoxes} 
                    type ="text"
                    id="name"
                    name = "name"
                    placeholder="Digite o seu nome" 
                    onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Idade: </label>
                    <input 
                    className = {styles.formBoxes} 
                    type ="number" 
                    placeholder="Digite a sua idade"/>
                </div>

                <div>
                    <input type="submit" placeholder="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form1
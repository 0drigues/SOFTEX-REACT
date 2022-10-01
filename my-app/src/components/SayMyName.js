import styles from './SayMyName.module.css'


function SayMyName(props) {

    return (
        <div className = {styles.fraseContainer}>
            <p className = {styles.fraseContent}>Olá, {props.nome}. Tudo bem com você?</p>
        </div>
    )
}

export default SayMyName;
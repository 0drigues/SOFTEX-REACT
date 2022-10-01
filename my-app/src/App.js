import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import Event1 from './components/Event1';
import Form1 from './components/Form1';
import styles from './components/SayMyName.module.css';
import {BrowserRouter as Router, Routes, Route, Link, useRoutes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

const name = 'José Matheus'

const url = 'https://via.placeholder.com/200'
const url2 = 'https://via.placeholder.com/150'

function sum(a, b){
  return a + b
}

function App() {

  const nome = 'Alfredo';

  return (
    <div className='App'>
      <header>
        <h1>Olá, meu nome é {name}. Este é um componente principal</h1>
        <p>Bem-vindo à minha primeira aplicação em React</p>
        <p>Testando recursos agora... Soma: {sum(1, 2)}</p>
        <p>Teste de imagem exportada com uma URL: <br/><br/> <img src={url} alt='img 200x200'/></p>
        <HelloWorld />
        <h2>O trecho abaixo trata-se da utilização de props com direito a reaproveitamento utilizando diversos nomes: "usuário", "Roberto" e "Alrikemes", por exemplo.</h2>
        <SayMyName nome = 'usuário' />
        <SayMyName nome = 'Roberto' />
        <SayMyName nome = 'Alrikemes' />
        <p className={styles.fraseContent}>Utilizando uma constante como o nome:</p>
        <SayMyName nome = {nome} />
        <h2>Criando um perfil pessoal utilizando props:</h2>
        <Person 
        foto = {url2}
        nome = 'José Matheus'
        idade = '20 anos'
        prof = 'Estudante'/>

        <h2>Testando a utilização de eventos:</h2>
        <Event1 />
        <Form1 />
        
        
      </header>

      <Router>
        <body>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </body>
      </Router>

        <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/contact" element={<Contact/>} />
            
        </Routes>

    </div>
    
  );
}

export default App;

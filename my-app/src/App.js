import './App.css';
import HelloWorld from './components/HelloWorld';

const name = 'José Matheus'

const url = 'https://via.placeholder.com/200'

function sum(a, b){
  return a + b
}

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Olá, meu nome é {name}. Este é um componente principal</h1>
        <p>Bem-vindo à minha primeira aplicação em React</p>
        <p>Testando recursos agora... Soma: {sum(1, 2)}</p>
        <p>Teste de imagem exportada com uma URL: <img src={url} alt='img 200x200'/></p>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;

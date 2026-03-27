import "./App.css";
import Titulo from "./components/Titulo";
import Paragrafo from "./components/Paragrafo";
import Imagem from "./components/Imagem";
import Botao from "./components/Botao";
import Produto from "./components/Produto";
import Saudacao from "./components/Saudacao";
import CardSimples from "./components/CardSimples"
import Rodape from "./components/Rodape";
import Status from "./components/Status";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <Titulo titulo="AI Academy" />
        <div className="nav-right">
          <Status mensagem="Turmas Abertas" />
          <Saudacao nome="Gustavo" />
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <Paragrafo paragrafo="Domine as ferramentas que estão moldando o futuro." />
          <Botao label="Começar agora" />
        </div>
        <div className="hero-image">
          <Imagem imagem="./assets/image.jpg" />
        </div>
      </header>

      <main className="content">
        <section className="features">
          <CardSimples 
            titulo="Ecossistema Completo" 
            descricao="Aprenda desde o básico até o avançado com mais de 5.000 alunos." 
          />
        </section>

        <section className="product-highlight">
          <Produto nome="Curso Master em IA" preco="R$ 149,90" />
          <Botao label="Garantir minha vaga" />
        </section>
      </main>

      <footer className="footer-area">
        <Rodape ano="2026" />
      </footer>
    </div>
  );
}

export default App;

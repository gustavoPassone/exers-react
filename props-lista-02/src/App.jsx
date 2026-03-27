import "./App.css"
import Layout from "./components/Layout";
import Menu from "./components/Menu";
import Perfil from "./components/Perfil";
import CardProduto from "./components/CardProduto";
import ListaUsuarios from "./components/ListaUsuarios";
import Post from "./components/Post";
import Comentario from "./components/Comentario";
import TabelaSimples from "./components/TabelaSimples";
import Aluno from "./components/Aluno";

function App() {
  return (
    <Layout
      header={<Menu link="#home" pagina="Dashboard Pro" />}
      main={
        <div className="content-grid">
          {/* Coluna Lateral: Perfil e Usuários */}
          <aside className="sidebar">
            <Perfil 
              nome="Gustavo Oliveira" 
              email="gustavo.dev@mail.com" 
              foto="https://pravatar.cc" 
            />
            <section className="card-section">
              <h3>Equipe Ativa</h3>
              <ListaUsuarios nome="João Silva" idade="20" />
              <ListaUsuarios nome="Maria Souza" idade="25" />
              <ListaUsuarios nome="Ana Costa" idade="47" />
              <ListaUsuarios nome="Lucas Lima" idade="31" />
            </section>
          </aside>

          {/* Coluna Central: Feed e Conteúdo */}
          <div className="main-feed">
            <Post 
              titulo="Explorando o ecossistema React" 
              autor="Gustavo" 
              conteudo="O uso de componentes funcionais e props permite criar interfaces escaláveis e de fácil manutenção..." 
            />
            <Comentario 
              imagem="https://pravatar.cc" 
              titulo="Excelente reflexão!" 
              texto="O conteúdo ajudou muito a entender a separação de responsabilidades no front-end." 
            />
            
            <section className="table-section">
              <h3>Histórico de Vendas</h3>
              <TabelaSimples data="25/03" nome="Monitor UltraWide 29'" valor="R$ 1.150,26" />
              <TabelaSimples data="27/03" nome="Teclado Mecânico RGB" valor="R$ 235,25" />
              <TabelaSimples data="28/03" nome="Mouse Gamer 16k DPI" valor="R$ 180,00" />
            </section>
          </div>

          {/* Coluna Direita: Marketplace e Acadêmico */}
          <aside className="widgets">
            <CardProduto 
              nome="MacBook Air M2" 
              preco="R$ 7.999,00" 
              descricao="8GB RAM, 256GB SSD - Desempenho absurdo com silêncio total." 
            />
            <section className="card-section">
              <h3>Desempenho dos Alunos</h3>
              <Aluno nome="Guilherme Santos" nota={8.5} />
              <Aluno nome="Rodrigo Melo" nota={5.0} />
            </section>
          </aside>
        </div>
      }
      footer={<p>© 2024 Dashboard Pro - Todos os direitos reservados.</p>}
    />
  );
}

export default App;

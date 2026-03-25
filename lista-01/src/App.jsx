function App() {
  // Dados Pessoais
  let nome = "Gustavo";
  let idade = 20;
  let profissao = "Programador";
  let hobby = "Jogar videogame";
  let saudacao = "Bom dia";

  // Localização e Clima
  let cidade = "São Paulo";
  let pais = "Brasil";
  let temperatura = 28;

  // Educação e Carreira
  let curso = "React";
  let escola = "Flamingo";
  let estudandoReact = true;

  // Cálculos e Números
  let numero1 = 10;
  let numero2 = 20;
  let numeroFavorito = 7;
  let ano = 2026;
  let anoNascimento = 2006;
  let anoAtual = 2026;

  // Financeiro
  let produto = "Notebook";
  let preco = 3500;

  return (
    <main>

      <section>
        <p><strong>Exercicio 1:</strong> Olá, meu nome é {nome}</p>
        <p><strong>Exercicio 2:</strong> Eu tenho {idade} anos</p>
        <p><strong>Exercicio 3:</strong> A soma é: {numero1 + numero2}</p>
        <p><strong>Exercicio 4:</strong> Eu moro em: {cidade} - {pais}</p>
        <p><strong>Exercicio 5:</strong> Estou estudando React: {estudandoReact ? "Sim" : "Não"}</p>
      </section>

      <hr />

      <section>
        <p><strong>Exercicio 6:</strong></p>
        <ul>
          <li>Nome: {nome}</li>
          <li>Idade: {idade}</li>
          <li>Profissão: {profissao}</li>
        </ul>
      </section>

      <section>
        <p><strong>Exercicio 7:</strong> {produto} | Preço: R$ {preco}</p>
        <p><strong>Exercicio 8:</strong> {saudacao}, {nome}!</p>
        <p><strong>Exercicio 9:</strong> Multiplicação: {numero1 * numero2}</p>
        <p><strong>Exercicio 10:</strong> Estamos no ano de {ano}</p>
      </section>

      <hr />

      <section>
        <p><strong>Exercicio 11:</strong> {nome} estuda {curso} na {escola}</p>
        <p><strong>Exercicio 12:</strong> Idade calculada: {anoAtual - anoNascimento} anos</p>
        <p><strong>Exercicio 13:</strong> Meu número favorito é {numeroFavorito}</p>
        <p><strong>Exercicio 14:</strong> A temperatura em {cidade} é de {temperatura}°C</p>
      </section>

      <hr />

      <article>
        <p><strong>Exercicio 15 - Perfil:</strong></p>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Hobby: {hobby}</p>
      </article>
    </main>
  );
}

export default App;

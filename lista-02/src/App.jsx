function App() {
  // Arrays de Textos (Strings)
  const frutas = ["Maçã", "Banana", "Uva"];
  const nomes = ["Ana", "Carlos", "João"];
  const cidades = ["São Paulo", "Rio", "Curitiba"];
  const cores = ["Azul", "Vermelho", "Verde"];
  const jogos = ["Minecraft", "FIFA", "GTA"];
  const comidas = ["Pizza", "Hambúrguer", "Sushi"];
  const filmes = ["Matrix", "Batman", "Avatar", "Interestelar"];
  const linguagens = ["JavaScript", "Python", "Java", "C#"];
  const tarefas = ["Estudar React", "Fazer exercícios", "Praticar código"];

  // Arrays de Números (Numbers)
  const numeros = [10, 20, 30];
  const numerosSoma = [5, 10, 15]; // Para o exercício 4
  const precos = [10, 25, 40];
  const idades = [18, 21, 30];
  const valores = [2, 4, 6];

  return (
    <main style={{textAlign: 'left', margin: '20px'}}>
      <section>
        <p><strong>Exercício 1:</strong> Primeira fruta: {frutas[0]}</p>
        <p><strong>Exercício 2:</strong> Eu gosto de {frutas[1]} e {frutas[2]}</p>
        <p><strong>Exercício 3:</strong> Primeiro número: {numeros[0]} | Segundo: {numeros[1]}</p>
        <p><strong>Exercício 4:</strong> Resultado da soma: {numerosSoma[0] + numerosSoma[1] + numerosSoma[2]}</p>
      </section>

      <hr />

      <section>
        <p><strong>Exercício 5:</strong></p>
        <ul>
          <li>Aluno 1: {nomes[0]}</li>
          <li>Aluno 2: {nomes[1]}</li>
          <li>Aluno 3: {nomes[2]}</li>
        </ul>
        <p><strong>Exercício 6:</strong> Minha cidade favorita é {cidades[1]}</p>
        <p><strong>Exercício 7:</strong> Preço 1: R${precos[0]} | Preço 2: R${precos[1]}</p>
        <p><strong>Exercício 8:</strong> Minhas cores favoritas são: {cores[0]}, {cores[1]} e {cores[2]}</p>
      </section>

      <hr />

      <section>
        <p><strong>Exercício 9:</strong> A soma das duas primeiras idades é: {idades[0] + idades[1]}</p>
        <p><strong>Exercício 10:</strong> Meu jogo favorito é {jogos[2]}</p>
        <p><strong>Exercício 11:</strong> Hoje eu quero comer {comidas[0]}</p>
        <p><strong>Exercício 12:</strong> Quantidade de filmes: {filmes.length}</p>
      </section>

      <hr />

      <section>
        <p><strong>Exercício 13:</strong> Primeira: {linguagens[0]} | Última: {linguagens[linguagens.length - 1]}</p>
        <p><strong>Exercício 14:</strong> Resultado: {valores[0] + valores[1] + valores[2]}</p>
        
        <article style={{ marginTop: '15px' }}>
          <p><strong>Exercício 15 - Minhas tarefas hoje:</strong></p>
          <ol>
            <li>{tarefas[0]}</li>
            <li>{tarefas[1]}</li>
            <li>{tarefas[2]}</li>
          </ol>
        </article>
      </section>
    </main>
  );
}

export default App;

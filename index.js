
const campoNome = document.getElementById("campoNome");
const campoNota = document.getElementById("campoNota");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.getElementById("listaAlunos");
const resumo = document.getElementById("resumo");

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.0 },
  { nome: "Carla", nota: 6.0 }
];

function mostrarAlunos() {
  listaAlunos.innerHTML = "";
  let aprovados = 0;

  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const item = document.createElement("li");

    if (aluno.nota >= 6) {
      item.textContent =
        aluno.nome + " - Nota " + aluno.nota.toFixed(1) + " - Aprovado";
      item.classList.add("aprovado");
      aprovados++;
    } else {
      item.textContent =
        aluno.nome + " - Nota " + aluno.nota.toFixed(1) + " - Reprovado";
      item.classList.add("reprovado");
    }

    listaAlunos.appendChild(item);
  }

  resumo.textContent =
    "Aprovados: " + aprovados + " de " + alunos.length;
}

botaoAdicionar.addEventListener("click", function () {
  const nome = campoNome.value.trim();
  const textoNota = campoNota.value.trim();
  const nota = Number(textoNota);

  mensagem.textContent = "";
  mensagem.classList.remove("erro", "sucesso");

  if (nome === "" || textoNota === "") {
    mensagem.textContent = "Preencha o nome e a nota.";
    mensagem.classList.add("erro");
    return;
  }

  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    mensagem.textContent = "Digite uma nota entre 0 e 10.";
    mensagem.classList.add("erro");
    return;
  }

  alunos.push({ nome: nome, nota: nota });

  mostrarAlunos();

  mensagem.textContent = nome + " foi adicionado(a)!";
  mensagem.classList.add("sucesso");

  campoNome.value = "";
  campoNota.value = "";
  campoNome.focus();
});

mostrarAlunos();

console.log("Script carregado!");

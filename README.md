# Quiz de Entomologia Forense - Versão Offline

## Sobre o Projeto

Este é um quiz interativo sobre Entomologia Forense desenvolvido para a disciplina de Entomologia da Prof. Dra. Viviane Gianluppi Ferro. O quiz funciona completamente offline e pode ser executado diretamente no navegador sem necessidade de servidor ou conexão com a internet.

## Características

- ✅ **Funciona 100% offline** - Não precisa de internet após o download
- ✅ **Portátil** - Pode ser copiado para pendrive e executado em qualquer computador
- ✅ **Responsivo** - Funciona em computadores, tablets e celulares
- ✅ **4 níveis de dificuldade** - Fácil, Médio, Difícil e Misto
- ✅ **24 perguntas** - Baseadas em conteúdo científico de entomologia forense
- ✅ **Sistema de pontuação** - Pontuação diferenciada por dificuldade
- ✅ **Relatório de resultados** - Com opção de impressão
- ✅ **Interface moderna** - Design profissional e intuitivo

## Como Usar

### Para Apresentação em Aula

1. **Copie todos os arquivos** para um pendrive ou pasta no computador
2. **Abra o arquivo `index.html`** em qualquer navegador (Chrome, Firefox, Edge, Safari)
3. **Selecione o nível de dificuldade** desejado
4. **Digite o nome do estudante** (opcional)
5. **Clique em "Iniciar Quiz"** para começar

### Para Compartilhar com Outros Professores

1. **Copie a pasta completa** `quiz_entomologia_offline`
2. **Compartilhe via email, pendrive ou nuvem**
3. **Instrua para abrir o arquivo `index.html`** no navegador

## Estrutura dos Arquivos

```
quiz_entomologia_offline/
├── index.html          # Arquivo principal (abrir este no navegador)
├── styles.css          # Estilos e design da interface
├── script.js           # Lógica do quiz e interações
├── questions.js        # Banco de dados com as perguntas
└── README.md          # Este arquivo de documentação
```

## Níveis de Dificuldade

### 🟢 Fácil (5 pontos por pergunta)
- Conceitos básicos de entomologia forense
- Definições fundamentais
- História da disciplina
- Ordens de insetos importantes

### 🟡 Médio (8 pontos por pergunta)
- Métodos de estimativa de IPM
- Fatores ambientais
- Sucessão de insetos
- Identificação básica

### 🔴 Difícil (10 pontos por pergunta)
- Espécies específicas brasileiras
- Métodos moleculares
- Tempos de desenvolvimento específicos
- Características morfológicas detalhadas

###  Misto (7 pontos por pergunta)
- Combinação de todos os níveis
- 3 perguntas fáceis + 4 médias + 3 difíceis

## Conteúdo das Perguntas

As perguntas foram baseadas em:

- **Conceitos fundamentais** de entomologia forense
- **História** da disciplina no Brasil e no mundo
- **Principais ordens** de insetos forenses (Diptera, Coleoptera)
- **Famílias importantes** (Calliphoridae, Sarcophagidae, Muscidae)
- **Métodos de estimativa** do intervalo pós-morte (IPM)
- **Fatores ambientais** que influenciam o desenvolvimento
- **Sucessão de insetos** em cadáveres
- **Espécies brasileiras** relevantes
- **Aplicações práticas** em investigações criminais

## Funcionalidades

### Durante o Quiz
- **Barra de progresso** visual
- **Pontuação em tempo real**
- **Feedback imediato** sobre respostas corretas/incorretas
- **Navegação intuitiva** entre perguntas
- **Opção de sair** a qualquer momento

### Resultados
- **Pontuação final** e percentual de acerto
- **Número de respostas corretas**
- **Tempo total** gasto no quiz
- **Mensagem de performance** personalizada
- **Opção de impressão** dos resultados
- **Possibilidade de refazer** o quiz

## Requisitos Técnicos

- **Navegador moderno** (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- **JavaScript habilitado** (padrão na maioria dos navegadores)
- **Não requer internet** após o download dos arquivos

## Compatibilidade

- ✅ Windows (todos os navegadores)
- ✅ macOS (todos os navegadores)
- ✅ Linux (todos os navegadores)
- ✅ Android (Chrome, Firefox)
- ✅ iOS (Safari, Chrome)

## Personalização

### Para Adicionar Novas Perguntas

1. Abra o arquivo `questions.js`
2. Adicione novas perguntas no formato:

```javascript
{
    id: 25,
    category: "Nova Categoria",
    question: "Sua pergunta aqui?",
    answers: [
        { text: "Resposta correta", correct: true },
        { text: "Resposta incorreta 1", correct: false },
        { text: "Resposta incorreta 2", correct: false },
        { text: "Resposta incorreta 3", correct: false }
    ]
}
```

### Para Modificar Pontuações

No arquivo `script.js`, localize a função `getPointsForDifficulty()` e ajuste os valores.

### Para Alterar Cores e Design

Modifique o arquivo `styles.css` conforme necessário.

## Suporte e Contato

Este quiz foi desenvolvido especificamente para a disciplina de Entomologia para Fora da Academia sob orientação da Profª. Dra. Viviane Gianluppi Ferro. Para dúvidas sobre o conteúdo científico, consulte o autor responsável.

## Autoria

Este material é destinado para uso educacional na disciplina de Entomologia. O conteúdo das perguntas é baseado em literatura científica da área de entomologia forense.
Autor: Renan Zanini Porto
---

**Desenvolvido para a disciplina de Entomologia para Fora da Academia - Profª. Dra. Viviane Gianluppi Ferro**  
*Versão Offline - Funciona sem internet*


#Licença

Conteúdo educacional disponível para uso livre não comercial sob a licença Creative Commons CC BY-NC 4.0.
Código-fonte distribuído sob a licença MIT.


Desenvolvido por Renan Zanini Porto
Orientadora: Profa. Dra. Viviane Gianluppi Ferro
Entomologia Para Fora da Academia - UFRGS


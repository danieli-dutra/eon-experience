# EON | Responsive Breakpoints



# O que este documento responde?

Este documento registra os critérios utilizados para definir os breakpoints da EON.

Seu objetivo não é listar media queries nem documentar regras específicas de CSS.

Ele responde apenas uma pergunta:

> **Por que a EON utiliza estes breakpoints?**

---

# A experiência antes do dispositivo

Os breakpoints da EON não foram definidos a partir de modelos de dispositivos ou frameworks.

Eles surgiram durante o desenvolvimento da interface, observando o momento em que a experiência começava a perder qualidade.

Em outras palavras, primeiro foi construída a experiência.

Depois foram identificados os pontos onde essa experiência precisava se adaptar.

Essa abordagem permitiu que cada breakpoint respondesse a uma necessidade real da interface, e não a um tamanho de tela específico.

---

# Um breakpoint só existe quando passa a ser necessário

Durante o desenvolvimento, a regra foi simples:

Enquanto a composição permanecesse equilibrada, nenhuma nova media query seria criada.

Um breakpoint só era introduzido quando algum elemento começava a comprometer a narrativa, a legibilidade ou o ritmo da experiência.

Isso reduziu a quantidade de adaptações e evitou regras desnecessárias.

---

# Breakpoint — 1280px

Este foi o primeiro ajuste da interface.

A navegação lateral permanecia funcional, mas seus rótulos começavam a competir visualmente com o conteúdo principal.

A solução adotada foi manter apenas os indicadores visuais, removendo os textos.

Dessa forma, a navegação continuou disponível sem interferir na leitura.

---

# Breakpoint — 900px

Neste ponto, a navegação lateral deixava de cumprir seu papel.

O espaço disponível já não permitia que ela coexistisse naturalmente com a narrativa principal.

A decisão foi removê-la completamente.

Em telas menores, a própria estrutura linear da Landing já fornece orientação suficiente para o visitante.

---

# Breakpoint — 825px

Durante os testes foi identificado que alguns elementos centrais da experiência começavam a perder equilíbrio visual.

O principal ajuste ocorreu na seção Resonance, onde a logomarca precisava reduzir sua escala para preservar a composição sem comprometer seu impacto narrativo.

Esse breakpoint também passou a representar o limite superior para elementos de grande escala utilizados ao longo da Landing.

---

# Breakpoint — 600px

A partir dessa largura a experiência exigiu adaptações mais significativas.

Foram realizados ajustes de espaçamento, largura de conteúdo e refinamentos tipográficos para preservar conforto de leitura.

Nesse mesmo ponto, o símbolo fixo do cabeçalho deixa de ser exibido.

Assim como a navegação lateral, sua presença começava a competir com o conteúdo da página.

A remoção preserva a clareza da interface sem comprometer a identidade da marca.

---

# Breakpoint — 480px

Este breakpoint atende dispositivos com largura reduzida.

O objetivo não foi reconstruir a interface, mas preservar a experiência.

Alguns elementos de maior escala, como a composição da seção Resonance e determinados títulos da seção Join, receberam ajustes específicos para manter proporção, legibilidade e equilíbrio visual.

A narrativa permanece exatamente a mesma.

Apenas sua apresentação é adaptada.

---

# O que nunca muda

Independentemente do dispositivo utilizado, alguns aspectos permanecem constantes:

- a ordem da narrativa;
- o ritmo da experiência;
- a identidade visual;
- a hierarquia das informações;
- a progressão entre as seções.

A adaptação acontece na interface.

Nunca na experiência.

---

# Princípio Final

Os breakpoints da EON não representam categorias de dispositivos.

Eles representam momentos em que a experiência precisava evoluir para continuar transmitindo a mesma sensação em diferentes tamanhos de tela.

Quando um breakpoint deixa de responder a uma necessidade real da interface, ele deixa de fazer sentido.
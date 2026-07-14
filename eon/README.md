# Código-fonte da EON

Este diretório reúne toda a implementação da EON Experience.

A organização foi pensada para separar responsabilidades, facilitar manutenção e permitir que novas seções da Landing sejam adicionadas sem comprometer a estrutura existente.

---

# Estrutura

```text
src/
│
├── assets/
│   ├── fonts/            # Tipografia utilizada pela marca
│   ├── icons/            # Ícones e símbolos da identidade visual
│   └── images/           # Imagens utilizadas na interface
│
├── components/
│   ├── layout/           # Componentes estruturais da aplicação
│   ├── navigation/       # Sistema de navegação
│   │   └── SideNavigation/
│   ├── sections/         # Capítulos da Landing Page
│   │   ├── Hero/
│   │   ├── Manifesto/
│   │   ├── Pillars/
│   │   ├── Resonance/
│   │   ├── Availability/
│   │   └── Join/
│   └── ui/               # Componentes reutilizáveis
│
├── lib/
│   ├── motionEngine.js   # Sistema de animações
│   ├── narrativeEngine.js# Controle da narrativa
│   └── scrollEngine.js   # Comportamentos relacionados ao scroll
│
├── services/             # Serviços e integrações
│
├── styles/
│   ├── reset.css
│   ├── variables.css
│   ├── typography.css
│   ├── animations.css
│   ├── utilities.css
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

# Organização

A estrutura da EON segue uma arquitetura baseada em componentes.

Cada diretório possui uma responsabilidade específica, reduzindo acoplamento e facilitando a evolução do projeto.

## Assets

Reúne todos os recursos visuais utilizados pela aplicação, como tipografia, ícones e imagens.

## Components

Todo elemento visível da interface é organizado como componente.

Os componentes são divididos em três grupos:

- **layout** → estrutura geral da aplicação;
- **navigation** → elementos responsáveis pela navegação;
- **sections** → capítulos que compõem a Landing;
- **ui** → componentes reutilizáveis.

## Lib

Contém módulos responsáveis pelos comportamentos da experiência.

Ao invés de espalhar lógica entre componentes, comportamentos reutilizáveis são centralizados nesta pasta.

Atualmente ela concentra:

- animações;
- narrativa;
- scroll.

## Services

Responsável pelas integrações e serviços externos utilizados pela aplicação.

## Styles

O sistema de estilos foi organizado em arquivos independentes, cada um responsável por uma camada da interface.

- Reset
- Variáveis
- Tipografia
- Animações
- Utilitários
- Estilos globais

---

# Filosofia

A organização do código procura refletir a mesma filosofia aplicada ao design da EON.

Cada pasta existe porque possui uma responsabilidade clara.

Sempre que possível:

- componentes fazem apenas uma coisa;
- responsabilidades permanecem separadas;
- comportamento e apresentação são desacoplados;
- novos recursos podem ser adicionados sem alterar a estrutura existente.

---

# Documentação

As decisões relacionadas à identidade visual, narrativa, design e arquitetura da experiência estão documentadas na pasta:

```text
docs/
```

Este README descreve apenas a organização do código-fonte.

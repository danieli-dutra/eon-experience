# EON — Arquitetura da Landing Page

> Versão: 1.0
> Status: Oficial
> Última atualização: Julho de 2026

---

# Objetivo

Este documento descreve a estrutura funcional da Landing Page da EON.

Enquanto a Direção Criativa define a identidade da marca e a Arquitetura da Experiência define a jornada do usuário, este documento especifica como essa experiência será construída.

Cada seção possui um objetivo claro, componentes definidos e uma função dentro da narrativa.

---

# Estrutura Geral

A Landing é composta por seis capítulos.

```
Header
    ↓
Hero
    ↓
Manifesto
    ↓
Princípios
    ↓
Contraste
    ↓
Revelação
    ↓
Footer
```

Cada capítulo representa uma etapa da narrativa.

Nenhuma seção deve existir apenas para preencher espaço.

---

# Header

## Objetivo

Permitir a navegação sem competir com a experiência.

O Header deve ser discreto.

Ele acompanha o usuário.

Nunca domina a interface.

---

## Componentes

- EON Symbol
- Navegação
- CTA secundário

---

## Comportamento

- fixo durante a navegação;
- fundo transparente no início;
- ganha contraste conforme o scroll;
- transição suave.

---

## Futuro

Planejado:

- navegação lateral indicando o progresso da experiência;
- alternância Dark / Light Mode.

---

# Hero

## Objetivo

Criar curiosidade.

O Hero não explica.

Ele desperta interesse.

---

## Componentes

- EON Symbol
- Eyebrow
- Headline principal
- Texto de apoio
- CTA principal
- Indicador de scroll

---

## Layout

Conteúdo alinhado à esquerda.

Grandes áreas de respiro.

Nenhuma imagem ilustrativa.

A tipografia é protagonista.

---

## Movimento

Ao carregar:

- Symbol aparece primeiro;
- Eyebrow;
- Headline;
- Texto;
- CTA;
- Indicador de scroll.

Todos utilizando Reveal e Fade.

---

## Sensação

Silêncio.

Elegância.

Curiosidade.

---

# Manifesto

## Objetivo

Apresentar a filosofia da EON.

O visitante compreende que existe uma visão por trás da identidade.

---

## Componentes

- Section Title
- Texto editorial
- Blocos de manifesto

---

## Layout

Largura reduzida para favorecer leitura.

Espaços amplos.

Poucos elementos gráficos.

---

## Movimento

Os blocos surgem conforme entram na viewport.

Nunca todos ao mesmo tempo.

---

# Princípios

## Objetivo

Transformar inspiração em estrutura.

Mostrar os valores que sustentam a EON.

---

## Componentes

- Título
- Três Cards

Cada card representa um princípio.

Exemplo:

- Think
- Create
- Evolve

---

## Layout

Desktop:

3 colunas.

Tablet:

2 colunas.

Mobile:

1 coluna.

---

## Movimento

Cards aparecem sequencialmente.

Pequeno atraso entre eles.

---

# Contraste

## Objetivo

Criar uma pausa emocional.

Mudar completamente o ritmo da experiência.

Preparar a revelação final.

---

## Componentes

- Fundo escuro
- Frase curta
- Linha dourada opcional

---

## Layout

Minimalista.

Muito espaço negativo.

Poucos elementos.

---

## Movimento

Fade extremamente lento.

Sem excesso de animações.

---

# Revelação

## Objetivo

Encerrar a narrativa.

Revelar a identidade completa da EON.

Convidar o visitante para fazer parte da ideia.

---

## Estrutura

THIS IS...

↓

(Logomarca EON)

↓

We don't build trends.

We build what comes next.

↓

Join the Era.

---

## Componentes

- Texto introdutório
- Logo completa
- Assinatura
- CTA principal

---

## Movimento

A palavra "THIS IS..."

surge primeiro.

Pequena pausa.

A logomarca aparece.

Depois surge a assinatura.

Por último o CTA.

Este deve ser o momento visual mais marcante de toda a Landing.

---

# Footer

## Objetivo

Encerrar a experiência.

O Footer não deve parecer administrativo.

Ele deve parecer uma assinatura.

---

## Componentes

- Logo
- Navegação resumida
- Redes sociais
- Copyright

---

## Layout

Limpo.

Minimalista.

Muito espaço negativo.

---

# Sistema de Navegação

A navegação acompanha a narrativa.

Não apenas a estrutura.

Cada link representa um capítulo.

O usuário sempre sabe onde está.

---

## Versão Atual

Header horizontal.

---

## Evolução Planejada

Menu lateral.

Indicador de progresso.

Capítulo ativo destacado.

Transições suaves entre seções.

---

# Sistema de Componentes

A Landing utiliza componentes reutilizáveis.

## Layout

- Header
- Footer
- Container

---

## UI

- Button
- SectionTitle

---

## Seções

- Hero
- Manifesto
- Principles
- Contrast
- Revelation

---

# Sistema de Movimento

Toda animação possui intenção.

Priorizar:

- Fade
- Reveal
- Slide
- Scale discreto

Evitar:

- Bounce
- Flash
- Loops infinitos
- Efeitos exagerados

---

# Sistema de Cores

## Experiência Principal

Dark Mode.

---

## Experiência Secundária

Light Mode (Planejado).

---

# Responsividade

A ordem narrativa nunca muda.

Desktop.

Tablet.

Mobile.

Todos seguem exatamente a mesma história.

Apenas o layout se adapta.

---

# Acessibilidade

Requisitos mínimos:

- HTML semântico;
- contraste adequado;
- foco visível;
- navegação por teclado;
- tipografia responsiva;
- textos alternativos;
- suporte a redução de movimento.

---

# Roadmap

## Implementado

- Estrutura React
- Organização de componentes
- Sistema de tokens
- Sistema tipográfico
- Hero
- Header
- Button
- SectionTitle

---

## Em desenvolvimento

- Manifesto
- Princípios
- Contraste
- Revelação
- Footer

---

## Planejado

- Dark / Light Mode
- Navegação lateral
- Scroll Spy
- Microinterações
- Animações avançadas
- Performance e otimizações
- SEO
- Open Graph
- PWA

---

# Critério de Qualidade

Antes de implementar qualquer componente, responder:

- Este componente reforça a narrativa?
- Ele possui uma função clara?
- Ele torna a experiência mais memorável?
- Ele respeita a identidade da EON?

Se alguma resposta for negativa, o componente deve ser repensado.

---

# Definição de Pronto

A Landing será considerada concluída quando:

- todas as seções estiverem implementadas;
- a narrativa fluir naturalmente;
- a identidade visual permanecer consistente;
- as animações reforçarem a experiência;
- a navegação for intuitiva;
- a experiência funcionar em qualquer dispositivo;
- o visitante chegar ao final sentindo que viveu uma história.

O objetivo nunca foi criar apenas uma Landing Page.

O objetivo sempre foi construir a primeira experiência da EON.
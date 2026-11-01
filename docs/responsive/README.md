# Auditoria de responsividade — EON Experience

Base: `main` sincronizada por fast-forward em `4c2e632`. Branch: `fix/eon-responsive-layout`.

## Diagnóstico e correções

| Área | Problema encontrado | Correção |
|---|---|---|
| Sistema de layout | `.container` duplicado usava `--container-width` inexistente; quatro seções forçavam largura de 100%; `body` ocultava overflow | Uma definição válida, limite de 1200px, margens fluidas e espaço reservado para navegação; removido o recorte global |
| Hero | Título com mínimo de 92,8px; containers com alturas de viewport somadas ao padding; indicador fora da primeira dobra | Escala fluida, altura mínima em `svh` com crescimento pelo conteúdo, imagem com `cover` no mobile e espaço para indicador; azul já usado na marca para melhorar contraste do título |
| Manifesto | Escala mínima excessiva em 320px | Título fluido a partir de 2rem, mantendo as pausas e ênfases narrativas |
| Pillars | Quatro colunas comprimidas no notebook e duas colunas no celular; divisórias sobravam após reorganização | Quatro, duas e uma coluna conforme espaço; trilhas `minmax(0,1fr)` e divisórias ajustadas |
| Availability | Margens perdidas, frases grandes e estados anteriores com baixa opacidade | Container comum, tipografia fluida, espaçamento proporcional, opacidade legível e conteúdo estático com movimento reduzido |
| Resonance | Perguntas absolutas com mínimo de 92,8px, palco de 520px e resolução sem quebra | Perguntas sobrepostas na mesma célula de grid, dimensionamento pelo container e resolução com quebra; preservados anel, logo e sequência |
| Join | Largura sem margens; títulos grandes; observer exigia 45% de uma seção que pode superar a tela; erro de envio não renderizado | Container comum, títulos fluidos, observação do cabeçalho com threshold zero, limpeza de timers, erro anunciado e foco visível; endpoint e payload preservados |
| Header / navegação | Logo removido no celular; navegação desaparecia abaixo de 900px e pontos sem nomes acessíveis quando labels sumiam | Logo mantido; mesma lista em menu compacto com `aria-expanded`, Escape, clique fora e fechamento ao sair por Tab; nomes acessíveis, estado ativo, alvos de 44px e indicador animado preservado |
| Footer / acessibilidade | Copyright com contraste baixo; ausência de foco global e tratamento de movimento reduzido | Maior contraste, foco visível, redução de animações e acesso estático às narrativas |

## Breakpoints

- Até 599px: Pillars em uma coluna; a partir de 600px, duas colunas.
- Até 1100px: duas colunas em Pillars; acima, quatro.
- Até 900px: navegação compacta; a partir de 901px, margem de 80px para navegação lateral.
- Até 1600px: labels laterais recolhidos, preservando nomes acessíveis; acima, labels visíveis.
- Mantidos ajustes locais existentes em 480px, 600px, 768px e 825px para formulário, ornamentos e logos. Fontes e espaçamento usam `clamp()` para evitar novos microbreakpoints.

## Validação executada

Chrome headless instalado localmente, com Playwright Core temporário fora das dependências da aplicação. Resultados: [matriz final](after/matrix.json), [interações](after/interactions.json).

| Viewport | Overflow horizontal | Textos/controles fora da tela | Formulário visível após narrativa | Erros JavaScript |
|---|---|---|---|---|
| 320 × 568 | Não | Não | Sim | Nenhum |
| 360 × 800 | Não | Não | Sim | Nenhum |
| 390 × 844 | Não | Não | Sim | Nenhum |
| 430 × 932 | Não | Não | Sim | Nenhum |
| 768 × 1024 | Não | Não | Sim | Nenhum |
| 1024 × 768 | Não | Não | Sim | Nenhum |
| 1280 × 720 | Não | Não | Sim | Nenhum |
| 1920 × 1080 | Não | Não | Sim | Nenhum |
| 2560 × 1440 | Não | Não | Sim | Nenhum |

Também verificadas larguras 599, 600, 767, 825, 900, 901, 1100 e 1281px na matriz. As capturas complementam a geometria: [mobile antes](before/390-hero.png), [mobile depois](after/390-hero.png), [tablet antes](before/768-hero.png), [tablet depois](after/768-hero.png), [desktop depois](after/1920-hero.png). Capturas completas antes em mobile/tablet e depois nas três categorias estão nas mesmas pastas. Capturas completas são registros da página em um instante; as narrativas também foram verificadas separadamente em seus estados de pergunta e logo.

Verificados: abertura do menu, seis links, navegação para Join, Tab, Escape e retorno de foco; campos preenchíveis; erro e sucesso de envio com respostas interceptadas, sem envio externo real; movimento reduzido com conteúdo visível; layout equivalente a 200% em 1280×720 usando 640×360 CSS pixels.

- `npm ci`: passou; reportou 14 vulnerabilidades existentes (7 moderadas, 7 altas). Nenhum manifesto ou lockfile alterado.
- `npm run lint`: passou, após corrigir cinco erros preexistentes nos componentes afetados.
- `npm run build`: passou.
- `git diff --check`: passou.
- Não há script de testes preexistente configurado.

Para reproduzir no Windows, iniciar Vite em `eon/` e executar, da raiz, `node docs/responsive/qa/layout.cjs after` e `node docs/responsive/qa/interactions.cjs`. Os scripts usam Chrome em `C:/Program Files/Google/Chrome/Application/chrome.exe` e `playwright-core` instalado em `%TEMP%/eon-responsive-qa`; ajustar caminhos conforme a máquina. Não são dependências do produto.

## Limitações

Validação em Chrome headless, sem dispositivos físicos ou Safari/Firefox. A emulação de área de layout a 200% não substitui a conferência manual do zoom nativo. O envio real ao Formspree não foi exercitado. Não foi realizada auditoria exaustiva de contraste de todos os estados ou de leitor de tela. Não houve merge, deploy manual ou alteração de configuração Vercel.

## Arquivos de aplicação alterados

- `eon/src/styles/{variables,global,utilities}.css`
- `eon/src/components/layout/Header/Header.css`
- `eon/src/components/layout/Footer/Footer.css`
- `eon/src/components/navigation/SideNavigation/SideNavigation.{jsx,css}`
- `eon/src/components/sections/Hero/Hero.css`
- `eon/src/components/sections/Manifesto/Manifesto.css`
- `eon/src/components/sections/Pillars/Pillars.css`
- `eon/src/components/sections/Availability/Availability.{jsx,css}`
- `eon/src/components/sections/Resonance/Resonance.{jsx,css}`
- `eon/src/components/sections/Join/Join.{jsx,css}`

Este diretório reúne relatório, dois scripts pontuais de QA, resultados JSON e capturas PNG.

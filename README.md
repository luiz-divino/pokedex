
⭐Pokédex - Por Luiz Fernando

Olá! Este projeto foi desenvolvido como um desafio técnico para a vaga de Desenvolvedor Front-end. O objetivo principal foi construir uma Pokédex funcional, performática e elegante. Espero que gostem.

🚀 Tecnologias Utilizadas
As tecnologias propostas para realizar o desafio foram:

React.js : **Usei + vite

TypeScript

Tailwind CSS

Axios

React Icons: Utilizado para implementar um spinner de carregamento profissional.

💡 Soluções e Decisões Técnicas

Um dos maiores desafios técnicos foi o fato do endpoint de listagem não fornecer as imagens oficiais.
Minha solução: Em vez de sobrecarregar a rede com 151 chamadas extras de API (uma para cada Pokémon), utilizei uma lógica de manipulação de strings. Extraí o ID único da URL de referência e montei dinamicamente o link para as artes oficiais em alta resolução, pois o ID de cada pokemon é universal e usado para consultar qualquer dado daquele pokemon.

Isso resultou em uma economia massiva de recursos e um carregamento instantâneo para o usuário.

Experiência do Usuário (UX)
Performance com Lazy Loading: Apliquei o atributo loading="lazy" em todas as imagens da lista. Isso garante que o navegador só baixe os dados conforme o usuário rola a página, otimizando o consumo de internet.

Identidade Visual: Configurei um Favicon de Pokébola e títulos de página dinâmicos para que o projeto pareça uma aplicação completa e não apenas um teste técnico.

Feedback Constante: Implementei estados de loading com um spinner animado do react-icons, garantindo que o usuário saiba que a aplicação está processando os dados.

🛠️ Funcionalidades
Exploração dos 151 Originais: Listagem completa da primeira geração com nomes e IDs formatados (#001, #002...).

Ficha Técnica Detalhada: Ao clicar em um card, o usuário acessa dados específicos como Peso, Altura e Tipagem (ex: Fogo, Água).

Navegação: Utilização de rotas dinâmicas (/pokemon/:name) usando Params pagar pegar o nome do pokemon e usar como parametro de rota com react-router-dom para uma navegação fluida sem recarregamento de página.

Layout Responsivo: O grid de Pokémon se ajusta automaticamente para oferecer a melhor visualização no Windows (desktop), tablets ou celulares.

⚙️ Como Executar o Projeto
Clone este repositório.

No terminal, instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev

Se você gostou do meu projeto, deixe uma estrela😁⭐
- Luiz Fernando

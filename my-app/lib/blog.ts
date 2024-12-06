import type { BlogPost, RelatedPost } from "@/types/blog";
import image from "next/image";

const MOCK_POSTS: Record<string, BlogPost> = {
	"como-scrum-funciona": {
		id: "1",
		slug: "como-scrum-funciona",
		title: "Como o Scrum funciona?",
		content: `


O **Scrum** é um framework ágil que oferece uma estrutura clara para a gestão de projetos e o desenvolvimento de produtos. Ele é composto por três componentes principais: **artefatos**, **funções** e **eventos**, que trabalham de forma integrada para garantir clareza, comunicação eficiente e organização ao longo do processo de desenvolvimento. A equipe é **auto-organizada** e segue essas diretrizes durante cada **Sprint**, com o objetivo de entregar valor significativo ao cliente.

### Artefatos do Scrum

O Scrum utiliza três artefatos principais que auxiliam na organização e priorização do trabalho da equipe, assegurando transparência e foco na entrega de valor:

1. **Product Backlog**  
   O Product Backlog é uma lista dinâmica e priorizada de todos os itens necessários para o projeto, incluindo requisitos, melhorias, correções e outras tarefas essenciais para o desenvolvimento do produto. Ele passa por revisões e ajustes conforme mudanças de stakeholders ou a evolução do produto. O **Product Owner** é o responsável por manter essa lista atualizada, garantindo que as tarefas mais importantes tenham prioridade.  
   **Exemplo**: Adicionar uma nova funcionalidade ao produto, corrigir bugs identificados ou ajustar algo com base no feedback dos usuários.

2. **Sprint Backlog**  
   O Sprint Backlog é um subconjunto do Product Backlog que a equipe se compromete a concluir durante uma Sprint. Durante a **Sprint Planning**, o time seleciona as tarefas do Product Backlog que podem ser completadas dentro do ciclo de tempo da Sprint e as transforma em um conjunto detalhado de atividades. Esse backlog é revisado diariamente para garantir que o time esteja no caminho certo e que qualquer impedimento seja resolvido rapidamente.  
   **Exemplo**: Se no Product Backlog há uma tarefa para implementar um formulário de cadastro, no Sprint Backlog o time detalha as ações necessárias para implementar a interface, conectar ao banco de dados e realizar testes.

3. **Incremento**  
   O Incremento é o resultado do trabalho realizado durante a Sprint. Ao final de cada Sprint, a equipe entrega um Incremento funcional e utilizável do produto, que está em conformidade com a **Definição de Pronto (DoD - Definition of Done)** do time. Esse incremento é um passo em direção à realização da visão do produto e pode ser utilizado por stakeholders ou clientes, dependendo da fase do desenvolvimento.  
   **Exemplo**: Após a implementação do formulário de cadastro, o incremento pode ser uma versão funcional onde a interface está pronta, os dados são validados e o sistema está integrado ao banco de dados.




 `,
		publishedAt: "2024-12-05",
		author: {
			id: "1",
			name: "Bryan Nykollas",
			avatar:
				"https://img.freepik.com/vetores-premium/alfabeto-da-letra-do-monograma-b-inicial-com-coroa-de-folhas_565585-1277.jpg",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/6804077/pexels-photo-6804077.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		tags: ["Scrum", "Agile"],
		readingTime: "4 min de leitura",
	},

	"sucesso-scrum-valores": {
		id: "2",
		slug: "sucesso-scrum-valores",
		title: "O sucesso do SCRUM",
		content: `
O SCRUM é um método ágil que tem como base princípios e valores que incentivam uma abordagem colaborativa, iterativa e flexível para o desenvolvimento de produtos. Esses princípios e valores ajudam as equipes a entregarem soluções de alta qualidade, atendendo de forma eficaz às necessidades dos clientes e stakeholders.

## Princípios e Valores do Scrum:
Foco no valor: A equipe prioriza atividades que entregam mais valor ao cliente, conforme o product backlog.
Adaptação: O projeto evolui conforme as necessidades e mudanças do cliente.
Transparência: Informações sobre o progresso do projeto devem ser acessíveis a todos os envolvidos.
Inspeção: O trabalho é monitorado e avaliado constantemente por meio de reuniões diárias e de retrospectiva.
Colaboração: A equipe compartilha conhecimento, soluções e responsabilidades de maneira colaborativa.
Autonomia: Cada membro tem liberdade para organizar suas tarefas, seguindo as diretrizes do líder e do responsável pelo produto.
## Sprint Planning
A Sprint Planning é a cerimônia onde tudo começa. Ela define o tom para toda a sprint, abordando os seguintes pontos:
Definir os objetivos da sprint: Estabelecer uma meta clara para o que se deseja alcançar no final da sprint.
Selecionar itens do backlog do produto: O time escolhe as histórias ou itens do backlog que serão trabalhados durante a sprint.
Dividir o trabalho em tarefas gerenciáveis: As histórias selecionadas são desmembradas em tarefas menores e mais fáceis de serem realizadas dentro do ciclo de tempo da sprint.
## Daily Standup (Daily SCRUM)
 É uma reunião de 15 minutos, onde a equipe se reúne para :

- Compartilhar o progresso: Cada membro compartilha o que fez no dia anterior, o que fará no dia atual e qualquer desafio que tenha acontecido.
- Ficar na melhoria contínua: A reunião auxilia a identificação de bloqueios de forma rápida para garantir que a equipe se mantenha alinhada e comprometida com os objetivos da sprint. 


## Sprint Review
No final de cada sprint, a equipe realiza a Sprint Review, uma cerimônia onde o trabalho realizado é apresentado para os stakeholders. Durante esta reunião:
- Apresenta-se o trabalho concluído: É apresentado as funcionalidades ou incrementos de produtos entregues.
- Coleta dos feedbacks: Os stakeholders fornecem o trabalho, sugerindo melhorias ou novas direções.
- Atualiza-se backlog do produto: Com base no feedback recebido, o product backlog é revisado e ajustado, priorizando novas tarefas ou mudanças necessárias.

## Sprint Retrospective

A Sprint Retrospective é um dos momentos mais importantes para o aprimoramento do time. Nessa etapa, a equipe discute:

- O que deu certo: Identificam os pontos fortes da sprint, ou seja, o que funcionou bem no processo e nas entregas.
- O que poder ser melhorado: Reflexão sobre os aspectos que não foram tão eficazes ou que podem ser aprimorados.
- Ações para a próxima sprint: A equipe define ações específicas para melhoras os processos na próxima sprint, garantido uma evolução contínua.

	`,
		publishedAt: "2024-12-05",
		author: {
			id: "1",
			name: "Bryan Nykollas",
			avatar:
				"https://img.freepik.com/vetores-premium/alfabeto-da-letra-do-monograma-b-inicial-com-coroa-de-folhas_565585-1277.jpg",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600 ",
		tags: ["Scrum", "Agile"],
		readingTime: "4 min de leitura",
	},

	"funcoes-scrum-equipe": {
		id: "3",
		slug: "funcoes-scrum-equipe",
		title: "Funções Essenciais da Equipe Scrum",
		content: `
O Scrum é baseado em três funções essenciais que desempenham papéis críticos para o sucesso do framework, garantindo que a equipe trabalhe de maneira alinhada, eficiente e focada na entrega de valor.

## Responsável pelo Produto(Product Owner)

-O Product Owner é o responsável por garantir que o produto atenda às necessidades do cliente e dos stakeholders. Ele vai priorizar as demandas e definir as direções claras para que a equipe possar desenvolver corretamente o produto. Ele vai gerenciar o Product Backlog, garantindo que as funcionalidades mais importantes recebam prioridade, fora isso ele também deve estar constantemente disponível para resolução de dúvidas e fornecer feedback à equipe.
Exemplo: Se há mudança nas prioridades do cliente, o Product Owner ajusta o Product Backlog para refletir essas mudanças.

- Líder Scrum (Scrum Master) 
- O Scrum Master é o facilitador do processo Scrum, orientando a equipe no uso das práticas e valores do Scrum e ajudando a resolver qualquer obstáculo que possa surgir durante o Sprint. O Scrum Master também promove melhoria contínua, realizando ações para otimização do processo e garantir que o time esteja trabalhando de forma eficiente e colaborativa.
Exemplo: O Scrum Master pode ajudar a equipe a resolver problemas de comunicação ou garantir que a equipe esteja seguindo corretamente o framework Scrum. 

- Equipe de Desenvolvimento
-A equipe de desenvolvimento é composta por profissionais de diversas áreas, como desenvolvedores, testadores, designers, entre outros. Essa equipe é responsável por entregar o trabalho do Sprint de forma colaborativa. A equipe deve ser auto-organizada e multidisciplinar, portanto, os membros devem colaborar mutualmente e assumir a responsabilidade pelo progresso do trabalho.
Exemplo: Durante uma Sprint, os devs criam as funcionalidades, os testadores verificam a qualidade e integridade do código e os designers ajustam a interface do usuário.
	`,
		publishedAt: "2024-12-03",
		author: {
			id: "3",
			name: "Wendrell Possato",
			avatar: "https://avatars.githubusercontent.com/u/90914846?v=4",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/7437100/pexels-photo-7437100.jpeg?auto=compress&cs=tinysrgb&w=600",
		tags: ["Scrum", "Agile"],
		readingTime: "4 min de leitura",
	},

	"desenvolvimento-scrum-Software": {
		id: "4",
		slug: "desenvolvimento-scrum-Software",
		title: "O Scrum no Desenvolvimento de Software",
		content: `
O Scrum se destaca no desenvolvimento de software por suas práticas ágeis que se adaptam rapidamente às mudanças e garantem uma entrega constante de valor para o cliente. A metodologia proporciona diversos benefícios que a tornam uma escolha eficaz para gerenciar projetos complexos e dinâmicos. Aqui estão alguns dos principais fatores que tornam o Scrum uma metodologia altamente eficaz no desenvolvimento de software:


## Qualidade em Desafios

Sprint Planning is where it all begins. This ceremony sets the tone for the entire sprint by:

- A garantia de qualidade é integrada ao processo Scrum, com revisões contínuas dos requisitos, ajustando o curso do projeto conforme necessário. O feedback constante do Product Owner e das partes interessadas ajuda a melhorar o produto durante todo o ciclo de vida do projeto.
- Com as entregas frequentes e a avaliação contínua do trabalho, o Scrum permite detectar falhas ou desvios precocemente, proporcionando a oportunidade de correções rápidas e de melhorar a qualidade do produto de forma contínua.
- Exemplo: Durante cada Sprint, a equipe realiza testes regulares e revisões de código, assegurando que a qualidade do produto seja mantida em todas as fases.

## Retorno sobre o Investimento (ROI)

The Daily Standup, or Daily SCRUM, is a 15-minute time-boxed event where the team:

1. O Scrum prioriza funcionalidades baseadas no valor para o cliente. Com isso, as equipes desenvolvem e entregam rapidamente produtos funcionais que atendem às necessidades mais urgentes, gerando retorno sobre o investimento de maneira eficiente.
2. A metodologia permite uma redução de custos ao longo do tempo, uma vez que a equipe foca nas entregas de maior valor e ajusta o planejamento conforme o feedback do cliente.
3. Exemplo: Em vez de esperar até o final do projeto para entregar o produto completo, a equipe Scrum entrega incrementos funcionais a cada Sprint, proporcionando valor imediato e permitindo que o cliente use ou avalie o produto em estágios.


## Equipes Mais Felizes e Produtivas


- O Scrum promove auto-organização e flexibilidade dentro das equipes, o que aumenta a criatividade e a inovação. A equipe tem liberdade para decidir como organizar seu trabalho, e a colaboração entre os membros é incentivada.
- O resultado é um ambiente de trabalho mais colaborativo e motivador, o que leva a aumento da produtividade e da satisfação no trabalho, criando equipes mais felizes e engajadas.
- Exemplo: A equipe de desenvolvimento decide, durante a Sprint, como dividir as tarefas entre si e busca soluções criativas para os desafios que surgem, promovendo um espírito de colaboração e realização.


## Estimativas Mais Precisas


- As equipes Scrum são responsáveis por suas próprias estimativas de tempo e metodologias de acompanhamento de progresso, o que permite um planejamento mais preciso.
- Ao longo das Sprints, com base no feedback contínuo, as equipes ajustam suas estimativas e ajustam o planejamento, o que acelera naturalmente o projeto, à medida que a equipe ganha experiência e aprende a otimizar seus processos.
- Exemplo: Durante a Sprint Retrospective, a equipe analisa como estimou o trabalho na Sprint anterior e ajusta suas estimativas para o futuro, melhorando a precisão das entregas subsequentes.

`,
		publishedAt: "2024-12-05",
		author: {
			id: "1",
			name: "Bryan Nykollas",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300",
		tags: ["Scrum", "Agile"],
		readingTime: "4 min de leitura",
	},

	"ajuda-scrum-gestao": {
		id: "5",
		slug: "ajuda-scrum-gestao",
		title: "Como o Scrum Ajuda na Gestão de Riscos",
		content: `
No Scrum, a gestão de riscos não é tratada como uma etapa isolada do projeto, mas sim como uma prática contínua e integrada ao processo. A metodologia Scrum proporciona um ambiente que facilita a identificação precoce e o controle de riscos, dado seu caráter iterativo e incremental. A estrutura de Sprints curtos (de 2 a 4 semanas) oferece oportunidades regulares para avaliar o progresso do projeto e ajustar o trabalho conforme necessário, com o intuito de mitigar riscos e minimizar o impacto de possíveis obstáculos.
## Identificação Precoce de Problemas

- O Scrum cria um ciclo constante de inspeção e adaptação, permitindo que a equipe identifique rapidamente quaisquer problemas, riscos ou obstáculos que possam surgir durante o desenvolvimento do produto. Através das cerimônias Scrum, como o Scrum Diário e a Retrospectiva de Sprint, a equipe pode:
- Monitorar o progresso diário: Durante o Scrum Diário (Stand-up), a equipe compartilha o que fez, o que planeja fazer e os impedimentos que estão enfrentando. Isso permite identificar riscos, como falta de recursos, problemas técnicos ou dependências que não foram previstas.
- Refletir sobre o Sprint anterior: Na Retrospectiva de Sprint, a equipe tem a oportunidade de discutir os desafios enfrentados no Sprint anterior, os obstáculos não resolvidos e as lições aprendidas. Essa reflexão ajuda a identificar riscos que podem ter sido ignorados e a planejar ações corretivas para evitar que se repitam.

## 2. Flexibilidade para Adaptação

A estrutura de Sprints curtos permite que as equipes ajustem rapidamente o foco e a abordagem à medida que novos riscos surgem. Essa flexibilidade é crucial em projetos complexos, pois a natureza do desenvolvimento de software (e de outros produtos) pode envolver mudanças rápidas e imprevistas. Com o Scrum, a equipe pode:
-Repriorizar o Product Backlog: Durante o Planejamento de Sprint, a equipe pode reavaliar e priorizar as tarefas de acordo com novos riscos ou descobertas, ajustando as entregas de valor e os recursos necessários para mitigar os riscos identificados.
-Revisar o Sprint Backlog constantemente: A equipe é capaz de revisar as tarefas em andamento, modificando o planejamento e a alocação de recursos para lidar com riscos específicos que podem ter surgido durante o Sprint.

##Redução do Impacto

Uma das maiores vantagens do Scrum na gestão de riscos é a capacidade de reduzir o impacto de problemas à medida que eles surgem. Como o feedback é constante e as entregas são feitas a cada Sprint, a equipe tem a oportunidade de:
- Ajustar rapidamente os processos e práticas: O ciclo de inspeção e adaptação permite que o trabalho seja reorientado rapidamente, evitando que um risco se torne um problema de longo prazo. As falhas podem ser identificadas antes de se tornarem críticas, e a equipe pode implementar soluções rapidamente.
- Entregar incrementos frequentes: Com entregas frequentes e incrementais, a equipe garante que o cliente tenha acesso a versões funcionais e utilizáveis do produto. Isso significa que qualquer risco de falha pode ser minimizado ao longo do tempo, pois a equipe já tem visibilidade sobre os aspectos que precisam de ajustes.
- Controle de expectativas: Como o progresso é visível e os resultados são entregues em pequenos incrementos, os stakeholders podem ser informados de quaisquer riscos antecipados ou mudanças no cronograma, o que ajuda a controlar as expectativas e a evitar surpresas desagradáveis no final do projeto.

## Gestão de Riscos a Longo Prazo

O Scrum também é eficaz para a gestão de riscos a longo prazo, pois seu ciclo iterativo e flexível permite que a equipe não apenas lide com os problemas imediatos, mas também se prepare para riscos futuros:

- Acompanhamento contínuo: O trabalho realizado em Sprints sucessivos permite que as equipes acompanhem os resultados ao longo do tempo, permitindo a identificação de padrões ou tendências que podem representar riscos a longo prazo. A cada Sprint, as equipes podem avaliar como os riscos estão sendo tratados e se novas estratégias precisam ser adotadas.
- Feedback constante e aprendizado organizacional: A prática de refletir sobre os Sprints, por meio das retrospectivas, cria uma cultura de aprendizado contínuo. Cada Sprint é uma oportunidade para identificar não apenas falhas, mas também formas mais eficazes de gerenciar riscos no futuro.

Exemplo Prático de Gestão de Riscos no Scrum
Imagine uma equipe Scrum trabalhando em um novo aplicativo para um cliente. Durante o primeiro Sprint, a equipe percebe que as especificações do cliente não são claras, o que representa um risco de desenvolvimento, pois pode levar a retrabalho e atrasos. Durante o Scrum Diário, os membros da equipe identificam esse risco, e, na Retrospectiva de Sprint, eles discutem como melhorar a coleta de requisitos, ajustando o processo de comunicação com o cliente. Como resultado, a equipe adapta seu Product Backlog e prioriza a necessidade de clarificar esses requisitos antes de avançar com o desenvolvimento.
Com entregas incrementais e a constante reflexão sobre os riscos, a equipe consegue minimizar o impacto desse problema, garantindo que a próxima Sprint seja mais eficiente e livre de ambiguidades.

`,
		publishedAt: "2024-12-05",
		author: {
			id: "1",
			name: "Bryan Nykollas",
			avatar:
				"https://img.freepik.com/vetores-premium/alfabeto-da-letra-do-monograma-b-inicial-com-coroa-de-folhas_565585-1277.jpg",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/7640766/pexels-photo-7640766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
		tags: ["Scrum", "Agile"],
		readingTime: "4 min de leitura",
	},

	"impacta-scrum-cultura": {
		id: "6",
		slug: "impacta-scrum-cultura",
		title: "Scrum e a Cultura Organizacional",
		content: `
O Scrum não é apenas uma metodologia, mas também uma mudança cultural que incentiva colaboração, transparência e empoderamento das equipes. Para ser eficaz, é preciso que a organização adote uma mentalidade ágil, promovendo autonomia e confiança.

## Como o Scrum Impacta a Cultura Organizacional

Sprint Planning is where it all begins. This ceremony sets the tone for the entire sprint by:

-  Empoderamento das Equipes: No Scrum, as equipes são auto-organizadas e têm autonomia para tomar decisões, o que aumenta o engajamento e a responsabilidade. Isso estimula a inovação e fortalece o sentimento de propriedade do projeto.
- Transparência Organizacional: A transparência no Scrum permite que todos vejam o progresso do trabalho, criando um ambiente de confiança. Isso facilita a gestão de expectativas e a comunicação eficaz entre equipes e stakeholders.
- Foco no Aprendizado e Inovação: A cultura Scrum promove uma mentalidade de aprendizado contínuo. As equipes refletem sobre o desempenho nas Retrospectivas de Sprint e ajustam seus processos, incentivando a experimentação e a melhoria constante.
- Fomento à Colaboração Interdisciplinar: Equipes Scrum são compostas por membros de diferentes áreas, promovendo a colaboração e o compartilhamento de conhecimento. Isso fortalece a união da equipe e melhora a resolução de problemas complexos.

- O Scrum transforma a cultura organizacional, criando um ambiente de trabalho mais ágil e colaborativo. Ele melhora os resultados dos projetos, aumenta o moral da equipe e fomenta uma forma de trabalho mais produtiva e gratificante

`,
		publishedAt: "2024-12-03",
		author: {
			id: "3",
			name: "Wendrell Possato",
			avatar: "https://avatars.githubusercontent.com/u/90914846?v=4",
			bio: "Estudante ADS - IFPR ",
		},
		featuredImage:
			"https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		tags: ["Scrum", "Agile"],
		readingTime: "5 min de leitura",
	},
};

export async function getBlogPost(slug: string): Promise<BlogPost> {
	// Simulate API delay
	// await new Promise((resolve) => setTimeout(resolve, 1000));

	const post = MOCK_POSTS[slug];
	if (!post) {
		throw new Error("Post not found");
	}

	return post;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getRelatedPosts(slug: string): Promise<RelatedPost[]> {
	await new Promise((resolve) => setTimeout(resolve, 300));
	// slug
	return [
		{
			id: "3",
			slug: "funcoes-scrum-equipe",
			title: "Funções Essenciais da Equipe Scrum",
			featuredImage:
				"https://images.pexels.com/photos/7437100/pexels-photo-7437100.jpeg?auto=compress&cs=tinysrgb&w=600",
			publishedAt: "2024-12-03",
		},
		{
			id: "5",
			slug: "ajuda-scrum-gestao",
			title: "Como o Scrum Ajuda na Gestão de Riscos",
			featuredImage:
				"https://images.pexels.com/photos/7640766/pexels-photo-7640766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ",
			publishedAt: "2024-12-03",
		},
	];
}

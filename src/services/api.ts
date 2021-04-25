export function loadLists() {
    return [
      { 
        title: 'TO DO', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar módulo 05 de NodeJS',
            name: "Apolinário Manuel",
            days: 16,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 2,
            content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Twitch',
            name: "Apolinário Manuel",
            days: 12,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 3,
            content: 'Estudar módulo 03 de React Native',
            name: "Apolinário Manuel",
            days: 10,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 4,
            content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
            name: "Apolinário Manuel",
            days: 26,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
        ]
      },
      { 
        title: 'DOING', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clone do Instagram',
            name: "Apolinário Manuel",
            days: 5,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          }
        ]
      },
      { 
        title: 'DONE', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Gravar sobre Geolocalização e mapas com React Native',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 8,
            content: 'Gravar testes e deploy ReactJS',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          }
        ]
      },
      { 
        title: 'SUPER DONE', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            name: "Apolinário Manuel",
            days: 0,
            user: 'https://avatars.githubusercontent.com/u/66335189?s=60&v=4'
          }
        ]
      },
    ];
  }
import axios from 'axios'

export const getResumeDatax = async () =>
  await axios({
    method: 'post',
    url: 'https://eu-west-2.aws.data.mongodb-api.com/app/data-jzamnnl/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.API_KEY
    },
    data: JSON.stringify({ dataSource: 'Cluster0', database: 'resume', collection: 'structure' })
  })
    .then(({ data }) => data?.documents[0])
    .catch((error) => console.log(error))

const structure = {
  basics: {
    label: 'Développeur JavaScript Fullstack',
    firstname: 'Jérôme',
    lastname: 'Gunst',
    image: 'avatar.png',
    email: 'j.gunst@mail.com',
    phone: '+33 660 503 254',
    url: 'https://nwl-code.github.io/my-resume',
    summary:
      "Autodidacte, curieux, altruiste et passionné, je suis créatif et axé sur l'ergonomie dans la conception d'interfaces intuitives. Mon expérience m'a également permis de collaborer avec des équipes multidisciplinaires et de respecter les délais et les exigences projet.",
    location: {
      address: '54 rue de la chapelle',
      zip: '92500',
      city: 'Rueil-Malmaison',
      country: 'France',
      countryCode: 'FR',
      url: 'https://www.google.com/maps/place/92500+Rueil-Malmaison'
    },
    profiles: [{ network: 'Linkedin', url: 'https://www.linkedin.com/in/jerome-gunst' }]
  },
  work: [
    {
      company: 'Whaller',
      image: 'whaller.png',
      location: 'Suresnes',
      description: "Réseau social d'entreprise",
      position: 'Développeur Front-End',
      url: 'https://whaller.com',
      startDate: '2020-09-01',
      endDate: '2023-10-10',
      summary: '',
      realizations: [
        'Mise en place de nouvelles features',
        'Développement de librairies',
        'Migration vers React ',
        'Correction de bugs',
        'Relecture de code',
        "Intégration d'endpoints API",
        'Compatibilité RGAA',
        'Amélioration continue'
      ],
      highlights: ['JavaScript', 'TypeScript', 'React', 'Api Rest', 'CodeIgniter', 'PHP', 'MySQL']
    },
    {
      company: 'Greenflex',
      image: 'greenflex.png',
      location: 'Paris',
      description: 'Application de collecte de données d’impact écologique',
      position: 'Lead Developeur - Scrum master',
      url: 'https://greenflex.com/',
      startDate: '2017-03-01',
      endDate: '2019-04-01',
      summary: '',
      realizations: [
        'Ajout de composant React',
        'Migration vers AWS',
        'Documentation technique',
        'Diffusion de bonnes pratiques',
        'Animation des rituels Scrum',
        'Partage de connaissance'
      ],
      highlights: ['JavaScript', ' React', ' Symfony', ' Neo4j', ' Redis']
    },
    {
      company: 'Direct Medica',
      image: 'directmedica.png',
      location: 'Boulogne-Billancourt',
      description: 'Application de parcours santé',
      position: 'Développeur Symfony',
      url: 'https://medica.concentrix.com',
      startDate: '2013-12-01',
      endDate: '2014-12-01',
      summary: '',
      realizations: [
        'Ajout de nouvelles features',
        'Revue de code',
        'Migration SVN vers Git',
        'Maintenance et correction de bugs',
        'Assistance aux utilisateurs',
        'Migration Symfony 1.4 vers 3.0'
      ],
      highlights: ['Symfony', ' SQL Server', ' NodeJS', ' JQuery', ' Twig']
    },
    {
      company: 'AP2S',
      image: 'ap2s.jpeg',
      location: 'Malakoff',
      description: 'Application de billetterie en ligne',
      position: 'Développeur PHP / Drupal',
      url: 'http://www.ap2s.fr',
      startDate: '2012',
      endDate: '2013',
      summary: '',
      realizations: [],
      highlights: ['ZendFramework', 'CodeIgniter', 'Drupal', 'SOAP', 'JQuery', 'SVN', 'MySQL']
    },
    {
      company: 'Pixmania',
      image: 'pixmania.png',
      location: 'Paris',
      description: 'Site e-commerce',
      position: 'Ingénieur Étude et Développement',
      url: 'https://www.pixmania.com/fr/fr/',
      startDate: '2011',
      endDate: '2012',
      summary: '',
      realizations: [],
      highlights: ['PHP', 'Oracle', 'JavaScript Vanilla']
    },
    {
      company: 'Marquetis',
      image: 'marquetis.png',
      location: 'Boulogne-Billancourt',
      description: 'Communication et événementiel',
      position: 'Développeur Fullstack',
      url: 'https://www.marquetis.fr/',
      startDate: '2009',
      endDate: '2011',
      summary: '',
      realizations: [],
      highlights: ['PHP', 'MySQL', 'JavaScript Vanilla', 'JQuery', 'CodeIgniter']
    },
    {
      company: 'Unisys',
      image: 'unisys.png',
      location: '',
      description: 'Société de services',
      position: 'Consultant informatique',
      url: 'https://www.unisys.com/fr/',
      startDate: '2006',
      endDate: '2008',
      summary: '',
      realizations: [],
      highlights: ['PHP', 'MySQL', 'Oracle', 'Selenium']
    },
    {
      company: 'Marketvente',
      image: 'stepstone.png',
      location: 'Suresnes',
      description: 'Site de recrutement en ligne',
      position: 'Webmaster',
      url: 'https://www.thestepstonegroup.com/en/',
      startDate: '2001',
      endDate: '2006',
      summary: '',
      realizations: [],
      highlights: ['PHP', 'MySQL', 'JavaScript Vanilla']
    }
  ],
  volunteer: [{ organization: '', position: '', url: '', startDate: '', endDate: '', summary: '', highlights: [] }],
  education: [
    {
      institution: 'IESA',
      url: 'https://iesa.fr',
      area: 'Information Technology',
      description: '',
      studyType: 'Bachelor',
      startDate: '2011-06-01',
      endDate: '2014-01-01',
      image: 'iesa.png'
    }
  ],
  awards: [{ title: '', date: '', awarder: '', summary: '' }],
  publications: [{ name: '', publisher: '', releaseDate: '', url: '', summary: '' }],
  skills: [
    {
      name: 'Front-End',
      data: [
        {
          name: 'JavaScript',
          url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
          level: 0
        },
        {
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          level: 0
        },
        {
          name: 'JQuery',
          url: 'https://jquery.com/',
          level: 0
        },
        {
          name: 'React',
          url: 'https://fr.react.dev/',
          level: 0
        },
        {
          name: 'Redux',
          url: 'https://redux.js.org/',
          level: 0
        },
        {
          name: 'HTML',
          url: 'https://developer.mozilla.org/fr/docs/Web/HTML',
          level: 0
        },
        {
          name: 'CSS',
          url: 'https://developer.mozilla.org/fr/docs/web/CSS',
          level: 0
        },
        {
          name: 'BootStrap',
          url: 'https://getbootstrap.com/',
          level: 0
        },
        {
          name: 'Sass',
          url: 'https://sass-lang.com/',
          level: 0
        },
        {
          name: 'Handlebars',
          url: 'https://handlebarsjs.com/',
          level: 0
        }
      ]
    },
    {
      name: 'Back-End',
      data: [
        {
          name: 'PHP',
          url: 'https://www.php.net/',
          level: 0
        },
        {
          name: 'Mysql',
          url: 'https://www.mysql.com/fr/',
          level: 0
        },
        {
          name: 'MongoDB',
          url: 'https://www.mongodb.com/fr-fr',
          level: 0
        },
        {
          name: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
          level: 0
        },
        {
          name: 'SQL Server',
          url: 'https://www.microsoft.com/fr-fr/sql-server/sql-server-2022',
          level: 0
        },
        {
          name: 'Symfony',
          url: 'https://symfony.com/',
          level: 0
        },
        {
          name: 'Node.js',
          url: 'https://nodejs.org/en',
          level: 0
        },
        {
          name: 'NextJs',
          url: 'https://nextjs.org/',
          level: 0
        },
        {
          name: 'Express',
          url: 'https://expressjs.com/',
          level: 0
        },
        {
          name: 'Docker',
          url: 'https://www.docker.com/',
          level: 0
        }
      ]
    },
    {
      name: 'Tests et qualité',
      data: [
        {
          name: 'Jest',
          url: 'https://jestjs.io/fr/',
          level: 0
        },
        {
          name: 'Mocha',
          url: 'https://mochajs.org/',
          level: 0
        },
        {
          name: 'Cypress',
          url: 'https://www.cypress.io/',
          level: 0
        },
        {
          name: 'Playwright',
          url: 'https://playwright.dev/',
          level: 0
        },
        {
          name: 'Eslint',
          url: 'https://eslint.org/',
          level: 0
        },
        {
          name: 'Prettier',
          url: 'https://prettier.io/',
          level: 0
        },
        {
          name: 'Sonar',
          url: 'https://sonar.software/',
          level: 0
        },
        {
          name: 'PHPUnit',
          url: 'https://phpunit.de/index.html',
          level: 0
        }
      ]
    },
    {
      name: 'Compilation',
      data: [
        {
          name: 'Webpack',
          url: 'https://webpack.js.org/',
          level: 0
        },
        {
          name: 'Grunt',
          url: 'https://gruntjs.com/',
          level: 0
        },
        {
          name: 'Babel',
          url: 'https://babeljs.io/',
          level: 0
        },
        {
          name: 'Vite',
          url: 'https://vitejs.dev/',
          level: 0
        }
      ]
    },
    {
      name: 'DevOps',
      data: [
        {
          name: 'Docker',
          url: 'https://www.docker.com/',
          level: 0
        },
        {
          name: 'Jenkins',
          url: 'https://www.jenkins.io/',
          level: 0
        },
        {
          name: 'Git',
          url: 'https://git-scm.com/',
          level: 0
        },
        {
          name: 'Gitlab',
          url: 'https://about.gitlab.com/',
          level: 0
        },
        {
          name: 'Github',
          url: 'https://github.com/',
          level: 0
        },
        {
          name: 'Bitbucket',
          url: 'https://bitbucket.org/',
          level: 0
        }
      ]
    }
  ],
  languages: [{ language: '', fluency: '' }],
  interests: [{ name: '', keywords: [] }],
  references: [{ name: '', reference: '' }],
  projects: [
    {
      name: '',
      description: '',
      highlights: [],
      keywords: [],
      startDate: '',
      endDate: '',
      url: '',
      roles: [],
      entity: '',
      type: ''
    }
  ]
}

export const getResumeData = async () => structure

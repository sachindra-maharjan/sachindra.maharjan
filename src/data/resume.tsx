import { Icons } from "@/components/icons";
import { Certificate } from 'crypto';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Sachindra Maharjan',
  initials: 'SM',
  url: 'https://dillion.io',
  location: 'Cary, NC',
  locationLink: 'https://maps.app.goo.gl/rrfm3mMrsw38xxxi7',
  description: 'Software Engineer. I love building things and helping people.',
  summary:
    'I am an experienced Software Engineer expertise in designing, developing, and deploying high-quality software solutions. I specialize in building scalable microservices and cloud-based applications, leveraging modern tools and frameworks to deliver efficient, reliable, and innovative solutions. [I hold a Master’s degree in Computer Science and a Bachelor’s degree in Computer Engineering.](/#education) Passionate about tackling complex challenges, I am dedicated to driving software excellence and contributing to cutting-edge technological advancements.',
  avatarUrl: '/me.png',
  skills: [
    'Java',
    'Python',
    'Go',
    'Typescript',
    'Node.js',
    'Oracle',
    'MongoDB',
    'Firebase',
    'PL/SQL',
    'Spring Boot',
    'FastAPI',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Kafka',
    'IBM MQ',
    'AWS',
    'Google Cloud Platform',
    'Oracle Cloud',
    'Angular',
    'Git',
    'Maven',
    'Agile',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'sachindra.maharjan4@gmail.com',
    tel: '+1 (919) 439-4316',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/sachindra-maharjan',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sachindramaharjan/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/SMaharjan25284',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://www.youtube.com/@sachindramaharjan',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Fidelity Investments',
      href: 'https://fidelity.com/',
      badges: [],
      location: 'Durham, NC',
      title: 'Senior Software Engineer',
      logoUrl: '/fmr.png',
      start: 'March 2023',
      end: 'Present',
      description:
        'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
    },
    {
      company: 'Deutsche Bank',
      badges: [],
      href: 'https://www.db.com/',
      location: 'Cary, NC',
      title: 'Assistant Vice President, Software Engineering',
      logoUrl: '/db.svg',
      start: 'December 2015',
      end: 'March 2023',
      description:
        'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.',
    },
    {
      company: 'Javra Software',
      href: 'https://javra.com/',
      badges: [],
      location: 'Kathmandu, Nepal',
      title: 'Software Engineer',
      logoUrl: '/javra.svg',
      start: 'July 2011',
      end: 'Feburary 2015',
      description:
        'Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.',
    },
  ],
  education: [
    {
      school: 'Maharishi University of Management ',
      href: 'https://www.miu.edu/',
      degree: 'Masters in Computer Science',
      logoUrl: '/miu.png',
      start: '2015',
      end: '2017',
    },
    {
      school: 'Kantipur Engineering College',
      href: 'https://kec.edu.np/',
      degree: 'Bachelor in Computer Engineering',
      logoUrl: '/kec.png',
      start: '2006',
      end: '2011',
    },
    {
      school: 'Bradford University',
      href: 'http://www.bradford.ac.uk/',
      degree: 'Bachelor in Computing, Exchange Student',
      logoUrl: '/bradforduni.png',
      start: '2010',
      end: '2010',
    },
  ],
  projects: [
    {
      title: 'Free Oracle Kubernetes Cluster',
      href: 'https://github.com/sachindra-maharjan/oracle-kubernetes-cluster',
      dates: '',
      active: true,
      description: 'Create a Free Kubernetes cluster in Oracle Cloud.',
      technologies: ['Teffaform', 'Kubernetes', 'Shell Script', 'New Relic'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/sachindra-maharjan/oracle-kubernetes-cluster',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/oke.png',
      video: '',
    },
    {
      title: 'Microservice with FastAPI',
      href: '',
      dates: '',
      active: true,
      description:
        'Designed and developed api to pull football data from public api.',
      technologies: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'REST', 'Auth0'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/sachindra-maharjan/footy-sync',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/fastapi.png',
      video: '',
    },
    {
      title: 'SpringBoot Micriservice Architecture',
      href: '',
      dates: '',
      active: true,
      description:
        'Template project for build microservice. It consits for Api Gateway, Config Server, Service Registry and tools for monitoring.',
      technologies: [
        'Java',
        'Spring Boot',
        'Docker',
        'Shell',
        'Prometheus',
        'Grafana',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/sachindra-maharjan/SpringBoot-Micriservice-Architecture',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/micorservice_arch.jpg',
      video: '',
    },
    {
      title: 'Data Pipeline',
      href: '',
      dates: '',
      active: true,
      description:
        'Designed and developed data pipeline to process unstructured data and import into MongoDB and BigQuery.',
      technologies: [
        'Python',
        'Pandas',
        'MongoDB',
        'BigQuery',
        'Redis',
        'Kafka',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/data_pipeline_architecture.drawio.png',
      video: '',
    },
  ],
  certifications: [
    {
      title: 'Google Cloud Certified Professional Cloud Developer',
      dates: 'December 2021 - December 2023',
      location: 'Google',
      description:
        'A Professional Cloud Developer builds and deploys scalable, secure, and highly available applications by using Google-recommended tools and best practices. This individual has experience with cloud-native applications, containerized applications, APIs, developer tools, orchestration tools, managed services, test strategies, serverless platforms, and next-generation databases. This individual also has proficiency with at least one general-purpose programming language and instruments their code to produce metrics, logs, and traces.',
      image:
        'https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_200_200/company-logo_200_200/0/1631311446380?e=1741824000&v=beta&t=AJQsX3B4O-isS07AMz-lYSrxTeDlDJSnh3--627a_m0',
      mlh: '',
      links: [
        {
          title: 'Credential',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.credential.net/ca8ce4d5-10e4-4084-b094-893a1e2b16fd',
        },
        ,
      ],
    },
  ],
  interests: [
    {
      title: 'Kapuche Glacier Lake Trek',
      dates: 'December 2023',
      location: 'Nepal',
      description:
        'The Kapuche Glacier lake is located at an altitude of 2546 meters from sea level. It lies inside the Gurung Village of Sikles in the Kaski district in the Annapurna region. Kapuche Glacier Lake is claimed to be the lowest-elevation glacier lake in the world. The temperature of the lake can reach sub-zero during winter, and the surface can turn into ice. The 0.12 Km2 Lake is about 40 meters deep.',
      image: '/kapuche.ico',
      mlh: '',
      links: [],
    },
    {
      title: 'Mt. Ranier Expedition',
      dates: 'May 2019',
      location: 'Seattle, USA',
      description:
        'Mt. Rainier, the most extensively glaciated mountain in the continental United States, rises 14,410 above the nearby Pacific and offers limitless mountaineering possibilities. The combination of high altitude, variety of climbing routes, and unpredictable Northwest weather make climbing Mt. Rainier a true mountaineering experience.',
      image: '/MtRanier.jpeg',
      mlh: '',
      links: [],
    },
    {
      title: 'Bull City Race Fest',
      dates: 'October 2018 & 2020',
      location: 'Durham, USA',
      description: 'Half Marathon',
      icon: 'public',
      image:
        'https://bullcityracefest.com/wp-content/uploads/2024/07/cropped-BCRF-Logo-Scaled-1-1-300x300.png',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://bullcityracefest.com/',
        },
      ],
    },
    {
      title: "Rock 'n' Roll Marathon",
      dates: 'May 2016',
      location: 'Pheladelphia, USA',
      description: 'Half Marathon',
      image:
        'https://cdn1.sportngin.com/attachments/logo_graphic/a194-197716151/RNR22_SeriesLogo_Horz_Inverted-01.png',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.runrocknroll.com/',
        },
      ],
    },
    {
      title: 'Kathmand Marathon',
      dates: 'September 2012 & 2014',
      location: 'Kathmandu',
      description: 'Half Marathon',
      image:
        'https://www.kathmandumarathon.com.np/themes-assets/images/16th-ktm.png',
      win: 'Best Data Hack',
      mlh: '',
      links: [],
    },
  ],
} as const;

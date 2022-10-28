module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Shreya Saha',
    // Main Site Title
    title: `Shreya Saha | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `CS Masters' Student @ UCSD`,
    // Content of the About Me section
    about: `I am a Masters’ student in the Computer Science Department of UC San Diego, and my research interests lie in theoretical Machine Learning and its applications in the domains of healthcare, Natural Language Processing and Robotics.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Domain Adaptation Using Neural Architecture Search (2021 - Present)',
        Advisor: 'Pengtao Xie',
        description:
          'Improving supervised domain algorithm by implementing a three step multilevel optimization framework that uses Neural Architceture Search methods such as DARTS, PDARTS and PC-DARTS and the skillearn algorithm.',
      },
      {
        name: 'Visual Matrix Prediction (2022)',
        Advisor: 'Pengtao Xie, Alireza Kamalipour',
        description:
          'Use Optic Nerve Head OCTA eye images to predict 10-2 and 24-2 visual field matrix using resnets and Unets',
      },
      {
        name: 'Gene Expression Analysis (2022-Present)',
        Advisor: 'Debashish Sahoo',
        description:
          'Processed solid cancer genome datasets from Gene Expression Omnibus (GEO) website to hegemon website created by Boolean Lab, validated invariant biomarkers for White Blood Cells using BECC technique and designed primers to duplicate genes from a given genome sequence.',
      },
      {
        name: 'Robot Motion Planner Using a Jetbot  (2021)',
        description:
          'Designed a roomba like system using Voronoi path planner and KALMAN filter based SLAM techniques that would navigate through the environment using artificial landmarks (April tags).',
      },
      {
        name: 'Python Compiler Using Typescript and WASM (2022)',
        description:
          'Designed and build a python compiler that takes care of comprehension statements and collaborated with 50 other students to integrate the above functionalities with other python expressions (namely lists, conditional expressions, built-in libraries etc)',
      },
      {
        name: 'PUF based Protocol for Secure WiFi Authentication of IoT devices (2017-2019)',
        Advisor: 'Bibhash Sen',
        description:
          'Used Physically Unclonable Functions(PUFs) to secure IoT devices against WiFi attacks via xor encryption of the challenge-response pairs of the PUF, MAC address of the connecting device and a random number nonce',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};

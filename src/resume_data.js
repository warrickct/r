
export const resumeData = {
    experienceList: [
        {
            title: 'Web Application Specialist Software Developer',
            // title: 'eResearch Engagement Specialist',
            company: 'The University of Auckland',
            date: '2020 Mar. - present',
            description: [
                "Web application focused software development position.",
                "Worked in an agile environment alongside 3 other developers.",
                "Presented project achievements and progress at fortnightly steering committee meetings",
                "Implemented multiple improvements to a fullstack Angular application.",
                "Migrated a large Angular application to a serverless architecture.",
                "Designed and implemented multiple micro-services hosted within AWS cloud infrastructure.",
                "Implemented and optimized CI/CD pipelines.",
                "Implemented front-end features to React and Django web applications.",
                "Increase deployment pipeline speeds by 45%.",
                "Increased test coverage by 30%."
            ]
        },
        {
            // title: 'Solutions Analyst',
            title: 'Special Project Application Developer',
            company: 'The University of Auckland',
            date: '2018 Oct. - 2020 Mar.',
            description: [
                "Implemented fullstack applications solutions for researchers.",
                "Implemented features and solutions for 3D and virtual reality applications.",
                "Designed custom software applications and solutions for research projects.",
                "Lead and assist in software development workshops and training as required.",
                "Showcase and represent technical demonstrations of projects created by the organization.",
                "Provide technical support to virtual machines and large data storage."
            ]
        },
        {
            // title: 'eResearch IT Support',
            title: 'Special Project Junior Application Developer',
            company: 'The University of Auckland',
            date: 'Aug. 2017 - Oct. 2018',
            description: [
                "Implemented improvements and bug fixes to multiple research software applications.",
                "Piloted software for researchers requiring assistance.",
                "Provided assistance in software development teaching and workshops as required."
            ]
        },
    ],
    projectsList: [
        {
            title: 'ResearchHub - Web portal for Researchers',
            description: "I developed in an agile development team for the ResearchHub migrating functionality to a cloud architecture. Created Optimizations and implemented improvements to both front-end and CI/CD pipeline for development operations. Increased unit test coverage from 50% to 80%.",
            skills: "NodeJS, AWS, Cloud, Rest APIs, Serverless, Jenkins, Angular, Git, Bash, EC2, S3, GraphQL, Contentful, Lambda, API Gateway",
            linkHref: "https://research-hub.auckland.ac.nz/#/home",
            linkText: "ResearchHub link"
        },
        {
        title: '2FAb - Chrome Webdriver on AWS Microservice',
            description: "I architectured and implemented a microservice hosted on AWS Lambda to using Puppeteer retrieve OAuth2.0 tokens. This allowed us to automate our workflows and create integration tests for the ResearchHub which were previously done manually making a GET request.",
            skills: "NodeJS, AWS, APIs, Puppeteer, Serverless, ServiceNow, API Gateway",
            linkHref: "https://github.com/UoA-eResearch/oauth-2fa-bypass",
            linkText: "GitHub link"
        },
        {
            title: 'ServerlessNow - ServiceNow Ticket Processor AWS Microservice',
            description: "I architectured and implemented an AWS Lambda function intercept ServiceNow requests. The service modifies structure and augments with AWS Cognito user pool information before forwarding the ticket.",
            skills: "NodeJS, AWS, APIs, Serverless, ServiceNow, API Gateway",
            linkHref: "https://github.com/UoA-eResearch/hub-stack/tree/master/serverless-now",
            linkText: "GitHub link"
        },
        {
            title: 'MyTardis - Search Page for Research Instrument Data',
            description: "I Implemented features front-end development of the University of Auckland's Instrument Data platform which is a hybrid Django and React front-end. I also co-lead a design sprint to create a high fidelity prototype for the front-end design.",
            skills: "NodeJS, Django, React, front-end, sprint",
            linkHref: "https://github.com/UoA-eResearch/mytardis",
            linkText: "GitHub link"
        },
        {
            title: 'eDNA Hub - Ecological Analysis Tool',
            description: "I developed an interactive web application including a complete back-end stack with ingestion pipelines. This project was built to visualize ecological diversity metrics and patterns using eDNA collected across New Zealand.",
            skills: "NodeJS, Cypress, Git, SQL, Python, Django, Docker, Bash, HTML, CSS, Nectar",
            linkHref: "https://uoa-eresearch.github.io/eDNA/",
            linkText: "eDNA link"
        },
        {
            title: 'Roonka - Automated 3D archaeological Model Generator',
            description: "I developed Python scripts to programmatically create 3D models without non-manifold geometry to be suitable from 3D volumetric analysis of artefacts in the Roonka aboriginal burial excavation site. I developed scripts to calculate points intersecting these volumes in 3D space. I was able to reduce manual model creation time from multiple minutes per model to automatically rig hundreds of models in under a second.",
            skills: "Blender, Python, GIS, 3D Modelling, Git",
            linkHref: "https://github.com/UoA-eResearch/roonka_volume_models",
            linkText: "GitHub link"
        },
        {
            title: 'Prx Fishtank - Virtual Reality Human Body Application',
            description: "I implemented features and improvements for an interactive simulation of polymers in the human body. This VR application was used by Jacinda Ardern when visiting our workplace and had a brief installation at Te Papa Museum.",
            skills: "C#, Unity, Git, HTC Vive, Oculus, Virtual Reality",
            linkHref: "https://www.eresearch.auckland.ac.nz/project/visualising-protein-interaction/",
            linkText: "Case study link"
        }
    ]
}
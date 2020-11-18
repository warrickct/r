
export const resumeData = {
    experienceList: [
        {
            title: 'eResearch Engagement Specialist',
            company: 'The University of Auckland',
            date: '2020 Mar. - present',
            description: [
                "Worked on a team with 3 other software developers in an agile environment.",
                "Developed to an Angular application.",
                "Migrated a large Angular application to serverless architecture.",
                "Developed multiple micro-services hosted within AWS cloud infrastructure.",
                "Set up and optimized CI/CD pipelines.",
                "Programmed contributions to React and Django applications",
                // "Angular front end development.",
                // "Amazon Web Services development and solution architecture.",
                // "API and microservice development.",
                // "Continuous Integration and deployment development.",
                // "Develop React front end development."
                "Increase deployment pipeline speeds by 45%.",
                "Increased test coverage by 30%."
            ]
        },
        {
            title: 'Solutions Analyst',
            company: 'The University of Auckland',
            date: '2018 Oct. - Mar. 2020',
            description: [
                "Full Stack development.",
                "3D application and virtual reality development.",
                "Collaborate with researchers to gather technical requirements and provide technical knowledge.",
                "Lead and assist in software development workshops and training.",
                "Showcase and represent technical demonstrations of projects created by the organization.",
                "Provide technical support to virtual machines and large data storage."
            ]
        },
        {
            title: 'eResearch IT Support',
            company: 'The University of Auckland',
            date: 'Aug. 2017 - Oct. 2018',
            description: [
                "Assisted in the software development of various research projects.",
                "Piloted software for researchers requiring assistance.",
                "Provided assistance in teaching and workshops."
            ]
        },
    ],
    projectsList: [
        {
            title: 'ResearchHub',
            description: "Worked on the agile development team for the ResearchHub migrating functionality to a cloud architecture. Made alterations to front-end components. Helped to build the CI/CD pipeline for development operations. Increased unit test coverage from 50% to 80%.",
            skills: "NodeJS, AWS, Cloud, Rest APIs, Serverless, Jenkins, Angular, Git, Bash, EC2, S3, GraphQL, Contentful, Lambda, API Gateway",
            linkHref: "https://research-hub.auckland.ac.nz/#/home",
            linkText: "ResearchHub link"
        },
        {
            title: '2FAB',
            description: "Created a microservice hosted on AWS Lambda to using Puppeteer retrieve OAuth2.0 tokens. This allowed us to automate our workflows and create integration tests for the ResearchHub which were previously done manually making a GET request.",
            skills: "NodeJS, AWS, APIs, Puppeteer, Serverless, ServiceNow, API Gateway",
            linkHref: "https://github.com/UoA-eResearch/oauth-2fa-bypass",
            linkText: "GitHub link"
        },
        {
            title: 'Serverless Now',
            description: "Created an AWS Lambda function intercept ServiceNow requests. The service modifies structure and augments with AWS Cognito user pool information before forwarding the ticket.",
            skills: "NodeJS, AWS, APIs, Serverless, ServiceNow, API Gateway",
            linkHref: "https://github.com/UoA-eResearch/hub-stack/tree/master/serverless-now",
            linkText: "GitHub link"
        },
        {
            title: 'MyTardis',
            description: "I contributed to the front-end development of the University of Auckland's Instrument Data platform which is a hybrid Django and React front-end. I also co-conducted a sprint to create a high fidelity prototype for the front-end design.",
            skills: "NodeJS, Django, React, front-end, sprint",
            linkHref: "https://github.com/UoA-eResearch/mytardis",
            linkText: "GitHub link"
        },
        {
            title: 'eDNA Virtual Hub',
            description: "I developed an interactive web application including a complete back-end stack with ingestion pipelines. This project was built to visualize ecological diversity metrics and patterns using eDNA collected across New Zealand.",
            skills: "NodeJS, Cypress, Git, SQL, Python, Django, Docker, Bash, HTML, CSS, Nectar",
            linkHref: "https://uoa-eresearch.github.io/eDNA/",
            linkText: "eDNA link"
        },
        {
            title: 'Roonka Burial Site Digitization',
            description: "Created Python scripts to programmatically create 3D models without non-manifold geometry to be suitable from 3D volumetric analysis of artefacts in the Roonka aboriginal burial excavation site. Created scripts to calculate points intersecting these volumes in 3D space. Reduced model rigging time from multiple minutes per model to automatically rig hundreds of models in under a second.",
            skills: "Blender, Python, GIS, 3D Modelling, Git",
            linkHref: "https://github.com/UoA-eResearch/roonka_volume_models",
            linkText: "GitHub link"
        },
        {
            title: 'Peroxiredoxin Fishtank',
            description: "On the development team for an interactive simulation of free radical accretion in peroxiredoxin-3 enzyme. This VR application was used by Jacinda Ardern when visiting our workplace and had a brief installation at Te Papa Museum.",
            skills: "C#, Unity, Git, HTC Vive, Oculus, Virtual Reality",
            linkHref: "https://www.eresearch.auckland.ac.nz/project/visualising-protein-interaction/",
            linkText: "Case study link"
        }
    ]
}
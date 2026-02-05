# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## SAP CI/CD Set-up

The general steps are defined here

``https://developers.sap.com/tutorials/set-up-cicd.html``

But!!

``
Stages --> Configuration Mode = Source Repository
``

Then

``
Create .sap_cid folder with file config.yaml
``
```
---
stages:
  build:
    buildTool: "mta"
    buildDescriptor: "mta.yaml"
    buildToolVersion: "MBTJ21N22"
  malwareScan:
    scan: false
  release:
    cfDeploy:
      strategy: "default"
      apiEndpoint: "https://api.cf.eu10.hana.ondemand.com"
      org: "ecenta-de"
      space: "dev"
      credential: "aacf"
```

`mta.yaml` can be generated with `cds add mta` once the app is ready for the deployment (so that mta add all the necessary services)
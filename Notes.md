# Express Typescript
  - `npm init -y`

## Installations
  - `npm install --save-dev typescript`

  - Run tsc to initialize the typescript project:
    - `npm run tsc -- --init`
    - The double hyphen is so that the parameter goes to the tsc command and not to the run command

  - Install Express, the -E is for installing the exact version
    - `npm install express -E`

  - Install the typos for the express package:
    - `npm install --save-dev @types/express`

  - Install ts-node-dev, for automatized the compilation, watch the changes in the files
    - `npm install --save-dev ts-node-dev`

  - Install ts-standard
    - `npm install --save-dev ts-standard`
    - Add eslintConfig to the package.json:
    ~~~
    "eslintConfig": {
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": ["./node_modules/ts-standard/eslintrc.json"]
    }
    ~~~

## Scripts
  - Add tsc to scripts in package.json
  ~~~
  "tsc": "tsc",
  ~~~

## Info
  - To import json file, you need to add a configuration to the ts.config.json file:
  ~~~
  "resolveJsonModule": true
  ~~~

  - We need to define the types of ours objects, data, etc., in the file types.d.ts and also we can define our interfaces
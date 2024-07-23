require('dotenv').config();
const { mkdir, writeFileSync, mkdirSync } = require('fs');

const targerPath = `./src/environments2/environment.ts`;
const environmentFileContent = `

export const environment2 = {
    production: false,
    mapbox: "${process.env["mapbox_key"]}",
    otra: "test"
  }
`;

mkdirSync('./src/environments2', { recursive: true });
writeFileSync(targerPath, environmentFileContent);
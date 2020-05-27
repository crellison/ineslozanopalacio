const pug = require('pug');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const pagesPath = path.join(__dirname, 'src/pages');
const buildPath = path.join(__dirname, 'public');
const baseTemplate = path.join(__dirname, 'src/templates/basePage.pug');
const compiledTemplate = pug.compileFile(baseTemplate);

const getPageNames = () => fs.readdirSync(pagesPath);

const cleanTemplates = () => {
  const templateMatch = path.join(buildPath, '*.html');
  rimraf.sync(templateMatch, {}, err => {
    if (err) {
      console.log(`failed to clean built templates. ${err}`)
    }
  });
};

const buildTemplates = () => {
  getPageNames().forEach(pageName => {
    const templateCode = compiledTemplate({ pageName });
    const pagePath = path.join(buildPath, `${pageName}.html`);
    fs.writeFileSync(pagePath, templateCode);
  });
};

const updateTemplates = (event, filename) => {
  const initialRun = event === undefined && filename === undefined;
  const pagesRenamed = event === 'rename' && !filename.includes('/');
  if (pagesRenamed || initialRun) {
    cleanTemplates();
    buildTemplates();
    console.log('successfully built templates');
  }
};

const flags = {
  watch: '--watch'
};

if (!module.parent) {
  argFlags = process.argv.slice(2);
  updateTemplates();
  if (argFlags.includes(flags.watch)) {
    fs.watch(pagesPath, { encoding: 'utf-8', recursive: true }, updateTemplates)
  }
}

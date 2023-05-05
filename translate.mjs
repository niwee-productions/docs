import * as deepl from 'deepl-node';
import fs from 'fs';
import fse from 'fs-extra';
import ora from 'ora';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const authKey = process.env.DEEPL_KEY; // Replace with your key

if (!authKey) {
  console.error('No Deepl API key found. Did you forget to include it in your .env file?');
  process.exit(1);
}

const translator = new deepl.Translator(authKey);

// Copy docs to i18n folder
const i18nFolder = './i18n';
const docsFolder = './docs';
const languages = ['fr', 'es', 'de'];
let spinner;

// Create locales directories
spinner = ora('Creating directories').start();

try {
  languages.forEach((lang) => {
    const dir = `${i18nFolder}/${lang}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });
  spinner.succeed('Directories created');
} catch (err) {
  spinner.fail();
  console.error(err);
  process.exit(1);
}

// Recursively copy files
spinner = ora('Copying files').start();
languages.forEach((lang) => {
  try {
    fse.copySync(`${docsFolder}/`, `${i18nFolder}/${lang}/`, { overwrite: true | false });
    spinner.succeed('Files copied');
  } catch (err) {
    spinner.fail();
    console.error(err);
    process.exit(1);
  }
});

let walk = function (dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

try {
  languages.forEach((lang) => {
    console.log(`Translating ${lang}`);
    const dir = `${i18nFolder}/${lang}`;
    walk(dir, function (err, results) {
      if (err) throw err;

      results.forEach((file) => {
        const content = fs.readFileSync(`${file}`, 'utf8');
        // Ensure file is not empty
        if (content.length === 0) {
          return;
        }
        spinner = ora(`Translating ${file}`).start();
        try {
          translator
            .translateText(content, 'EN', lang)
            .then((translation) => {
              console.log(`Translated ${file}`);
              fs.writeFileSync(`${file}`, translation.text);
            })
            .catch((err) => {
              spinner.fail(`Failed to translate ${file}`);
              console.error(err);
              process.exit(1);
            });
          spinner.succeed(`Translated ${file}`);
        } catch (err) {
          spinner.fail(`Failed to translate ${file}`);
          console.error(err);
          process.exit(1);
        }
      });
    });
  });
} catch (err) {
  spinner.fail();
  console.error(err);
  process.exit(1);
}

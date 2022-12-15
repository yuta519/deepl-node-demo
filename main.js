const deepl = require('deepl-node');

const translator = new deepl.Translator(process.env.APIKEY);

(async () => {
  const result = await translator.translateText('Hello, world!', null, 'fr');
  console.log(result.text); // Bonjour, le monde !
})();

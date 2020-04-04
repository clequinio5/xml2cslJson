const fs = require('fs')
const util = require('util')
const writeSync = util.promisify(fs.writeFile);
const readSync = util.promisify(fs.readFile);
const readDirSync = util.promisify(fs.readdir);
const convert = require('xml-js');
const jsonata = require("jsonata");

const IN_PATH = './in'
const OUT_PATH = './out'
const MAPPING = './jsonata-mapping.txt'

const main = async () => {

    const files = await readDirSync(IN_PATH);

    for (const file of files) {

        const filename = file.split('.')[0];
        const filepath = IN_PATH + '/' + file;

        const xml = (await readSync(filepath)).toString();
        const json = convert.xml2json(xml, { compact: true, spaces: 4 });
        await writeSync(OUT_PATH + '/' + filename + '.txt', json);

        const mapping = (await readSync(MAPPING)).toString().trim();
        const cslJson = jsonata(mapping).evaluate(JSON.parse(json))
        await writeSync(OUT_PATH + '/' + filename + '.json', JSON.stringify(cslJson, null, 4));

        console.log("cslJson generated");

    }

}

main()
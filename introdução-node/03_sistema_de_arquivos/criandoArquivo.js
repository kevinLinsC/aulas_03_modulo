import {promises as fs} from 'fs';
import path from 'path';
import url from 'url';

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

var arquivo = path.join(__dirname, "boas_vindas.txt");

try{
    await fs.writeFile(arquivo, "Saudações!!!");
    console.log("Arquivo criado com sucesso.");
} catch(error){
    console.log("Erro ao criar arquivo", error);
}
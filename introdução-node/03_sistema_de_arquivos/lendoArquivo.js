import {promises as fs} from 'fs';
import path from 'path';
import url from 'url';

var __filename = url.fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);

var arquivo = path.join(__dirname, "totalVendas.json");

try{
    var buffer = await fs.readFile(arquivo);
    console.log(buffer);
    console.log(buffer.toString());
    console.log(JSON.parse(buffer).total)
    console.log(JSON.parse(buffer).alunos)
} catch (error){
    console.log("Erro ao ler arquivo: ", error);
}
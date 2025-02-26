import {promises as fs} from 'fs';

const main = async () => {
    const items = await fs.readdir(`lojas`, {withFileTypes: true});
    for(var item of items){
        var type = item.isDirectory() ? "pasta" : "arquivo";
        console.log(`${item.name}: ${type}`)
    }
};

main();
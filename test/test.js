const parser = require('swagger-parser-simple');
const fs = require('fs');

(async function handle() {
    let data = await parser('./swagger.yaml');
    fs.writeFileSync('./swagger.json', JSON.stringify(data));
    process.exit();
})();
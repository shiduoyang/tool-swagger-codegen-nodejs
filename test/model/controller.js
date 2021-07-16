const R = require('ramda');

$classStart
class $className{
    constructor() {
        
    }

    $interfaceStart
    /**
     * @url: $url
     * @method: $method
     * @summary: $summary
     * @description: $description
     * @parameters: $parameters
     */
    async $interfaceName(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: $exampleData,
        });
    }
    $interfaceEnd
}
$classEnd

module.exports = new $className();
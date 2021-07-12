module.exports = {
    class: `class $class {
                constructor() {

                }
                $interfaceIncPoint
            }`,
    interface: `$interfaceDesc
                async $interfaceName(ctx) {
                    let $paramBody = ctx.request.body.fields;
                    ctx.body = resData(200, '', {
                        data: $exampleData,
                    });
                }
            `,
};
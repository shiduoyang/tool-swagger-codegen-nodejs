const R = require('ramda');


class Swagger_controller{
    constructor() {
        
    }

    
    /**
     * @url: /pet
     * @method: post
     * @summary: Add a new pet to the store
     * @description: 
     * @parameters: body
     */
    async pet(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /pet
     * @method: put
     * @summary: Update an existing pet
     * @description: 
     * @parameters: body
     */
    async pet(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /pet/findByStatus
     * @method: get
     * @summary: Finds Pets by status
     * @description: Multiple status values can be provided with comma separated strings
     * @parameters: status
     */
    async findByStatus(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: [{"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"}],
        });
    }
    

    /**
     * @url: /pet/findByTags
     * @method: get
     * @summary: Finds Pets by tags
     * @description: Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
     * @parameters: tags
     */
    async findByTags(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: [{"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"}],
        });
    }
    

    /**
     * @url: /pet/{petId}
     * @method: get
     * @summary: Find pet by ID
     * @description: Returns a single pet
     * @parameters: petId
     */
    async pet(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"},
        });
    }
    

    /**
     * @url: /pet/{petId}
     * @method: post
     * @summary: Updates a pet in the store with form data
     * @description: 
     * @parameters: petId,name,status
     */
    async pet(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /pet/{petId}
     * @method: delete
     * @summary: Deletes a pet
     * @description: 
     * @parameters: api_key,petId
     */
    async pet(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /pet/{petId}/uploadImage
     * @method: post
     * @summary: uploads an image
     * @description: 
     * @parameters: petId,additionalMetadata,file
     */
    async uploadImage(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {"code":1,"type":"","message":""},
        });
    }
    

    /**
     * @url: /store/inventory
     * @method: get
     * @summary: Returns pet inventories by status
     * @description: Returns a map of status codes to quantities
     * @parameters: 
     */
    async inventory(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /store/order
     * @method: post
     * @summary: Place an order for a pet
     * @description: 
     * @parameters: body
     */
    async order(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {"id":1,"petId":1,"quantity":1,"shipDate":"1970-01-01 00:00:00","status":"placed","complete":false},
        });
    }
    

    /**
     * @url: /store/order/{orderId}
     * @method: get
     * @summary: Find purchase order by ID
     * @description: For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
     * @parameters: orderId
     */
    async order(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {"id":1,"petId":1,"quantity":1,"shipDate":"1970-01-01 00:00:00","status":"placed","complete":false},
        });
    }
    

    /**
     * @url: /store/order/{orderId}
     * @method: delete
     * @summary: Delete purchase order by ID
     * @description: For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
     * @parameters: orderId
     */
    async order(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user
     * @method: post
     * @summary: Create user
     * @description: This can only be done by the logged in user.
     * @parameters: body
     */
    async user(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/createWithArray
     * @method: post
     * @summary: Creates list of users with given input array
     * @description: 
     * @parameters: body
     */
    async createWithArray(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/createWithList
     * @method: post
     * @summary: Creates list of users with given input array
     * @description: 
     * @parameters: body
     */
    async createWithList(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/login
     * @method: get
     * @summary: Logs user into the system
     * @description: 
     * @parameters: username,password
     */
    async login(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/logout
     * @method: get
     * @summary: Logs out current logged in user session
     * @description: 
     * @parameters: 
     */
    async logout(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/{username}
     * @method: get
     * @summary: Get user by user name
     * @description: 
     * @parameters: username
     */
    async user(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {"id":1,"username":"","firstName":"","lastName":"","email":"","password":"","phone":"","userStatus":1},
        });
    }
    

    /**
     * @url: /user/{username}
     * @method: put
     * @summary: Updated user
     * @description: This can only be done by the logged in user.
     * @parameters: username,body
     */
    async user(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    

    /**
     * @url: /user/{username}
     * @method: delete
     * @summary: Delete user
     * @description: This can only be done by the logged in user.
     * @parameters: username
     */
    async user(ctx) {
        ctx.body = resData(200, '', {
            otherValue: 1,
            data: {},
        });
    }
    
$incPoint
}


module.exports = new Swagger_controller();
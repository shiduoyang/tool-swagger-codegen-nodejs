package handler

import (
	"encoding/json"
	"github.com/pkg/errors"
	"github.com/tidwall/gjson"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
)




/**
 * @url: /pet
 * @method: post
 * @summary: Add a new pet to the store
 * @description: 
 * @parameters: body
 */
func pet(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet
 * @method: put
 * @summary: Update an existing pet
 * @description: 
 * @parameters: body
 */
func pet(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/findByStatus
 * @method: get
 * @summary: Finds Pets by status
 * @description: Multiple status values can be provided with comma separated strings
 * @parameters: status
 */
func findByStatus(context *gin.Context) {
	retData= [{"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"}];
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/findByTags
 * @method: get
 * @summary: Finds Pets by tags
 * @description: Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @parameters: tags
 */
func findByTags(context *gin.Context) {
	retData= [{"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"}];
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/{petId}
 * @method: get
 * @summary: Find pet by ID
 * @description: Returns a single pet
 * @parameters: petId
 */
func pet(context *gin.Context) {
	retData= {"id":1,"category":{"id":1,"name":""},"name":"","photoUrls":[""],"tags":[{"id":1,"name":""}],"status":"available"};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/{petId}
 * @method: post
 * @summary: Updates a pet in the store with form data
 * @description: 
 * @parameters: petId,name,status
 */
func pet(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/{petId}
 * @method: delete
 * @summary: Deletes a pet
 * @description: 
 * @parameters: api_key,petId
 */
func pet(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /pet/{petId}/uploadImage
 * @method: post
 * @summary: uploads an image
 * @description: 
 * @parameters: petId,additionalMetadata,file
 */
func uploadImage(context *gin.Context) {
	retData= {"code":1,"type":"","message":""};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /store/inventory
 * @method: get
 * @summary: Returns pet inventories by status
 * @description: Returns a map of status codes to quantities
 * @parameters: 
 */
func inventory(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /store/order
 * @method: post
 * @summary: Place an order for a pet
 * @description: 
 * @parameters: body
 */
func order(context *gin.Context) {
	retData= {"id":1,"petId":1,"quantity":1,"shipDate":"1970-01-01 00:00:00","status":"placed","complete":false};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /store/order/{orderId}
 * @method: get
 * @summary: Find purchase order by ID
 * @description: For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @parameters: orderId
 */
func order(context *gin.Context) {
	retData= {"id":1,"petId":1,"quantity":1,"shipDate":"1970-01-01 00:00:00","status":"placed","complete":false};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /store/order/{orderId}
 * @method: delete
 * @summary: Delete purchase order by ID
 * @description: For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @parameters: orderId
 */
func order(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user
 * @method: post
 * @summary: Create user
 * @description: This can only be done by the logged in user.
 * @parameters: body
 */
func user(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/createWithArray
 * @method: post
 * @summary: Creates list of users with given input array
 * @description: 
 * @parameters: body
 */
func createWithArray(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/createWithList
 * @method: post
 * @summary: Creates list of users with given input array
 * @description: 
 * @parameters: body
 */
func createWithList(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/login
 * @method: get
 * @summary: Logs user into the system
 * @description: 
 * @parameters: username,password
 */
func login(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/logout
 * @method: get
 * @summary: Logs out current logged in user session
 * @description: 
 * @parameters: 
 */
func logout(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/{username}
 * @method: get
 * @summary: Get user by user name
 * @description: 
 * @parameters: username
 */
func user(context *gin.Context) {
	retData= {"id":1,"username":"","firstName":"","lastName":"","email":"","password":"","phone":"","userStatus":1};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/{username}
 * @method: put
 * @summary: Updated user
 * @description: This can only be done by the logged in user.
 * @parameters: username,body
 */
func user(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}



/**
 * @url: /user/{username}
 * @method: delete
 * @summary: Delete user
 * @description: This can only be done by the logged in user.
 * @parameters: username
 */
func user(context *gin.Context) {
	retData= {};
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}

$incPoint

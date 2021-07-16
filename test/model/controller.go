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

$classStart
$interfaceStart

/**
 * @url: $url
 * @method: $method
 * @summary: $summary
 * @description: $description
 * @parameters: $parameters
 */
func $interfaceName(context *gin.Context) {
	retData= $exampleData;
	
	context.JSON(http.StatusOK, gin.H{
		"code": config.REQ_OK,
		"msg": "",
		"data": string(retData),
	})
}
$interfaceEnd
$classEnd
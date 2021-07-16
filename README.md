# swagger-codeten-common
基于swagger接口文档*.yaml，以提供的模板文件为框架，将各接口填充在其中，最终生成文件并放于指定位置

## Features

* **提供了丰富的关键字，用于书写模板文件，理论上可以支持任何语言、任何格式**

## install

```
npm install -g swagger-codegen-common
```
or
```
npm install swagger-codegen-common
```

## Using

### 1 fast start

```
swagger-codegen-common generate -y ./test/swagger.yaml -d ./ -m ./test/model/controller.go
```
结果：
```
{
  yaml: './test/swagger.yaml',
  codeDir: './',
  modelPath: './test/model/controller.go'
}
code >> ./ done
```
### 2 params

1.  -y 表示swagger文档的位置，如 ./swagger.yaml。该文件为标准的swagger2.0 or 3.0文档
2.  -d 表示结果要写入的文件夹位置，如 ./
3.  -m 表示生成代码时使用的模板文件地址，如 ./test/controller.go.  **模板文件书写在下方详细说明**

### 3 model file

#### 3.1 example
```
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
```

```
const Router = require('koa-router');
const controller = require('');

$classStart
const router = new Router({});

$interfaceStart
router.$method("$url", controller.$interfaceName);
$interfaceEnd

$classEnd

module.exports = router;
```
```
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
```

#### 3.2 keywords support

模板文件中支持以下关键词
 
```
[
	"$classStart",
	"$classEnd",
	"$className",
	"$interfaceStart",
	"$interfaceEnd",
	"$url",//接口路由 如/users/login
	"$method",//请求方法 如POST
	"$summary",
	"$description",
	"$parameters",//参数列表，如 a,b
	"$exampleData",//接口默认返回值
]

```

### 3 rule

1. \$classStart、\$classEnd \$interfaceStart \$interfaceEnd 能且仅能出现一次
2. \$interfaceStart \$interfaceEnd 需包含在\$classStart \$classEnd内

## 2 help
```
swagger-codegen-common generate --help
```
result:
```

generate code using a given modelFile

Options:
  -V, --version             output the version number
  -y, --yaml [string]       yaml file path (default: "")
  -d, --codeDir [string]    code dir path (default: "")
  -m, --modelPath [string]  model file path (default: "")
  -h, --help                display help for command
```

## Test
```
npm run test
```
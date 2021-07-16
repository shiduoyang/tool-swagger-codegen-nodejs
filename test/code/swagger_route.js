const Router = require('koa-router');
const controller = require('');


const router = new Router({});


router.post("/pet", controller.pet);


router.put("/pet", controller.pet);


router.get("/pet/findByStatus", controller.findByStatus);


router.get("/pet/findByTags", controller.findByTags);


router.get("/pet/{petId}", controller.pet);


router.post("/pet/{petId}", controller.pet);


router.delete("/pet/{petId}", controller.pet);


router.post("/pet/{petId}/uploadImage", controller.uploadImage);


router.get("/store/inventory", controller.inventory);


router.post("/store/order", controller.order);


router.get("/store/order/{orderId}", controller.order);


router.delete("/store/order/{orderId}", controller.order);


router.post("/user", controller.user);


router.post("/user/createWithArray", controller.createWithArray);


router.post("/user/createWithList", controller.createWithList);


router.get("/user/login", controller.login);


router.get("/user/logout", controller.logout);


router.get("/user/{username}", controller.user);


router.put("/user/{username}", controller.user);


router.delete("/user/{username}", controller.user);

$incPoint



module.exports = router;
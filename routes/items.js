const express = require('express');
const route = express.Router();
const controller = require('../controller/item-controller');

route.post('/', controller.addItem);
route.get('/', controller.getItems)
route.delete('/', controller.deleteItems)
route.get('/schedule', controller.getScheduleItems)

module.exports = route;
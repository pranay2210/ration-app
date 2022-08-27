const ItemModel = require('../models/items');

let addItem = async (req, res, next) => {
    console.log(req.body)
    let id = Math.floor(Math.random() * 9999999999);
    let { packetType, content, calories, qty, expiryDate } = req.body;
    let packetId = (packetType === 'Food') ? 'F' + id : 'W' + id;

    console.log(packetId, packetType, content, calories, qty, expiryDate)
    let item = new ItemModel({ packetId, packetType, content, calories, qty, expiryDate });
    item.save(function (err, obj) {
        if (err) res.send(err);
        res.send({ message: 'Item Inserted', data: obj });
    });

};

let getItems = (req, res, next) => {
    ItemModel.find({}).then((result) => {
        console.log("Result", result)
        res.send(result)
    });
};

let deleteItems = async(req,res)=>{
    let packetId = req.body.packetId;
    ItemModel.deleteOne({ packetId: packetId });
};

module.exports = {
    addItem,
    getItems,
    deleteItems
}
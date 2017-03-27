var express = require('express');
var items = require('../store/items.json').items;
var router = express.Router();

/* GET home page. */
router.get('/:category?', function (req, res, next) {
    var store = {
        "timed": [],
        "discount": []
    };
    for (var i in items) {
        var item = items[i];
        if (item.category == req.params.category) {
            if (item.type == "timed") {
                store.timed.push(item);
            } else {
                store.discount.push(item);
            }
        }
    }

    res.render('index', {
        title: "Freshte.ch Deals Store" + (req.params.category ? ' - ' + req.params.category : ''),
        refered: req.query.refer == "true",
        page: {
            path: req.path
        },
        store: store
    });
});

module.exports = router;

const moduleModel = require('./../models/module')

module.exports = {
    preview: function (req, res) {
        moduleModel.findOne({
            where: { path: req.params.path }
        }).then(function (result) {
            try {
                if (result) {
                    let data = result.data;
                    return res.json(JSON.parse(data));
                } else {
                    return res.json({});
                }
            } catch (e) {
                return res.json({ error: e.message })
            }
        })
    },
    create: function (req, res) {

    },
    store: function (req, res) {
        moduleModel.create(req.body).then(function (result) {
            return res.json(result);
        });
    }
}
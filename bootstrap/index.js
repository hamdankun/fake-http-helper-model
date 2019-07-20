const router = require('./../router');
const moduleModel = require('./../models/module');

migration();

router.listen(3000, function() {
    console.log('Server Started On 3000');
});

function migration() {
    moduleModel.sync()
        .then(function() {
            moduleModel.create({
                path: 'post',
                data: JSON.stringify([{'id': 1, 'title': 'hanafikun', 'content' : 'hanafikun is awesome'}, {'id': 1, 'title': 'hanafikun', 'content' : 'hanafikun is awesome'}])
            })
        });
}
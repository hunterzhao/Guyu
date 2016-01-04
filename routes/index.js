
exports.index=function (req, res, next) {
    res.render('index');
}

exports.makeGroup=function (req, res, next) {
    res.render('makeGroup');
}

exports.modal=function (req, res, next) {
    res.end('modal');
}
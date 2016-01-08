// 用户页面
exports.index=function (req, res, next) {
    res.render('index');
}

//创建调整组合的页面
exports.makeGroup=function (req, res, next) {
    res.render('makeGroup');
}

//模块页面
exports.modal=function (req, res, next) {
    res.end('modal');
}

// 组合主页面
exports.group=function (req, res, next) {
    res.render('group');
}
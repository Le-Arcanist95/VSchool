function middlewareFunction(req, res, next) {
    req.body = "Hello World! I am the middleware!";
    console.log(req.body);
    next();
};

module.exports = middlewareFunction;
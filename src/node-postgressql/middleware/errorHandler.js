// error in development
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
};


// error in production

const sendErrorProd = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
};


module.exports = (err, req, res, next) => {

    // const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    // res.status(statusCode)
    // res.json({
    //     message: err.message,
    //     stack: process.env.NODE_ENV === 'production' ? null : err.stack
    // })



    // by prod and dev
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error z';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        sendErrorProd(err, res);
    }


}

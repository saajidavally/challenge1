const { createLogger, transports, format } = require ('winston');

const logger = createLogger({
    transports:[
        new transports.Console({
            level:'info',
            format:format.combine(format.timestamp(),format.printf(info => {
                return `${info.timestamp} ${info.level} ${info.message}`
              }),format.json()
              )
        })
    ]
})
const requestLogger = (req,res,next) =>{
    const { method, url } = req;
    logger.info(`${method} ${url}`);
    next()
}

module.exports = {requestLogger}
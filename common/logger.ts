/**
 * Configure logger
 * ref: https://github.com/log4js-node/log4js-node
 */
import log4js from 'log4js'
log4js.configure({
    appenders: {
        out: { type: 'console' },
    },
    categories: {
        default: { appenders: ['out'], level: 'warn' },
    },
})

const logger = log4js.getLogger('devguru-lang')

export default logger

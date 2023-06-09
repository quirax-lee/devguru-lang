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

/**
 * Main function when launched this file directly
 */
function main() {
    let logger = log4js.getLogger('devguru-lang')
    logger.level = 'trace'

    logger.info('Starting devguru-lang interpreter')
    logger.info('Terminating interpreter')
}

/**
 * If launched this file directly, call main function
 */
import * as url from 'node:url'

if (import.meta.url.startsWith('file:')) {
    const modulePath = url.fileURLToPath(import.meta.url)
    if (process.argv[1] === modulePath) {
        main()
    }
}

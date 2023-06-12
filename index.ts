import logger from './logger.ts'
import repl from './repl.ts'

/**
 * Main function when launched this file directly
 */
async function main() {
    logger.level = 'trace'

    logger.info('Starting devguru-lang interpreter')

    logger.info('Start REPL using stdin')
    let result = await repl(process.stdin)

    logger.info('Terminating interpreter with a result = %d', result)

    process.exit(result)
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

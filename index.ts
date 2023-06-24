import fs from 'node:fs'

import minimist from 'minimist'

import logger from './common/logger.ts'
import repl from './repl.ts'

/**
 * Main function when launched this file directly
 */
async function main() {
    logger.level = 'trace'

    logger.info('Starting devguru-lang interpreter')

    logger.debug('Analyzing command line arguments')
    let argv = minimist(process.argv.slice(2))
    // argv example:
    // argv = {
    //     _: [ "dev.guru" ] // script file name
    // }

    logger.debug('argv = %s', argv)

    let result = -1

    if (argv._.length === 0) {
        // No script file specified. Use stdin
        logger.info('Starting REPL using stdin')
        result = await repl(process.stdin)
    } else {
        logger.info('Starting REPL using a file "%s"', argv._[0])
        result = await repl(fs.createReadStream(argv._[0]))
    }

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

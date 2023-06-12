import readline from 'node:readline'
import { Readable } from 'node:stream'

import logger from './logger.ts'

function repl(stream: Readable): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        logger.trace('Create interface between input stream and stdout')
        let rl = readline.createInterface({
            input: stream,
            output: process.stdout,
        })

        logger.trace('Prompt to listen')
        rl.setPrompt('> ')
        rl.prompt()

        // Event when input stream has data
        rl.on('line', (script: String) => {
            logger.debug('Input = "%s"', script)

            // TODO: Process script string here

            logger.trace('Prompt to listen')
            rl.prompt()
        })

        rl.on('close', () => {
            console.log() // Add a line feed after prompt
            logger.info('End of stream')

            resolve(0)
        })
    })
}

export default repl

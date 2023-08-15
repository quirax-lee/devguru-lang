import readline from 'node:readline'
import { Readable } from 'node:stream'

import logger from './common/logger.ts'

import Interpreter from './interpreter.ts'

import defaultRl from './common/stdio.ts'

function repl(stream: Readable): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        let interpreter = new Interpreter()

        logger.trace('Create interface between input stream and stdout')

        let rl: readline.Interface

        if (stream == process.stdin) {
            rl = defaultRl
        } else {
            rl = readline.createInterface({
                input: stream,
                output: process.stdout,
                terminal: false,
            })
        }

        ;(async () => {
            for await (const script of rl) {
                logger.debug('Input = "%s"', script)

                interpreter.tokenize(script) // 입력된 script를 tokenize
                await interpreter.run() // interpreter를 실행

                if (rl.terminal) {
                    logger.trace('Prompt to listen')
                    rl.setPrompt('> ')
                } else {
                    rl.setPrompt('')
                }
                rl.prompt()
            }

            console.log() // Add a line feed after prompt
            logger.info('End of stream')

            resolve(0)
        })()
    })
}

export default repl

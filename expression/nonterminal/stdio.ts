import { Register } from '../terminal.ts'
import Operator from './operator.ts'
import rl from '../../common/stdio.ts'

export class StandardInput extends Operator {
    public static regexp: string = 'reuuu'

    public asyncRun(): Promise<number> {
        return new Promise<number>((resolve) => {
            let acc = this.getMachine().getAccumulator()

            rl.setPrompt('Acc = ')
            rl.prompt()

            function onLine(data: string) {
                let value = parseInt(data)
                acc.set(value)

                rl.off('line', onLine)

                resolve(value)
            }

            rl.on('line', onLine)
        })
    }
}

export class StandardOutput extends Operator {
    public static regexp: string = 'rguuu'

    public run(): number {
        let acc = this.getMachine().getAccumulator()
        let result = acc.get()
        let ascii = String.fromCharCode(result)

        process.stdout.write(ascii)

        return result
    }
}

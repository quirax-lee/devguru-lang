import Interpreter from '../interpreter'
import Machine from '../machine'

class DummyInterpreter extends Interpreter {
    public getMachine(): Machine {
        return this.machine
    }
}

let a: {
    script: string
    run: (machine: Machine) => void
}

export default function test(runs: { script: string; run: (machine: Machine) => void }[]): void {
    runs.forEach(({ script, run }) => {
        describe(`Running script: ${script}`, () => {
            let interpreter = new DummyInterpreter()
            let machine = interpreter.getMachine()

            it('Script runs well', () => {
                interpreter.tokenize(script)
                interpreter.run()
            })

            run(machine)
        })
    })
}

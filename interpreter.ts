import Operator from './expression/nonterminal/index.ts'
import Machine from './machine.ts'

class Interpreter {
    private machine: Machine = new Machine()

    public tokenize(script: string): void {
        let aa: any[] = [script]
        Operator.getOps().forEach((Op) => {
            aa = aa
                .flatMap((x) => {
                    if (typeof x === 'string') {
                        let ab = [...x.matchAll(new RegExp(Op.regexp, 'g'))]
                        return x
                            .split(new RegExp(Op.regexp.split(/\(|\)/).join('')))
                            .flatMap((y, i) => [y, ab[i] ? new Op(ab[i]) : ''])
                    } else return [x]
                })
                .filter((x) => typeof x !== 'string' || x !== '')
        })
        aa.filter((x) => typeof x !== 'string').forEach((x) => this.machine.push(x))
    }

    public run(): void {
        let op: Operator | undefined

        while ((op = this.machine.next())) {
            op.run()
        }
    }
}

export default Interpreter

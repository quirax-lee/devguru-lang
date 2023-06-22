import Operator from './operator.ts'

export class Increase extends Operator {
    public static regexp: string = '(v+)'

    public run(): number {
        let operand = this.getOperandIndex()
        let acc = this.getMachine().getAccumulator()

        let result = acc.get() + operand

        acc.set(result)

        return result
    }
}

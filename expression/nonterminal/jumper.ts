import Operator from './operator'

export class SetCheckpoint extends Operator {
    public static regexp: string = 'eg(u+)'

    public run(): number {
        let operand = this.getOperandIndex()

        let pc = this.getMachine().getProgramCounter()
        let ckpt = this.getMachine().getCheckpoint(operand)

        let result = pc.get()

        ckpt.set(result)

        return result
    }
}

export class JumpIfEqualZero extends Operator {
    public static regexp: string = 'er(u+)'

    public run(): number {
        let operand = this.getOperandIndex()

        let pc = this.getMachine().getProgramCounter()
        let ckpt = this.getMachine().getCheckpoint(operand)
        let acc = this.getMachine().getAccumulator()

        let result = acc.get()

        if (result != 0) {
            pc.set(ckpt.get())
        }

        return result
    }
}

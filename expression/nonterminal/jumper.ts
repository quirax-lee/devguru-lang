import Operator from './operator.ts'

export class SetCheckpoint extends Operator {
    public static regexp: string = 'eg(u+)'
    private hasRun: boolean = false

    public run(): number {
        let operand = this.getOperandIndex()

        let pc = this.getMachine().getProgramCounter()
        let ckpt = this.getMachine().getCheckpoint(operand)

        let result = pc.get()

        if (ckpt.get() !== -1) ckpt.set(result)
        else ckpt.set(0)

        this.hasRun = true

        return result
    }

    public undo(): number {
        if (!this.hasRun) return -1

        let operand = this.getOperandIndex()

        let ckpt = this.getMachine().getCheckpoint(operand)

        let result = ckpt.get()

        if (ckpt.get() !== 0) ckpt.set(0)
        else ckpt.set(-1)

        this.hasRun = false

        return result
    }
}

export class JumpIfNotEqualZero extends Operator {
    public static regexp: string = 'er(u+)'

    public run(): number {
        let operand = this.getOperandIndex()

        let pc = this.getMachine().getProgramCounter()
        let ckpt = this.getMachine().getCheckpoint(operand)
        let acc = this.getMachine().getAccumulator()

        let result = acc.get()

        let orig_ckpt = ckpt.get()

        if (ckpt.get() === 0) ckpt.set(-1)

        if (result !== 0) {
            // 선택된 체크포인트가 비어있는 경우 해당되는 체크포인트를 찾을 때까지 next 수행
            while (ckpt.get() === -1) {
                let opr = this.getMachine().next()
                if (!opr) break
                if (opr instanceof SetCheckpoint) {
                    ckpt.set(0)
                    opr.run()
                    if (ckpt.get() === 0) {
                        ckpt.set(-1)
                        opr.undo()
                    }
                }
            }

            if (ckpt.get() === -1) {
                // 여전히 체크포인트가 비어 있는 경우
                throw new SyntaxError(`Checkpoint #${operand} is not defined.`)
            }

            pc.set(ckpt.get())

            ckpt.set(orig_ckpt)
        }

        return result
    }
}

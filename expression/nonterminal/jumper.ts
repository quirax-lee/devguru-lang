import Operator from './operator.ts'

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

        if (result !== 0) {
            // 선택된 체크포인트가 비어있는 경우 해당되는 체크포인트를 찾을 때까지 next 수행
            while (ckpt.get() === 0) {
                let opr = this.getMachine().next()
                if (!opr) break
                if (opr instanceof SetCheckpoint) opr.run()
            }

            if (ckpt.get() === 0) {
                // 여전히 체크포인트가 비어 있는 경우
                throw new SyntaxError(`Checkpoint #${operand} is not defined.`)
            }

            pc.set(ckpt.get())
        }

        return result
    }
}

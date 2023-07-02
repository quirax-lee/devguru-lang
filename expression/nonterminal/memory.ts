import Operator from './operator.ts'

export class AppointedMemSave extends Operator {
    public static regexp: string = 'gr(u+)'

    public run(): number {
        let operand = this.getOperandIndex()
        let acc = this.getMachine().getAccumulator()
        let mem = this.getMachine().getMemory(operand)

        let result = acc.get()

        mem.set(result)

        return result
    }
}

export class AppointedMemLoad extends Operator {
    public static regexp: string = 'ge(u+)'

    public run(): number {
        let operand = this.getOperandIndex()
        let acc = this.getMachine().getAccumulator()
        let mem = this.getMachine().getMemory(operand)

        let result = mem.get()

        acc.set(result)

        return result
    }
}

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

export class LoadPointer extends Operator {
    public static regexp: string = 'reu'

    public run(): number {
        let acc = this.getMachine().getAccumulator()
        let ptr = this.getMachine().getPointer()

        let result = ptr.get()

        acc.set(result)

        return result
    }
}

export class SetPointer extends Operator {
    public static regexp: string = 'rgu'

    public run(): number {
        let acc = this.getMachine().getAccumulator()
        let ptr = this.getMachine().getPointer()

        let result = Math.min(Math.max(acc.get(), 1), 255) // result의 범위를 1~255로 고정

        ptr.set(result)

        return result
    }
}

export class LoadPointeredMemory extends Operator {
    public static regexp: string = 'reuu'

    public run(): number {
        let acc = this.getMachine().getAccumulator()
        let ptr = this.getMachine().getPointer()
        let mem = this.getMachine().getMemory(ptr.get())

        let result = mem.get()

        acc.set(result)

        return result
    }
}

export class SavePointeredMemory extends Operator {
    public static regexp: string = 'rguu'

    public run(): number {
        let acc = this.getMachine().getAccumulator()
        let ptr = this.getMachine().getPointer()
        let mem = this.getMachine().getMemory(ptr.get())

        let result = acc.get()

        mem.set(result)

        return result
    }
}

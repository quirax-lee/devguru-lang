import Operator from './expression/nonterminal'
import { Checkpoint, Memory, Register } from './expression/terminal'

export class IndexOutOfRangeError extends Error {
    constructor() {
        super()
        this.name = 'IndexOutOfRangeError'
        this.message = 'Index of Terminal Expressions within the Machine must be between 1 and 255'
    }
}

export default class Machine {
    private operator: Operator[] = []

    private memory: Memory[] = []
    private checkpoint: Checkpoint[] = []

    private accumulator: Register = new Register()
    private pointer: Register = new Register()
    private programCounter: Register = new Register()

    public push(op: Operator) {
        this.operator.push(op)
    }

    public next(): Operator | undefined {
        let p = this.programCounter.get()
        let op = this.operator[p]
        if (op !== undefined) this.programCounter.set(++p)
        return op
    }

    public constructor() {
        for (let i = 0; i < 255; i++) {
            this.memory.push(new Memory())
            this.checkpoint.push(new Checkpoint())
        }
    }

    public getMemory(idx: number): Memory {
        if (idx < 1 || idx > 255) throw new IndexOutOfRangeError()
        return this.memory[idx - 1]
    }

    public getAccumulator(): Register {
        return this.accumulator
    }

    public getPointer(): Register {
        return this.pointer
    }

    public getProgramCounter(): Register {
        return this.programCounter
    }

    public getCheckpoint(idx: number): Checkpoint {
        if (idx < 1 || idx > 255) throw new IndexOutOfRangeError()
        return this.checkpoint[idx - 1]
    }
}

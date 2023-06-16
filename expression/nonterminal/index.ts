import AbstractExpression from '../index.ts'

class NoOperandError extends Error {
    constructor() {
        super()
        this.name = 'NoOperandError'
        this.message = 'Operand is not given'
    }
}

class Operator extends AbstractExpression {
    public static regexp: string = ''
    private static ops: Array<typeof Operator> = []

    public static register(cls: typeof Operator) {
        this.ops.push(cls)
    }

    public static getOps() {
        return this.ops
    }

    private token: RegExpMatchArray

    public constructor(token: RegExpMatchArray) {
        super()
        this.token = token
    }

    private getOperandIndex(): number | undefined {
        if (typeof this.token[1] !== 'string') throw new NoOperandError()
        return this.token[1].length
    }
}

export default Operator

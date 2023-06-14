class Operation {
    public static regexp: string = ''
    private static ops: Array<typeof Operation> = []

    private token: RegExpMatchArray

    public static register(cls: typeof Operation) {
        this.ops.push(cls)
    }

    public static getOps() {
        return this.ops
    }

    public constructor(token: RegExpMatchArray) {
        this.token = token
    }
}

export default Operation

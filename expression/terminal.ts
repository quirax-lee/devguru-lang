import AbstractExpression from './index.ts'

export default class TerminalExpression extends AbstractExpression {
    private value: number = 0

    public get(): number {
        return this.value
    }

    public set(value: number): void {
        this.value = value
    }

    public run(): number {
        return this.get()
    }
}

export class Memory extends TerminalExpression {}
export class Register extends TerminalExpression {}
export class Checkpoint extends TerminalExpression {}

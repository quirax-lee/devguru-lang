import logger from '../common/logger.ts'
import AbstractExpression from './index.ts'

/**
 * Terminal Expression으로서, 실제 값을 내포하고 관리하는 클래스
 */
export default class TerminalExpression extends AbstractExpression {
    private value: number = 0 // 이 객체가 내포하는 실제 값

    /**
     * 현재 내포된 값을 반환
     * @returns 현재 이 객체가 내포한 값
     */
    public get(): number {
        logger.trace('Getting value of this terminal expression = %d', this.value)
        return this.value
    }

    /**
     * 현재 내포된 값을 `value`의 값으로 변경
     * @param value 변경할 값
     */
    public set(value: number): void {
        logger.trace('Setting value of this terminal expression into value = %d', value)
        this.value = value
    }

    /**
     * 연산을 수행: 현재 내포된 값을 반환
     * @returns 현재 이 객체가 내포한 값
     */
    public run(): number {
        logger.trace('Running expression: getting value')
        return this.get()
    }
}

/**
 * Machine의 Memory를 정의
 */
export class Memory extends TerminalExpression {}

/**
 * Machine의 Register를 정의
 */
export class Register extends TerminalExpression {}

/**
 * Machine의 Checkpoint를 정의
 */
export class Checkpoint extends TerminalExpression {}

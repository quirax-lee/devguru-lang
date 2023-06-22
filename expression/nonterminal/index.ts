import logger from '../../logger.ts'
import Machine from '../../machine.ts'
import AbstractExpression from '../index.ts'

/**
 * Operator에 operand가 없는 경우 발생하는 Exception
 */
class NoOperandError extends Error {
    constructor() {
        super()
        this.name = 'NoOperandError'
        this.message = 'Operand is not given'
    }
}

/**
 * Nonterminal Expression으로, token을 분석하여 적절한 연산을 수행
 */
class Operator extends AbstractExpression {
    public static regexp: string = '' // 각 operator별 분석 regexp 구문
    private static ops: Array<typeof Operator> = [] // Operator 클래스에서 하위 operator들을 등록/관리하기 위한 배열

    /**
     * 하위 operator들을 등록
     * @param cls Operator를 상속받아 정의된 하위 operator 클래스
     */
    public static register(cls: typeof Operator) {
        logger.trace('Registered operator %s', cls.toString())
        this.ops.push(cls)
    }

    /**
     * 현재 등록되어 있는 모든 operator들을 반환. 주로 Tokenize 시 사용
     * @returns 현재 등록되어 있는 모든 operator 배열
     */
    public static getOps() {
        return this.ops
    }

    private token: RegExpMatchArray // tokenizer에서 분석한 토큰
    private machine: Machine // machine 객체

    /**
     * Operator를 생성
     * @param token tokenizer에서 분석한 토큰
     */
    public constructor(token: RegExpMatchArray, machine: Machine) {
        super()
        logger.trace('Creating operator with token %s', token.toString())
        this.token = token
        this.machine = machine
    }

    private getOperandIndex(): number | undefined {
        if (typeof this.token[1] !== 'string') throw new NoOperandError()
        logger.trace('Getting operand %s (value = %d)', this.token[1], this.token[1].length)
        return this.token[1].length // operand는 주로 특정 문자의 길이로 주어지므로 length를 사용
    }
}

export default Operator

import logger from '../logger'

/**
 * Expression의 기본 틀을 정의하는 클래스
 */
export default class AbstractExpression {
    /**
     * 실제 연산을 수행하는 메소드
     * @returns 0 (별도로 연산이 정의되지 않은 경우)
     */
    public run(): number {
        logger.trace('Running expression: NOP')
        return 0
    }
}

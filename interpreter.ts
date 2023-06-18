import Operator from './expression/nonterminal/index.ts'
import logger from './logger.ts'
import Machine from './machine.ts'

/**
 * 주어진 스크립트를 tokenize하고 실제 수행하는 클래스
 */
class Interpreter {
    // (2023. 06. 18.) 테스트용 Interpreter 생성을 위해 machine 객체의 visibility를 protected로 완화
    protected machine: Machine = new Machine() // 내부 Machine 객체

    /**
     * 주어진 스크립트 문자열을 operator 객체 배열로 토큰화
     * @param script 입력받은 스크립트 문자열
     */
    public tokenize(script: string): void {
        logger.trace('Accepting script: %s', script)
        let aa: any[] = [script]

        Operator.getOps().forEach((Op) => {
            logger.trace('Finding operators of %s', Op.toString())

            aa = aa
                .flatMap((x) => {
                    if (typeof x === 'string') {
                        // 토큰화 하기 전의 문자열인 경우
                        let ab = [...x.matchAll(new RegExp(Op.regexp, 'g'))] // x로부터 명령어 토큰을 찾음
                        return x
                            .split(new RegExp(Op.regexp.split(/\(|\)/).join(''))) // 토큰을 문자열에서 제거
                            .flatMap((y, i) => [y, ab[i] ? new Op(ab[i]) : '']) // 명령어 객체로 치환
                    } else return [x] // 이미 객체로 치환된 경우, 그대로 반환
                })
                .filter((x) => typeof x !== 'string' || x !== '') // 명령어 객체 또는 비어 있지 않은 문자만 남김
        })

        logger.trace('Finalizing tokenization')
        aa.filter((x) => typeof x !== 'string') // 남은 모든 문자열을 제거
            .forEach((x) => {
                this.machine.push(x)
            })
    }

    /**
     * machine을 가동
     */
    public run(): void {
        let op: Operator | undefined

        while ((op = this.machine.next())) {
            // machine으로부터 다음 명령어를 받아옴 (undefined이면 종료)
            logger.trace('Got operator %s', op.toString())
            op.run()
        }
    }
}

export default Interpreter

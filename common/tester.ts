import Interpreter from '../interpreter'
import Machine from '../machine'

/**
 * Interpreter 내 machine을 얻어오기 위한 테스트용 클래스
 */
class DummyInterpreter extends Interpreter {
    /**
     * Interpreter 내 machine 객체를 반환
     */
    public getMachine(): Machine {
        return this.machine
    }
}

/**
 * 테스트할 스크립트와 테스트할 항목들을 자동으로 실행
 * 테스트 스크립트(*.test.ts)에서 사용
 * @param runs 실행할 스크립트 및 테스트 함수를 포함하는 객체 배열
 */
export default function test(
    runs: {
        script: string // 테스트에서 실행할 devguru-lang 스크립트
        run: (machine: Machine) => void // 테스트로 실행할 Jest 스크립트
    }[]
): void {
    let interpreter = new DummyInterpreter() // 테스트에 사용할 Interpreter
    let machine = interpreter.getMachine() // interpreter에 내장된 machine

    describe('For a new interpreter session at ' + Math.random(), () => {
        // 각각의 run 객체에 대하여
        runs.forEach(({ script, run }) => {
            describe(`Running script: ${script}`, () => {
                it('Script runs well', () => {
                    interpreter.tokenize(script) // script를 토큰화하여 machine에 등록
                    interpreter.run() // script를 실행
                })

                run(machine) // Jest 스크립트를 실행
            })
        })
    })
}

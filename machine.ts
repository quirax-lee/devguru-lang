import Operator from './expression/nonterminal/operator.ts'
import { Checkpoint, Memory, Register } from './expression/terminal.ts'
import logger from './logger.ts'

/**
 * 사용자가 요청한 Memory 및 Checkpoint 등의 인덱스가 1-255를 벗어난 경우 발생
 */
export class IndexOutOfRangeError extends Error {
    constructor() {
        super()
        this.name = 'IndexOutOfRangeError'
        this.message = 'Index of Terminal Expressions within the Machine must be between 1 and 255'
    }
}

/**
 * 현재 Interpreter의 Context를 저장하고 관리하는 클래스
 */
export default class Machine {
    private operator: Operator[] = [] // 현재 입력된 operator들의 목록

    private memory: Memory[] = [] // Memory 객체 배열
    private checkpoint: Checkpoint[] = [] // Checkpoint 객체 배열

    private accumulator: Register = new Register() // 주로 연산이 수행되는 누산기(accumulator) 객체
    private pointer: Register = new Register() // 임의 메모리 위치를 지정하는 포인터(pointer) 객체
    private programCounter: Register = new Register() // 현재 실행중인 operator의 위치를 기억하는 카운터(program counter) 객체

    /**
     * Operator를 목록에 입력
     * @param op 입력할 operator
     */
    public push(op: Operator) {
        logger.trace('Inputting operator %s', op)
        this.operator.push(op)
    }

    /**
     * 다음 operator를 반환
     * @returns 남은 operator가 없으면 undefined, 있으면 그 operator
     */
    public next(): Operator | undefined {
        let p = this.programCounter.get()
        logger.trace('Current PC = %d', p)

        let op = this.operator[p] // operator를 가져옴
        if (op !== undefined) this.programCounter.set(++p) // operator가 있으면 PC를 1 증가
        return op
    }

    /**
     * Machine을 초기화하는 생성자
     */
    public constructor() {
        logger.trace('Initializing machine')

        for (let i = 0; i < 255; i++) {
            // 255개씩 생성 (1-255 사이의 인덱스이므로)
            this.memory.push(new Memory()) // Memory 객체 배열 초기화
            this.checkpoint.push(new Checkpoint()) // Checkpoint 객체 배열 초기화
        }
    }

    /**
     * 지정된 인덱스의 Memory 객체를 반환
     * @param idx 1과 255 사이의 인덱스
     * @returns `idx`에 해당하는 Memory 객체 반환
     * @throws `IndexOutOfRangeError`: `idx`가 지정된 범위를 벗어나면 발생
     */
    public getMemory(idx: number): Memory {
        if (idx < 1 || idx > 255) throw new IndexOutOfRangeError()
        return this.memory[idx - 1]
    }

    /**
     * Accumulator 객체를 반환
     * @returns Accumulator 객체
     */
    public getAccumulator(): Register {
        return this.accumulator
    }

    /**
     * Pointer 객체를 반환
     * @returns Pointer 객체
     */
    public getPointer(): Register {
        return this.pointer
    }

    /**
     * ProgramCounter 객체를 반환
     * @returns ProgramCounter 객체
     */
    public getProgramCounter(): Register {
        return this.programCounter
    }

    /**
     * 지정된 인덱스의 Checkpoint 객체를 반환
     * @param idx 1과 255 사이의 인덱스
     * @returns `idx`에 해당하는 Checkpoint 객체 반환
     * @throws `IndexOutOfRangeError`: `idx`가 지정된 범위를 벗어나면 발생
     */
    public getCheckpoint(idx: number): Checkpoint {
        if (idx < 1 || idx > 255) throw new IndexOutOfRangeError()
        return this.checkpoint[idx - 1]
    }
}

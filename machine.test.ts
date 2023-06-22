import Operator from './expression/nonterminal/operator'
import { Memory } from './expression/terminal'
import Machine, { IndexOutOfRangeError } from './machine'

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //최댓값은 제외, 최솟값은 포함
}

describe('Machine definition', () => {
    let machine = new Machine()

    describe('Operator 객체를 push하는 메소드', () => {
        it('Well done', () => {
            for (let i = 0; i < 5; i++) {
                machine.push(new Operator([i.toString()], machine))
            }
        })

        it('PC = 0', () => {
            expect(machine.getProgramCounter().get()).toBe(0)
        })
    })

    describe('다음 Operator 객체를 받아오는 메소드', () => {
        for (let i = 0; i < 10; i++) {
            describe(`${i + 1}차`, () => {
                let op: Operator | undefined = undefined

                it('Well-done', () => {
                    op = machine.next()
                })
                if (i < 5) {
                    it('return = Operator', () => {
                        expect(op).toBeInstanceOf(Operator)
                    })
                    it(`PC = ${i + 1}`, () => {
                        expect(machine.getProgramCounter().get()).toBe(i + 1)
                    })
                } else {
                    it('return = undefined', () => {
                        expect(op).toBeUndefined()
                    })
                    it('PC = 5', () => {
                        expect(machine.getProgramCounter().get()).toBe(5)
                    })
                }
            })
        }
    })

    describe('Memory test', () => {
        it('M1.get', () => {
            let m = machine.getMemory(1)
            expect(m.get()).toBe(0)
            m.set(1)
        })

        it('M1.set', () => {
            let m = machine.getMemory(1)
            expect(m.get()).toBe(1)
        })

        it('M255.get', () => {
            let m = machine.getMemory(255)
            expect(m.get()).toBe(0)
            m.set(1)
        })

        it('M255.set', () => {
            let m = machine.getMemory(255)
            expect(m.get()).toBe(1)
        })

        it("M256 isn't there", () => {
            try {
                machine.getMemory(256)
                // Fail test if above expression doesn't throw anything.
                expect(true).toBe(false)
            } catch (e) {
                expect(e).toBeInstanceOf(IndexOutOfRangeError)
            }
        })

        it("M0 isn't there", () => {
            try {
                machine.getMemory(0)
                // Fail test if above expression doesn't throw anything.
                expect(true).toBe(false)
            } catch (e) {
                expect(e).toBeInstanceOf(IndexOutOfRangeError)
            }
        })
    })

    describe('Register test', () => {
        it('Acc.get', () => {
            let acc = machine.getAccumulator()
            expect(acc.get()).toBe(0)
            acc.set(1)
        })

        it('Acc.set', () => {
            let acc = machine.getAccumulator()
            expect(acc.get()).toBe(1)
        })

        it('Ptr.get', () => {
            let ptr = machine.getPointer()
            expect(ptr.get()).toBe(0)
            ptr.set(1)
        })

        it('Ptr.set', () => {
            let ptr = machine.getPointer()
            expect(ptr.get()).toBe(1)
        })

        it('PC.get', () => {
            let pc = machine.getProgramCounter()
            expect(pc.get()).toBe(5)
            pc.set(1)
        })

        it('PC.set', () => {
            let pc = machine.getProgramCounter()
            expect(pc.get()).toBe(1)
        })

        it('PC.set', () => {
            let pc = machine.getProgramCounter()
            expect(pc.get()).toBe(1)
        })

        it('Then there is next Operator!', () => {
            expect(machine.next()).toBeInstanceOf(Operator)
        })
    })

    describe('Checkpoint test', () => {
        it('C1.get', () => {
            let c = machine.getCheckpoint(1)
            expect(c.get()).toBe(0)
            c.set(1)
        })

        it('C1.set', () => {
            let c = machine.getCheckpoint(1)
            expect(c.get()).toBe(1)
        })

        it('C255.get', () => {
            let c = machine.getCheckpoint(255)
            expect(c.get()).toBe(0)
            c.set(1)
        })

        it('C255.set', () => {
            let c = machine.getCheckpoint(255)
            expect(c.get()).toBe(1)
        })

        it("C256 isn't there", () => {
            try {
                machine.getCheckpoint(256)
                // Fail test if above expression doesn't throw anything.
                expect(true).toBe(false)
            } catch (e) {
                expect(e).toBeInstanceOf(IndexOutOfRangeError)
            }
        })

        it("C0 isn't there", () => {
            try {
                machine.getCheckpoint(0)
                // Fail test if above expression doesn't throw anything.
                expect(true).toBe(false)
            } catch (e) {
                expect(e).toBeInstanceOf(IndexOutOfRangeError)
            }
        })
    })
})

import test from '../../common/tester'

test([
    {
        script: 'vvvvvgruuuu',
        run: (machine) => {
            it('Acc is 5', () => {
                expect(machine.getAccumulator().get()).toBe(5)
            })
            it('M5 is 5', () => {
                expect(machine.getMemory(4).get()).toBe(5)
            })
        },
    },
    {
        script: 'dddddddd',
        run: (machine) => {
            it('Acc is -3', () => {
                expect(machine.getAccumulator().get()).toBe(-3)
            })
            it('M4 is 5', () => {
                expect(machine.getMemory(4).get()).toBe(5)
            })
        },
    },
    {
        script: 'geuuuu',
        run: (machine) => {
            it('Acc is 5', () => {
                expect(machine.getAccumulator().get()).toBe(5)
            })
            it('M4 is 5', () => {
                expect(machine.getMemory(4).get()).toBe(5)
            })
        },
    },
])

test([
    {
        // Acc < 1일 때, Ptr = 1
        script: 'ddrgu',
        run(machine) {
            it('Acc < 1', () => {
                expect(machine.getAccumulator().get()).toBeLessThan(1)
            })
            it('Ptr == 1', () => {
                expect(machine.getPointer().get()).toBe(1)
            })
        },
    },
    {
        // 1 <= Acc <= 255일 때, Ptr = Acc
        script: 'reu',
        run(machine) {
            it('Acc == 1', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
    {
        // 1 <= Acc <= 255일 때, Ptr = Acc
        script: 'vvvvvvvvvrgu',
        run(machine) {
            it('1 <= Acc <= 255', () => {
                let acc = machine.getAccumulator().get()
                expect(acc).toBeGreaterThanOrEqual(1)
                expect(acc).toBeLessThanOrEqual(255)
            })
            it('Ptr == Acc', () => {
                expect(machine.getPointer().get()).toBe(machine.getAccumulator().get())
            })
        },
    },
    {
        // Acc > 255일 때, Ptr = 255
        script: 'vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv  vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv  vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv vvvvvvvvvv rgu',
        run(machine) {
            it('Acc > 255', () => {
                expect(machine.getAccumulator().get()).toBeGreaterThan(255)
            })
            it('Ptr == 255', () => {
                expect(machine.getPointer().get()).toBe(255)
            })
        },
    },
    {
        // Ptr로 선택된 메모리에 값을 저장
        script: 'reu gru geuu vvvvv rgu vvvvv rguu',
        run(machine) {
            it('Ptr == 5', () => {
                expect(machine.getPointer().get()).toBe(5)
            })
            it('M[Ptr] == 10', () => {
                expect(machine.getMemory(machine.getPointer().get()).get()).toBe(10)
            })
        },
    },
    {
        // Ptr로 선택된 메모리로부터 값을 로드
        script: 'reu dddd rgu reuu',
        run(machine) {
            it('Ptr == 1', () => {
                expect(machine.getPointer().get()).toBe(1)
            })
            it('Acc == 255', () => {
                expect(machine.getAccumulator().get()).toBe(255)
            })
        },
    },
])

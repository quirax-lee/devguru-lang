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
            it('M1 is 5', () => {
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
            it('M1 is 5', () => {
                expect(machine.getMemory(4).get()).toBe(5)
            })
        },
    },
])

test([
    {
        // Acc < 1일 때, Ptr = 1
        script: '',
        run(machine) {},
    },
    {
        // 1 <= Acc <= 255일 때, Ptr = Acc
        script: '',
        run(machine) {},
    },
    {
        // Acc > 255일 때, Ptr = 255
        script: '',
        run(machine) {},
    },
    {
        // Ptr로 선택된 메모리에 값을 저장
        script: '',
        run(machine) {},
    },
    {
        // Ptr로 선택된 메모리로부터 값을 로드
        script: '',
        run(machine) {},
    },
])

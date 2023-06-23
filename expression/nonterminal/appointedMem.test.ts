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

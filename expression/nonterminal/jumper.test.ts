import test from '../../common/tester.ts'

test([
    {
        script: 'v eru d egu gru',
        run(machine) {
            it('M1 == 1', () => {
                expect(machine.getMemory(1).get()).toBe(1)
            })
        },
    },
    {
        script: 'd eruu d eguu gruu',
        run(machine) {
            it('M2 == -1', () => {
                expect(machine.getMemory(2).get()).toBe(-1)
            })
        },
    },
])

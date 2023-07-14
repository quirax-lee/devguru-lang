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

test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        run(machine) {
            it('Acc == 76', () => {
                expect(machine.getAccumulator().get()).toBe(76)
            })
        },
    },
    {
        script: 'egu d eru',
        run(machine) {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
])

test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        run(machine) {
            it('Acc == -26', () => {
                expect(machine.getAccumulator().get()).toBe(-26)
                // expect(machine.getAccumulator().get()).toBe(76)
            })
        },
    },
    {
        script: 'gru gruu egu geu v gru eruu v eruuu eguu geuu d gruu eru v eguuu d',
        run(machine) {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
])

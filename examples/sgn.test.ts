import test from '../common/tester'

const sgn =
    'geuuu eruuuuuu v eru' +
    'eguuuuuu' +
    'gru gruu' +
    'eguuuu' +
    'geu v gru eruuuuu d eruu' +
    'eguuuuu' +
    'geuu d gruu eruuuu v eruuu' +
    'egu d' + // == 0
    'eguu' + // < 0
    'eguuu' // > 0

// Case #1: positive number
test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc > 0', () => {
                expect(machine.getAccumulator().get()).toBeGreaterThan(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 > 0', () => {
                expect(machine.getMemory(3).get()).toBeGreaterThan(0)
            })
        },
    },
    {
        script: sgn,
        run: (machine) => {
            it('Positive number', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

// Case #2: zero
test([
    {
        script: '',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toEqual(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 0', () => {
                expect(machine.getMemory(3).get()).toEqual(0)
            })
        },
    },
    {
        script: sgn,
        run: (machine) => {
            it('Zero', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
])

// Case #3: negative number
test([
    {
        script: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc < 0', () => {
                expect(machine.getAccumulator().get()).toBeLessThanOrEqual(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 < 0', () => {
                expect(machine.getMemory(3).get()).toBeLessThanOrEqual(0)
            })
        },
    },
    {
        script: sgn,
        run: (machine) => {
            it('Negative number', () => {
                expect(machine.getAccumulator().get()).toBe(-1)
            })
        },
    },
])

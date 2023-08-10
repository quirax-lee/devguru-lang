import test from '../common/tester'

const subtract =
    'geuuuu eruuuuuu v eru' +
    'eguuuuuu' +
    'gru gruu' +
    'eguuuu' +
    'geu v gru eruuuuu d eruu' +
    'eguuuuu' +
    'geuu d gruu eruuuu v eruuu' +
    'eguu' + // < 0
    'geuuu gru geuuuu gruu' +
    'eguuuu' +
    'geu v gru' +
    'geuu v gruu' +
    'eruuuu' +
    'v eruuuuu' +
    'eguuu' + // > 0
    'geuuu gru geuuuu gruu' +
    'eguuuu' +
    'geu d gru' +
    'geuu d gruu' +
    'eruuuu' +
    'v eruuuuu' +
    'egu' + // == 0
    'geuuu gru' +
    'eguuuuu' +
    'geu'

// Case #1-1: (+) - (+)
test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 46', () => {
                expect(machine.getAccumulator().get()).toBe(46)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 46', () => {
                expect(machine.getMemory(3).get()).toBe(46)
            })
        },
    },
    {
        script: 'geuuuu vvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 24', () => {
                expect(machine.getAccumulator().get()).toBe(24)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 24', () => {
                expect(machine.getMemory(4).get()).toBe(24)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 46 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(46 - 24)
            })
        },
    },
])

// Case #1-2: (+) - 0
test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 46', () => {
                expect(machine.getAccumulator().get()).toBe(46)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 46', () => {
                expect(machine.getMemory(3).get()).toBe(46)
            })
        },
    },
    {
        script: 'geuuuu',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 0', () => {
                expect(machine.getMemory(4).get()).toBe(0)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 46 - 0', () => {
                expect(machine.getAccumulator().get()).toBe(46 - 0)
            })
        },
    },
])

// Case #1-3: (+) - (-)
test([
    {
        script: 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 46', () => {
                expect(machine.getAccumulator().get()).toBe(46)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 46', () => {
                expect(machine.getMemory(3).get()).toBe(46)
            })
        },
    },
    {
        script: 'geuuuu ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -69', () => {
                expect(machine.getAccumulator().get()).toBe(-69)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == -69', () => {
                expect(machine.getMemory(4).get()).toBe(-69)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 46 - (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(46 - -69)
            })
        },
    },
])

// Case #2-1: 0 - (+)
test([
    {
        script: '',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 0', () => {
                expect(machine.getMemory(3).get()).toBe(0)
            })
        },
    },
    {
        script: 'geuuuu vvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 24', () => {
                expect(machine.getAccumulator().get()).toBe(24)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 24', () => {
                expect(machine.getMemory(4).get()).toBe(24)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 0 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(0 - 24)
            })
        },
    },
])

// Case #2-2: 0 - 0
test([
    {
        script: '',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 0', () => {
                expect(machine.getMemory(3).get()).toBe(0)
            })
        },
    },
    {
        script: 'geuuuu',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 0', () => {
                expect(machine.getMemory(4).get()).toBe(0)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 0 - 0', () => {
                expect(machine.getAccumulator().get()).toBe(0 - 0)
            })
        },
    },
])

// Case #2-3: 0 - (-)
test([
    {
        script: '',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == 0', () => {
                expect(machine.getMemory(3).get()).toBe(0)
            })
        },
    },
    {
        script: 'geuuuu ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -69', () => {
                expect(machine.getAccumulator().get()).toBe(-69)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == -69', () => {
                expect(machine.getMemory(4).get()).toBe(-69)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == 0 - (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(0 - -69)
            })
        },
    },
])

// Case #3-1: (-) - (+)
test([
    {
        script: 'ddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -37', () => {
                expect(machine.getAccumulator().get()).toBe(-37)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == -37', () => {
                expect(machine.getMemory(3).get()).toBe(-37)
            })
        },
    },
    {
        script: 'geuuuu vvvvvvvvvvvvvvvvvvvvvvvv',
        run: (machine) => {
            it('Acc == 24', () => {
                expect(machine.getAccumulator().get()).toBe(24)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 24', () => {
                expect(machine.getMemory(4).get()).toBe(24)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == -37 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(-37 - 24)
            })
        },
    },
])

// Case #3-2: (-) - 0
test([
    {
        script: 'ddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -37', () => {
                expect(machine.getAccumulator().get()).toBe(-37)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == -37', () => {
                expect(machine.getMemory(3).get()).toBe(-37)
            })
        },
    },
    {
        script: 'geuuuu',
        run: (machine) => {
            it('Acc == 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == 0', () => {
                expect(machine.getMemory(4).get()).toBe(0)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == -37 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(-37 - 0)
            })
        },
    },
])

// Case #3-3: (-) - (-)
test([
    {
        script: 'ddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -37', () => {
                expect(machine.getAccumulator().get()).toBe(-37)
            })
        },
    },
    {
        script: 'gruuu',
        run: (machine) => {
            it('M3 == -37', () => {
                expect(machine.getMemory(3).get()).toBe(-37)
            })
        },
    },
    {
        script: 'geuuuu ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        run: (machine) => {
            it('Acc == -69', () => {
                expect(machine.getAccumulator().get()).toBe(-69)
            })
        },
    },
    {
        script: 'gruuuu',
        run: (machine) => {
            it('M4 == -69', () => {
                expect(machine.getMemory(4).get()).toBe(-69)
            })
        },
    },
    {
        script: subtract,
        run: (machine) => {
            it('Acc == (-37) - (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(-37 - -69)
            })
        },
    },
])

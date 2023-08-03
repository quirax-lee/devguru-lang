import test from '../common/tester'

const compare =
    // Calculate M5 - M6
    'geuuuuu gruuu' +
    'geuuuuuu gruuuu' +
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
    'geu' +
    // Compare Acc and 0
    'gruuu' +
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

// Case #1-1: (+) vs (+)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 46', () => {
                expect(machine.getMemory(5).get()).toBe(46)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 24', () => {
                expect(machine.getMemory(6).get()).toBe(24)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('46 > 24', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

// Case #1-2: (+) vs 0
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 46', () => {
                expect(machine.getMemory(5).get()).toBe(46)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 0', () => {
                expect(machine.getMemory(6).get()).toBe(0)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('46 > 0', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

// Case #1-3: (+) vs (-)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 46', () => {
                expect(machine.getMemory(5).get()).toBe(46)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == -69', () => {
                expect(machine.getMemory(6).get()).toBe(-69)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('46 > (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

// Case #2-1: 0 vs (+)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 0', () => {
                expect(machine.getMemory(5).get()).toBe(0)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 24', () => {
                expect(machine.getMemory(6).get()).toBe(24)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == 0 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(-1)
            })
        },
    },
])

// Case #2-2: 0 vs 0
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 0', () => {
                expect(machine.getMemory(5).get()).toBe(0)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 0', () => {
                expect(machine.getMemory(6).get()).toBe(0)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == 0 - 0', () => {
                expect(machine.getAccumulator().get()).toBe(0)
            })
        },
    },
])

// Case #2-3: 0 vs (-)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == 0', () => {
                expect(machine.getMemory(5).get()).toBe(0)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == -69', () => {
                expect(machine.getMemory(6).get()).toBe(-69)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == 0 - (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

// Case #3-1: (-) vs (+)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == -37', () => {
                expect(machine.getMemory(5).get()).toBe(-37)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 24', () => {
                expect(machine.getMemory(6).get()).toBe(24)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == -37 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(-1)
            })
        },
    },
])

// Case #3-2: (-) vs 0
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == -37', () => {
                expect(machine.getMemory(5).get()).toBe(-37)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == 0', () => {
                expect(machine.getMemory(6).get()).toBe(0)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == -37 - 24', () => {
                expect(machine.getAccumulator().get()).toBe(-1)
            })
        },
    },
])

// Case #3-3: (-) vs (-)
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
        script: 'gruuuuu',
        run: (machine) => {
            it('M5 == -37', () => {
                expect(machine.getMemory(5).get()).toBe(-37)
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
        script: 'gruuuuuu',
        run: (machine) => {
            it('M6 == -69', () => {
                expect(machine.getMemory(6).get()).toBe(-69)
            })
        },
    },
    {
        script: compare,
        run: (machine) => {
            it('Acc == (-37) - (-69)', () => {
                expect(machine.getAccumulator().get()).toBe(1)
            })
        },
    },
])

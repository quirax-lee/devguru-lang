import test from '../../common/tester.ts'
import registerOps from './index.ts'

test([
    {
        script: 'vvvvvvvvvvvv',
        run: (machine) => {
            it('Accumulator is 12', () => {
                expect(machine.getAccumulator().get()).toBe(12)
            })
        },
    },
    {
        script: 'vvv',
        run: (machine) => {
            it('Accumulator is 15', () => {
                expect(machine.getAccumulator().get()).toBe(15)
            })
        },
    },
])

test([
    {
        script: 'dddddddd',
        run: (machine) => {
            it('Accumulator is -8', () => {
                expect(machine.getAccumulator().get()).toBe(-8)
            })
        },
    },
    {
        script: 'ddddd',
        run: (machine) => {
            it('Accumulator is -13', () => {
                expect(machine.getAccumulator().get()).toBe(-13)
            })
        },
    },
])

test([
    {
        script: 'vvvvvvvvddddd',
        run: (machine) => {
            it('Accumulator is 3', () => {
                expect(machine.getAccumulator().get()).toBe(3)
            })
        },
    },
    {
        script: 'vvvvvdddddddddd',
        run: (machine) => {
            it('Accumulator is -2', () => {
                expect(machine.getAccumulator().get()).toBe(-2)
            })
        },
    },
])

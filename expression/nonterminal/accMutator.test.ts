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

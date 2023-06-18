import test from './common/tester.ts'

describe('Default test', () => {
    test([
        {
            script: '123123',
            run: (machine) => {
                it('test', () => {
                    expect(machine.getAccumulator().run()).toBe(0)
                })
            },
        },
        {
            script: '456456',
            run: (machine) => {
                it('test', () => {
                    expect(machine.getMemory(1).run()).toBe(0)
                })
            },
        },
    ])
})

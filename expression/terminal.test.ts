import TerminalExpression from './terminal'

describe('TerminalExpression definition', () => {
    let te = new TerminalExpression()

    it('값을 읽는 메소드', () => {
        expect(te.get()).toBe(0)
    })

    it('값을 변경하는 메소드', () => {
        te.set(1)
        expect(te.get()).toBe(1)
    })

    it('값을 실행하는(= 읽는) 메소드', () => {
        expect(te.run()).toBe(1)
    })
})

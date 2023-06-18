import AbstractExpression from './index.ts'

describe('AbstractExpression definition', () => {
    let ae = new AbstractExpression()

    it('일련의 연산을 실행하는 메소드', () => {
        expect(ae.run()).toBe(0)
    })
})

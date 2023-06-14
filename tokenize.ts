import Operation from './operation/index.ts'

function tokenize(script: string) {
    let aa: any[] = [script]
    Operation.getOps().forEach((Op) => {
        aa = aa
            .flatMap((x) => {
                if (typeof x === 'string') {
                    let ab = [...x.matchAll(new RegExp(Op.regexp, 'g'))]
                    return x
                        .split(new RegExp(Op.regexp.split(/\(|\)/).join('')))
                        .flatMap((y, i) => [y, ab[i] ? new Op(ab[i]) : ''])
                } else return [x]
            })
            .filter((x) => typeof x !== 'string' || x !== '')
    })
    return aa.filter((x) => typeof x !== 'string')
}

export default tokenize

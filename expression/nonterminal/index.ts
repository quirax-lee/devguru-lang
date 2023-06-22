import { Increase } from './accMutator.ts'
import Operator from './operator.ts'

export default function registerOps() {
    Operator.register(Increase)
}

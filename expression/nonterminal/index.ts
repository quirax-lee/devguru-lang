import { Decrease, Increase } from './accMutator.ts'
import { AppointedMemLoad, AppointedMemSave } from './appointedMem.ts'
import Operator from './operator.ts'

export default function registerOps() {
    Operator.register(Increase)
    Operator.register(Decrease)
    Operator.register(AppointedMemLoad)
    Operator.register(AppointedMemSave)
}

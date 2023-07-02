import { Decrease, Increase } from './accMutator.ts'
import {
    AppointedMemLoad,
    AppointedMemSave,
    LoadPointer,
    LoadPointeredMemory,
    SavePointeredMemory,
    SetPointer,
} from './memory.ts'
import Operator from './operator.ts'
import { StandardInput, StandardOutput } from './stdio.ts'

export default function registerOps() {
    Operator.register(Increase)
    Operator.register(Decrease)
    Operator.register(AppointedMemLoad)
    Operator.register(AppointedMemSave)
    Operator.register(StandardInput)
    Operator.register(StandardOutput)
    Operator.register(LoadPointeredMemory)
    Operator.register(SavePointeredMemory)
    Operator.register(SetPointer)
    Operator.register(LoadPointer)
}

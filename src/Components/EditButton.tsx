
import type { MyButtonProps } from './Types'

export default function EditButton({ onClick, label = "Edit"} : MyButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            {label}
        </button>
    )
}
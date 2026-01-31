
import type { MyButtonProps } from "./Types";

export default function DeleteButton( { onClick } : MyButtonProps ) {
    return (
        <button type="button" onClick={onClick}>
            Delete
        </button>
    )
}
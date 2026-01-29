import type { ButtonProps } from "react-bootstrap";

export default function DeleteButton( { onClick } : ButtonProps ) {
    return (
        <button type="button" onClick={onClick}>
            Delete
        </button>
    )
}
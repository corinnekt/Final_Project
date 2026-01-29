import type { ButtonProps } from "react-bootstrap";

export default function EditButton({ onClick} : ButtonProps) {
    return (
        <button type="button" onClick={onClick}>
            Edit
        </button>
    )
}
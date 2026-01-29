import { useState } from "react"

export default function Subscribe() {

    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted email: ', email)
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
            <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <button type='submit'>Subscribe</button>
        </form>
        <div>
            this will be a form to subscribe to my blog XP
            <p>
                for this form, I need an input form
            </p>
        </div>
        </>
    )
}
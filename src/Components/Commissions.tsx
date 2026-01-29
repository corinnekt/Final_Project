import { useState } from "react"

export default function() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted email: ', email)
        console.log('Submitted Message: ', message)

        setEmail('')
        setMessage('')
    }

    return (
        <>
        <div>
            This is a form where people can ask to hire me for comission work
        </div>

        <form onSubmit={handleSubmit}>
            <label>
                Email:
            <input
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
            <br></br>
            <label>
                Message:
            <input 
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            </label>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
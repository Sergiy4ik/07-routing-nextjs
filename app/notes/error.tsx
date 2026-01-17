"use client"

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

    console.log(error.message);
    
    return (
        <div>
            <p>Could not fetch the list of notes. {error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}
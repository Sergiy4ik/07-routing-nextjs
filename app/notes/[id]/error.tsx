"use client"

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

    console.log(error.message);
    
    return (
        <div>
            <p>Could not fetch note details. {error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}
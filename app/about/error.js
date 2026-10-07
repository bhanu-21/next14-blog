'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export default function Error({ error, reset }) {
    const router = useRouter();

    useEffect(() => {
        console.error(error)  // Log the error to an error reporting service
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={() => {
                    startTransition(() => {
                        router.refresh()
                        reset()
                    })
                }}>
                Try again
            </button>
        </div>
    )
}
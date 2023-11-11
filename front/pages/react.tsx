import { useEffect, useState } from "react"

export default function MyComponent() {
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        console.log("baba")
    }, [count])

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            {data.map((e) => <div>e</div>)}
        </>
    )
}
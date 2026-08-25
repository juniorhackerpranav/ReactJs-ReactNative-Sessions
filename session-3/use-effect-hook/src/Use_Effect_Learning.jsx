import { useEffect } from 'react';
import { useState } from 'react';


export default function Use_Effect_Learning() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // No dependency array > Runs after every render
    useEffect(() => {
        console.log("Runs after every render");
    });

    // Empty dependency array > Runs only once
    useEffect(() => {
        console.log("Runs only once - Component Mounted");
    }, []);

    // Dependency array with value > Runs when count changes
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div>
            <h2>useEffect Demo</h2>

            {/* Incrementing the counter */}
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <br /><br />
            
            {/* Accepting the name */}
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
        </div>
    );
}

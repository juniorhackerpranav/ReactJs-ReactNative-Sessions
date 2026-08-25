import React, { useEffect, useState } from "react";

// Importing the axios package
import axios from "axios";

export default function Using_Axios() {
    const [username, setUsername] = useState("");
    // Loading state for showing Loading ui
    const [loading, setLoading] = useState(true);

    // using the axios to fetch data
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users/1"
                );

                // directly setting the data to state
                setUsername(response.data.username);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return (
        <div>
            {loading ? <p>Loading...</p> : <h2>{username}</h2>}
        </div>
    );
}
import React, { useEffect, useState } from "react";

export default function Using_Fetch() {
    const [username, setUsername] = useState("");

    // Loading state for showing Loading ui
    const [loading, setLoading] = useState(true);

    // using fetch
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users/1"
                );
                // Converting the response object to json
                const data = await response.json();

                // setting the data to state so we can use it
                setUsername(data.username);
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
            {
                loading
                    ?
                    <p>Loading...</p>
                    :
                    <h2>{username}</h2>
            }
        </div>
    );
}
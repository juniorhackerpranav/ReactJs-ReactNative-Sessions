import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {

    const data = useParams();


    return (
        <div>
            <h3>This is the data get from Dynamic Params : {data.productId}</h3>
        </div>
    )
}
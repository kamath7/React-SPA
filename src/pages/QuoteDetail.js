import React from 'react'
import { useParams } from 'react-router'

const QuoteDetail = () => {
const params = useParams()
    return (
        <React.Fragment>
            <h1>To view single quote</h1>
            <p>{params.quoteId}</p>

        </React.Fragment>
    )
}

export default QuoteDetail

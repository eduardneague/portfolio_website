import React from 'react'
import {useRouteError} from 'react-router'

const WentWrong: React.FC = (): JSX.Element => {
    const error = useRouteError()

    return (
        <div>
            <h1>Something went wrong...</h1>
            <h2> {`${error}`} </h2>
        </div>
    )
}

export default WentWrong
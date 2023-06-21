import React from 'react'
import {useRouteError} from 'react-router'

const WentWrong: React.FC = (): JSX.Element => {
    const error: any = useRouteError()
    
    return (
        <div>
            <h1>Something went wrong...</h1>
            {error.data}
        </div>
    )
}

export default WentWrong
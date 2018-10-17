import React from 'react'

export default (props) => {
    console.log(props)
    return (
        <div>
            Editing the espense with id of { props.match.params.id }
        </div>
    )
}
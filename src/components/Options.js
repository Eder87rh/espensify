import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}>RemoveAll</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        { 
            props.options.map((option,index) => (
                <Option 
                    option={option} 
                    key={index}
                    handleDeleteOption={props.handleDeleteOption}/>
            )) 
        }
    </div>
)

export default Options
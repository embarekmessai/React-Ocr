import React from 'react';

const TextView = (props) => {
    console.log(props)
    return (
        <div>
            <span> Text Rendu </span>
            <div>
                <textarea name="text" id="textId" cols="60" rows="20" value={props.textL}>
                   
                </textarea>
            </div>
        </div>
    );
};

export default TextView;
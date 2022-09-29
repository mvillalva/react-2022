import React from 'react'

export default function Movies(props) {
    const myDataList = props.data.map((e) => <h2>{e}</h2>);  
    
    return( 
        <>
            {myDataList}
        </>
    )
}
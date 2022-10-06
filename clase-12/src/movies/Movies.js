import React from 'react'

export default function Movies(props) {
    const myDataList = props.data.map((e) => <h2>{e}</h2>);  

    const transformedChildren = props.children.map(e => <ul><li>{e}</li></ul>)
    
    return( 
        <>
            {myDataList}
            {transformedChildren}
        </>
    )
}
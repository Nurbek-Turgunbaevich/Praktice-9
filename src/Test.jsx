import React from 'react'

const Test = (props) => {
    // const color = 'green'
  return (
    <div style={{backgroundColor: 'grren'}}>
        <h1 style={{color: 'cyan'}}>{props.title}</h1>
        <h1 style={{color: 'darkblue'}}>{props.price}-som</h1>
        <h1 style={{color: 'green'}}>{props.date === '2023' ? props.date : `${'2023'- props.date}-years`}</h1>
        {/* <h1>{props.id}</h1> */}
        {/* <h2>DDDDDD</h2> */}
    </div>
  )
}

export default Test
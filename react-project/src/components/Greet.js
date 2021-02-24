//functional components
import React from 'react'


//function Greet(){
   // return <h1>Hello Eve</h1>
//}

//const Greet = () => <h1>Hello Eve</h1>
const Greet = () =>{
   // return(
    //    <div className='dummyClass'>

    //    <h1>Hello Eve</h1>

    //    </div>
    //)

    return React.createElement(
        'div',
        {id : 'hello' , className:'dummyClass'}, 
        React.createElement('h1',null,'hello react')
    )
}

export default Greet
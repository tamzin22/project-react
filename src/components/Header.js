//functional components
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'



//function Greet(){
   // return <h1>Hello Eve</h1>
//}

//const Greet = () => <h1>Hello Eve</h1>
//const Greet = () =>{
   // return(
    //    <div className='dummyClass'>

    //    <h1>Hello Eve</h1>

    //    </div>
    //)

   // return React.createElement(
    //    'div',
    //    {id : 'hello' , className:'dummyClass'}, 
    //    React.createElement('h1',null,'hello react')
    //)
//}

const Header = ({ title }) => {
    const onClick = () =>{
        console.log('Click')
    }
 return(
     <header className ='header'>
         <h1>{title}</h1>
         <Button color='green' text ='Add' onClick = {onClick}/>
     </header>
 )
}
Header.defaultProps = {
    title : 'Task Tracker',
}
// const headingStyle = {
//     color : 'white',
//     backgroundColor :'brown'
// }

Header.prototype = {
    title : PropTypes.string
}

export default Header
import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {ADDTODO} from '../redux/aciton/actionType'


function Addtodo({ADDTODO}) {
const [text , setText] = useState("")
const HandleSubmite = (e)=>{
    e.preventDefault()
    const newtodo ={
        text : text ,
        id : Math.random()
    }
    ADDTODO( newtodo)
    setText('')
}
    return (
        <div>
            <form onSubmit={HandleSubmite}>
            <input type='text'  placeholder=" enter your new task"
            value={text}
            onChange={e=>setText(e.target.value)} 
            />
            <button type="submit"  > Add your task</button>
            </form>
        </div>
    )
}
export default connect (null , {ADDTODO}) (Addtodo)



// import React,{useState} from 'react'
// import {connect} from 'react-redux'
// import {ADDTODO} from '../redux/aciton/actionType'
//  function Addtodo( {ADDTODO}) {
//      const [text , setText] =  useState('')

//      const HandleSubmit = (e) =>{
//         e.preventDefault()
//         const newtodo = {id : Math.random ,
//         text : text}
//         ADDTODO(newtodo)
//      }
//     return (
//         <div>
//             <input type='text' 
//             value={text}
//             onChange={(e)=> setText(e.target.value)}/>
//             <button onClick={HandleSubmit}>add</button>
//         </div>
//     )
// }

// export default connect(null , {ADDTODO} )(Addtodo)
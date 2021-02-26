// import { addtodo , updatetodo , deletetodo} from '../aciton/action'

// const initialstate = {
//     todo : [{ text:"Learn React-redux", id:0 }]
// }



// export default function reducer(state = initialstate , action) {

//     switch(action.type)
//     {
//         case addtodo :
//             return (
//                 {
//                   ...state ,  todo : [...state.todo , action.payload] 
//                 }  
//             )
//         case deletetodo :
//             return (
//                 { 
//                     ...state , todo : state.todo.filter((el )=> el.id !== action.payload)
//                 }
//             ) 
            
//         case updatetodo : 
//         return  (
//             {
//                 ...state , todo : state.todo.map((el )=> el.id === action.payload.id ? action.payload : el )
//             }
//         )  

//         default : 
//         return state
//     }
    
// }


import React from 'react'
import {addtodo , updatetodo  , deletetodo} from '../aciton/action'

const initialstate={
    todo :[{
        id : 0 ,
        text : "learn-react-redux"
    }]
}
export default function reducer(state=initialstate , action) {
    

    switch ( action.type) {
        case addtodo:
            return {
                ...state , todo : [...state.todo , action.payload ]
            }
        case deletetodo :
            return {
                ...state , todo : state.todo.filter(el =>el.id !== action.payload)
            }
        case updatetodo :
            return {
                ...state , todo : state.todo.map(el => el.id === action.payload.id ? action.payload : el )
            } 

        default :
           return state 
    }
}
 
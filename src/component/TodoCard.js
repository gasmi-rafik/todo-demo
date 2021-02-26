//  import React from 'react'
//  import {connect} from 'react-redux'
//  import { DELETETODO} from '../redux/aciton/actionType'
// import EditTodo from './EditTodo'
//  function TodoCard({todo , DELETETODO}) {
//      return (
//          <div>
//              <p>{todo.text}</p>
             
//              <EditTodo todotext={todo}/>
//              <button onClick={()=>DELETETODO(todo.id)}>Delete</button>
//          </div>
//      )
//  }
 
//  export default connect(null , { DELETETODO}) (TodoCard)

import React from 'react'
import {connect} from 'react-redux'
import { DELETETODO} from '../redux/aciton/actionType'
import EditTodo from './EditTodo'
 function TodoCard({todo , DELETETODO}) {
    return (
        <div>
            <p>{todo.text}</p>
            <EditTodo todotext={todo}/>
            <button onClick={()=>DELETETODO(todo.id)}>delete</button>
        </div>
    )
}
export default connect (null ,{DELETETODO})(TodoCard)
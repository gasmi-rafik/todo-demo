// import React from 'react'
// import {connect} from 'react-redux'
// import TodoCard from './TodoCard'

//  function TodoList({todoList }) {
//     return (
//         <div>
//      {
//          todoList.map((el )=>(
            
//              <TodoCard key={el.id} todo={el} />
             
//          ))
//      } 
//         </div>
//     )
// } ;

// const mapStateToProps = (state) => ({
//     todoList : state.todo ,
// })


// export default connect( mapStateToProps ) (TodoList )

import React from 'react'
import {connect} from 'react-redux'

import TodoCard from './TodoCard'
 function TodoList({todolist}) {
    return (
        <div>
            {
              todolist.map(el =>
                <TodoCard key={el.id} todo={el}/>)
            }
        </div>
    )
}
const mapStateToProps =(state) => {
  return {
      todolist : state.todo
  }
}
export default connect (mapStateToProps)(TodoList)
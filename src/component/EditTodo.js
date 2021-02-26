// import React,{Fragment , useState} from 'react'
// import Modal from 'react-modal'
// import {connect } from 'react-redux'
// import {UPDATETODO} from '../redux/aciton/actionType'



// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//       background :"pink"

//     }
//   };

// Modal.setAppElement("#root")


//  function EditTodo({todotext , UPDATETODO}) {
    
    
//     const [show , setShow] = useState (false)
//     const toggleModal = ()=> setShow(!show);
//     const[text , setText] = useState(todotext.text)



//     const  HandleSubmit =(e)=>{
//         e.preventDefault()
//         const newtodo ={...todotext , text : text}
//         UPDATETODO(newtodo)
//         }
//     return (
     
//             <Fragment>
//                 <button onClick={toggleModal}>edit</button>
//                 <Modal
//                  isOpen={show}
               
//                  onRequestClose={toggleModal}
//                  style={customStyles}
                
//                  >
//                     <form onSubmit={HandleSubmit} >
//                        <input type ='text' value ={text} onChange={(e)=>setText( e.target.value)}/>
//                        <button type='submit' > confirm</button>
//                        <button onClick={toggleModal}>cancel</button>
//                     </form>
//                 </Modal>
//             </Fragment>
       
//     )
// }

// export default connect(null , {UPDATETODO}) (EditTodo)

import React,{Fragment , useState} from 'react'
import Modal from 'react-modal'
import {connect } from 'react-redux'
import {UPDATETODO} from '../redux/aciton/actionType'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


 function EditTodo({todotext , UPDATETODO}) {
   const [text , setText] =useState (todotext.text)
   const [show , setShow] = useState(false)
   const toggleModal = ()=> setShow(!show); 


   const HandleSubmit =(e)=>{
     e.preventDefault()
     const newtodo = { ...todotext , text : text}
     UPDATETODO(newtodo)
   }
  return (
    
    <Fragment>
    <button onClick={toggleModal}>edit</button>
     <Modal 
     style={customStyles}
     onRequestClose={toggleModal}
     isOpen={show}>
       <input type="text"
       value={text} 
       onChange={(e)=>setText(e.target.value)}/>
       <button onClick={HandleSubmit}>add</button>
       <button onClick={ toggleModal}>cancel</button>
     </Modal>
    </Fragment>
    
  )
}

export default connect(null ,{UPDATETODO})(EditTodo)

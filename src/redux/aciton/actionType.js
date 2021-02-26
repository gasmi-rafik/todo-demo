import {addtodo , updatetodo , deletetodo} from './action'

export const ADDTODO =(newtodo) =>{
// newtodo = {text , id , iscomplete}
    return ({
        type : addtodo ,
        payload : newtodo
    })
}

export const UPDATETODO =(editedtask )=>{
    return ({
        type : updatetodo ,
        payload : editedtask
    })
}

export const DELETETODO =(id)=>{
    return ({
        type : deletetodo ,
        payload : id,
    })
}
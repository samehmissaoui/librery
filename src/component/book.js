import { useState } from "react"
import { connect } from "react-redux"
import {buyBook,sellBook} from '../js/actions/bookActions'

const Book =(props) =>{
const [number,setNumber]= useState(1)

return (

    <>
    <h1> number of book : {props.book} </h1>
    <input  type="number" value={number}  onChange= {(e)=>setNumber(e.target.value)} ></input>
    <button onClick={()=>props.addBook(number)}>buy book</button>
    <button onClick={()=>props.removeBook(number)}>sell book</button>

    
    </>
)

}

const mapStateToProps=(state)=>{
    
    return {
        book:state.book.numberOfBook
    }
}
const mapDispatchProps =(dispatch) =>{
return {
  addBook : (number)=>dispatch(buyBook(number)),
  removeBook : (number)=>dispatch(sellBook(number))
}

}
export default connect(mapStateToProps,mapDispatchProps)(Book)
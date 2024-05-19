import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {

const inputElement=useRef();

const dispatch = useDispatch()

const handleIncrement = () => {
dispatch({
    type:"Increment"
})
}
const handleDecrement = () => {
dispatch({
    type:"Decrement"
})
}

const handleAdd= (num) =>{
    console.log("button Clicked")
    dispatch({
        type: 'ADD',
        payload:{
            num:inputElement.current.value,
        }
    });
    inputElement.current.value="";
}

const handleSubtract= () =>{
    dispatch({
        type: 'SUBTRACT',
        payload:{
            num:inputElement.current.value,
        }
    });
    inputElement.current.value="";

}

const handlePrivactToggle= () =>{
    dispatch({
        type:"HANDLEPRIVACYBUTTON"
    })

}


    return(
<>
<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
<button type="button" className="btn btn-primary" onClick={handleIncrement}>+1
</button>
<button type="button" className="btn btn-success" onClick={handleDecrement}>-1
</button>
<button type="button" className="btn btn-warning" onClick={handlePrivactToggle}>Privacy Toggle</button>
</div>

<div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">

<input type="text" className="number-input"  ref= {inputElement} placeholder="Enter Number" />  
<button
 type="button" className="btn btn-info" onClick={handleAdd}>Add
</button>

<button
 type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract
</button>
</div>



</>
    )
}
export default Controls;
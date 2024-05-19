import { useSelector } from "react-redux"

const DisplayCounter = () => {
 const counter =    useSelector(value=> value.counter)
    return(
        <>
        
        <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Counter Current Value: {counter}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      </div>
    </div>
        
        </>
    )
}

export default DisplayCounter
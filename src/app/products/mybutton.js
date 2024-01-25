
const mybutton = ({price}) => {
  return (
    <button onClick={()=>alert(`${"Rs. "}${price}`)} className="btn btn-primary">Check Price</button>
  )
}

export default mybutton


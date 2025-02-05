const AppleBasket = (props) => {
    const{appleCount,basketName}=props
    return (
        <div>
            <h3><span>{appleCount}</span></h3>
            <p>{basketName}</p>
        </div>

)
}
export default AppleBasket
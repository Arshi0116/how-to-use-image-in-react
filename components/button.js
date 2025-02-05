const Button = (props) => {
    const{buttonImg, onClick,title}=props
    return (
    <img title={title} onClick={onClick} className="img" src={buttonImg} alt="img" />
)
}
export default Button

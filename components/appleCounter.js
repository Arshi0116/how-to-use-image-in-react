
import Button from './button'
import rightImg from '../assets/png-transparent-green-arrow-computer-icons-left-arrow-angle-text-rectangle-thumbnail.png'
import leftImg from '../assets/left image.png'
import AppleBasket from "./AppleBasket"
import './appleCounter.css'

const AppleCounter = () => {
    const totalApple=10
    let rightApple=0
    let leftApple=totalApple-rightApple
    function leftclick(){
        leftApple--
        rightApple++
        

    }
    function rightclick(){
        leftApple++
        rightApple--
    }
    return (
        <section>
            <AppleBasket appleCount={10} basketName='basket-1'/>
            <Button onClick={()=>{leftclick()}} title={'left button'} buttonImg={leftImg} />
            <Button onClick={()=>{rightclick()}} title={'right button'} buttonImg={rightImg} />
            <AppleBasket appleCount={0} basketName='basket-2'/>
        </section>
      )
     }

export default AppleCounter
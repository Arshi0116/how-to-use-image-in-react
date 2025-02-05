
import Button from './button'
import rightImg from '../assets/png-transparent-green-arrow-computer-icons-left-arrow-angle-text-rectangle-thumbnail.png'
import leftImg from '../assets/left image.png'
import AppleBasket from "./AppleBasket"
import './appleCounter.css'

const AppleCounter = () => {
    return (
        <section>
            <AppleBasket appleCount={10} basketName='basket-1'/>
            <Button buttonImg={leftImg} />
            <Button buttonImg={rightImg} />
            <AppleBasket appleCount={0} basketName='basket-2'/>
        </section>
      )
     }

export default AppleCounter
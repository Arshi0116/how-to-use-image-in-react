import React from 'react'
import Button from './button'
import rightImg from '../assets/png-transparent-green-arrow-computer-icons-left-arrow-angle-text-rectangle-thumbnail.png'
import leftImg from '../assets/left image.png'
import AppleBasket from "./AppleBasket"
import './appleCounter.css'
import { useState } from 'react'

const AppleCounter = () => {
    const totalApple=10
    let [rightApple,setrightApple]=useState(0)
    let [leftApple,setleftApple]=useState(totalApple-rightApple)
    function leftclick(){
        if(rightApple>0){
            console.log("jisjk");
            setleftApple(leftApple+1)
            setrightApple(rightApple-1)
        }

    }
    function rightclick(){
        if(leftApple>0){
            setleftApple(leftApple-1)
            setrightApple(rightApple+1)
        }
    }
    return (
        <section>
            <AppleBasket appleCount={leftApple} basketName='basket-1'/>
            <Button onClick={()=>{leftclick()}} title={'left button'} buttonImg={leftImg} />
            <Button onClick={()=>{rightclick}} title={'right button'} buttonImg={rightImg} />
            <AppleBasket appleCount={rightApple} basketName='basket-2'/>
        </section>
    )
    }

export default AppleCounter
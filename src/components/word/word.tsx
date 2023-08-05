import { memo, useEffect, useState,useRef } from 'react'
import './word.scss' ;
interface contentRecive {
    name : string ,
    content : string ,
    funcSetNumb : React.Dispatch<React.SetStateAction<number>> 
    setWinLoose : React.Dispatch<React.SetStateAction<boolean>> 
}

function Word(props:contentRecive) {
    let [countdown,setCountdown] = useState<number>(-2) ;
        let errorRef = useRef<HTMLDivElement>(null)
    let lenWord:number = props.name.length ;
    const [word,setWord] = useState<string>(' '.repeat(lenWord))
    function findStringPositions(longString:string, searchString:string):number[] {
        const positions:number[] = [];
        for(let i=0;i<longString.length;i++) {
            if(longString.split('')[i]===searchString) {
                positions.push(i) ;
            }
        }
        return positions;
    }
    useEffect( () => {
        if( !word.includes(' ') ) props.setWinLoose(true) ;
        if(countdown!==6) {
            let arr:number[] = findStringPositions(props.name,props.content) ;
            if(arr.length===0 && word.includes(" ")) {
                setCountdown( state => ++state)
                props.funcSetNumb(countdown) ;
            } ;
            let arrOfString:string[] = word.split('') ;
            for(const i of arr) { 
                arrOfString[i] = props.content ;
            }   
            setWord(arrOfString.join('')) 
    }},[props.content])
    useEffect( () => {
        if( countdown==6 && word.indexOf(' ')>=0 ) {
            setWord(props.name) ;
            errorRef.current?.querySelectorAll('.content').forEach( (elem:Element) => {
                elem.classList.add('font-color-red') ;
            })
        }
    },[countdown])
    useEffect( () => {
        if( !word.includes(' ') && countdown !== 6) props.setWinLoose(true) ;
    },[word])
    const checkLenWord = (content:string) => {
        let arr:string[] = content.split('') ;
        return arr.map( (elem:string,pos:number) => {
            return <div className='content' key={pos}>{elem}</div>
        })
    }
    return <>
        <div className='word' ref={errorRef}>
            { checkLenWord(word) } 
        </div>   
    </>
}
export default memo(Word)
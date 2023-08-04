import './keyboard.scss' ;
const keyboard:string[] = "abcdefghijklmnopqrstuvwxyz".split('') ;
interface reactSetStateFunction {
    addData : React.Dispatch<React.SetStateAction<string>>
}
export default function Keyboard(props:reactSetStateFunction) {
    const setDataFunc = (content:string):void => {
        props.addData(content)
    }
    return <div className="keyboard">
        { keyboard.map( (elem:string,pos:number) => {
            return <button className="keyboardButton" key={pos} onClick={ (e) => {
                e.preventDefault() ;
                setDataFunc(elem) ;
            }}>{elem}</button>
        })}
    </div>
}

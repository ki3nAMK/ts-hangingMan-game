import { memo } from 'react'
import './theHangingMan.scss'

interface MyComponentProps {
    numbHanging: number;
}

function TheHangingMan(props:MyComponentProps) {
    return <>
        <div className="theHangingMan">
            <div className="theHanging">
                <div className='stick4'></div>
                <div className='stick3'></div>
                <div className='stick2'></div>
                <div className='stick1'></div>
            </div>
            <div className="man">
                {props.numbHanging >= 0 && <div className='head'></div>}
                {props.numbHanging >= 1 && <div className='body'></div>}
                {props.numbHanging >= 2 && <div className='leftHand'></div>}
                {props.numbHanging >= 3 && <div className='rightHand'></div>}
                {props.numbHanging >= 4 && <div className='leftLeg'></div>}
                {props.numbHanging >= 5 && <div className='rightLeg'></div>}
            </div>
        </div>
    </>
}
export default memo(TheHangingMan)
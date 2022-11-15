
import classNames from 'classnames/bind'
import styles from './Contents.module.scss'
import { useState,useRef,useImperativeHandle, forwardRef } from "react"

let cx = classNames.bind(styles)
const LabelBar = ({attribute_name,labels,init_index=0},_ref) => {
    const [state,setState] = useState(init_index)
    // useImperativeHandle(_ref,()=>{
    //     getChildState:()=>{
    //         return state;
    //     }

    // })
    return (
        <div key={attribute_name} className={cx('labebar--wrapper')} ref={_ref} state={state}>
            <span className={cx('title')}>{attribute_name}</span>
            <ul className={cx('labebar--list')}>
            {
                labels.map((element,index_of)=>{return (
                    <li key={index_of} className="container_checkbox">
                        <span>{element}</span>
                        <input type="radio" 
                            id={index_of} 
                            checked={state==index_of}
                            onChange={(e)=>{
                                setState(index_of)
                            }}/>
                    </li>

            )})
            }
            </ul>
            
        </div>
    )
}

export default forwardRef(LabelBar)
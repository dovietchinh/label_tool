
import styles from './Contents.module.scss'
import classNames from 'classnames/bind'
import React, {useState,useContext, useRef, useEffect, useMemo, useImperativeHandle} from 'react'
import {globalContext} from '~/GlobalContext'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {forwardRef} from 'react'
import LabelBar from './LabelBar'
let cx = classNames.bind(styles)

var Tasks = {
    'task_1':[
        './val2017/000000418959.jpg',
        './val2017/000000276707.jpg',
        './val2017/000000114871.jpg',
        './val2017/000000008844.jpg',
        './val2017/000000025394.jpg',
        './val2017/000000260266.jpg',
        './val2017/000000551820.jpg',
        './val2017/000000389109.jpg',
        './val2017/000000129113.jpg',
        './val2017/000000292488.jpg',
        './val2017/000000317433.jpg',
        './val2017/000000576566.jpg',
        './val2017/000000460929.jpg',
        './val2017/000000177861.jpg',
        './val2017/000000328430.jpg',
        './val2017/000000079837.jpg',
        './val2017/000000289702.jpg',
        './val2017/000000497599.jpg',
        './val2017/000000539883.jpg',
    ],
    'task_2':[
        'val2017/000000379453.jpg',
    ]
}


function Contents(){
    let context = useContext(globalContext)
    const [index,setIndex] = useState(0)
    const [lbChecked, setLbChecked] = useState(false)
    let task = context.task[0]
    let src = useRef(Tasks[task][index])
    
    // let api = src.replace('')
    // fetch(`127.0.0.1:8089/${src}`)
    //     .then((res)=>{
    //         return res.json()
    //     })
    //     .then((data)=>{
            
    //     })
    //     .catch((data)=>{
    //         alert(error)
    //     })

        
        
    const ref_attribute2 = useRef({
        'age':0,
        'gender':0,
        'ub_length':0,
        'lb_length':0,
    })

    const age = useRef(null)
    const gender = useRef(null)
    const ub_length = useRef(null)
    const lb_length = useRef(null)
    const quality = useRef(null)

    

    


    
    const [data,setData] = useState(Tasks[task])

    const handleOnClickNext = (e) => {
        console.log(index,data.length)
        setIndex((pre)=>{
            return Math.min(Math.max(pre+1,0),data.length - 1)
        })
    }
    const [progress,setProgress] = useState(0)
    useEffect(()=>{
        let temp = parseInt(index/data.length * 100)
        setProgress(temp)
    },[index])
    const handleOnClickBack = (e) => {
        console.log(index,data.length)
        setIndex((pre)=>{
            return Math.min(Math.max(pre-1,0),data.length - 1)
        })
    }
    const handleOnClickSave = (e)=>{
        console.log(age.current.getAttribute('state'))
        console.log(gender.current.getAttribute('state'))
        console.log(ub_length.current.getAttribute('state'))
        console.log(lb_length.current.getAttribute('state'))
        console.log(quality.current.getAttribute('state'))


        let postOption = {
            method : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example'})
        }
        fetch('http://127.0.0.1:8089',postOption)
            .then((res)=>{return res.json()})
            .then((data)=>{alert('save successfully!')})
            .catch(()=>{alert('can not save!')})
    }
    
    useEffect(()=>{
        src.current = Tasks[task][index]
        let canvas = document.getElementById("canvas");
        let pic = new Image(); 
        pic.src = src.current; 
        pic.onload = function() {
            // canvas.width = pic.width;
            // canvas.height = pic.height;
            canvas.width = 500
            canvas.height = 500
            var ctx = canvas.getContext("2d");
            ctx.drawImage(pic, 0, 0,canvas.width,canvas.height);
        }
        let c = canvas.getContext('2d');
        let p = c.getImageData(7, 7, 1, 1).data;
        let hex = "RGB = " + p[0]+", "+p[1]+", "+p[2];
    },[index])

    function handleClick(e){
        
        let canvas = document.getElementById("canvas")
        let ctx = canvas.getContext("2d")
        const bounding = canvas.getBoundingClientRect();
        const x = e.clientX - bounding.left;
        const y = e.clientY - bounding.top;
        
        console.log(x,y)
        
        let data = ctx.getImageData(x, y, 1, 1).data;
        const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
        // let lb_color = document.getElementById("lb_color--input")
        let square
        if (lbChecked){
            square = document.getElementById("lb_color--square")
        }
        else{
            square = document.getElementById("ub_color--square")
        }
        square.style.background = rgba
    }
    return (
        <div className={cx('wrapper-all')}>
        <div className={cx('content')}>
            <div className={cx('view')}>
                <div className={cx('button')}>
                    <button onClick={handleOnClickNext}>Next</button>
                    <button onClick={handleOnClickBack}>Back</button>
                    <button onClick={handleOnClickSave}>Save</button>
                </div>
                <div className={cx('imgview')} >      
                    <canvas id="canvas" onClick={handleClick} />
                </div>
            </div>
            <div className={cx('labels')}>
                <div className={cx('color_label')}>
                    <div className={cx('ub_color','color_label--item')}>
                        <span>ub_color</span>
                        <input type='radio'
                            checked={!lbChecked}
                            onChange={()=>{
                                setLbChecked(false)
                            }}
                        />
                        <div className={cx('color_label--square',)} id="ub_color--square"></div>
                    </div>
                    <div className={cx('lb_color','color_label--item')}>
                        <span>lb_color</span>
                        <input type='radio' 
                            id="lb_color--input" 
                            checked={lbChecked}
                            onChange={()=>{
                                setLbChecked(true)
                            }}
                            
                        />
                        <div className={cx('color_label--square')} id="lb_color--square"></div>
                    </div>
                </div>
                <div className={cx('attribute')}>
                    <LabelBar labels={["child","adult"]} attribute_name='age' ref={age}/>
                    <LabelBar labels={["female","male"]} attribute_name='gender' ref={gender}/>
                    <LabelBar labels={["short","long"]} attribute_name='ub_length' ref={ub_length}/>
                    <LabelBar labels={["short","long"]} attribute_name='lb_length' ref={lb_length} />
                    <LabelBar labels={["bad","good"]} attribute_name='quality' ref={quality} />
                </div> 
            </div>
            
        </div>
        <div className={cx("w3-light-grey","my_progressbar")}>
            <div className={cx("w3-blue",'progress-text')} style={{
                "width": progress + "%",
                "color": "rgb(0,0,0)",
                "textAlign": "center"
            }}>{`${index+1}/${data.length}`}</div>
        </div>
        </div>
    )
}

export default Contents
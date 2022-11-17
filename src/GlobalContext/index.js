import {useState, useEffect,createContext} from 'react'
import Config from '~/Config'
const globalContext = createContext()

function GlobalProvider({children}){
    const [index,setIndex] = useState(0)
    const [index2,setIndex2] = useState(0)
    const [pathImg, setPathImg] = useState([])
    const [modalVisible,setModalVisible] = useState("none")
    const [text,setText] = useState("LOGIN")
    const [imagesList,setImagesList] = useState([])
    const [taskNames,setTasksNames] = useState([])
    const [activeTask,setActiveTask] = useState('VCR_HMAT_test_age2')
    // const [taskNames,setTasksNames] = useState(x)
    // const [activeTask,setActiveTask] = useState(x[0])
    let x 
    useEffect(()=>{
    fetch(Config.BACKEND+'/api/v1/listTasks')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setTasksNames(data.task_names)
            setActiveTask(data.task_names[0])
            
            return fetch(Config.BACKEND +`/api/v1/${data.task_names[0]}`)
        })
        .then(res=>res.json())
        .then((data)=>{
            setImagesList(data.listImages)
        })
        .catch((error)=>{
            alert('error at fetching list Tasks!!')
        })
    },[])
    // useEffect(()=>{
    //     fetch(`http://10.124.64.125:8089/api/v1/${activeTask}`)
    //         .then(res=>res.json())
    //         .then((data)=>{
    //             setImagesList(data.listImages)
    //         })
    //         // .catch((error)=>{
    //         //     alert('error at fetching list Tasks!!')
    //         // })
    // },[activeTask])
    

    let value = {
        index:[index,setIndex],
        pathImg:[pathImg,setPathImg],
        task:[taskNames,setTasksNames],
        modal: [modalVisible,setModalVisible],
        text : [text,setText],
        imagesList: [imagesList,setImagesList],
        activeTask: [activeTask,setActiveTask],
        index2:[index2,setIndex2]
    }
    // useEffect(()=>{

    // })
    console.log('rendder in global context')
    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export {globalContext, GlobalProvider}
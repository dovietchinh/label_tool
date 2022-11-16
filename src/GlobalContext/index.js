import {useState, createContext} from 'react'

const globalContext = createContext()

function GlobalProvider({children}){
    const [index,setIndex] = useState(0)
    const [pathImg, setPathImg] = useState([])
    const [modalVisible,setModalVisible] = useState("none")
    const [text,setText] = useState("LOGIN")
    const [taskNames,setTasksNames] = useState([])
    const [activeTask,setActiveTask] = useState('')
    const [imagesList,setImagesList] = useState([])
    fetch('http://123.24.160.3/api/v1/listTasks')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
            setTasksNames(data.task_names)
            setActiveTask(data.task_names[0])
            alert('set ')
            return data
            // return fetch(`http://10.124.64.125:8089/api/v1/${data.task_names[0]}`)
        })
        
        .catch((error)=>{
            alert('error at fetching list Tasks!!')
        })
    fetch(`http://http://123.24.160.3//api/v1/body_part_detection_v1_task_0000`)
        .then(res=>res.json())
        .then((data)=>{
            setImagesList(data.listImages)
        })
        .catch((error)=>{
            alert('error at fetching list Tasks2!!')
        })


    let value = {
        index:[index,setIndex],
        pathImg:[pathImg,setPathImg],
        task:[taskNames,setTasksNames],
        modal: [modalVisible,setModalVisible],
        text : [text,setText],
        imagesList: [imagesList,setImagesList],
        activeTask: [activeTask,setActiveTask]
    }
    console.log('rendder in global context')
    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export {globalContext, GlobalProvider}
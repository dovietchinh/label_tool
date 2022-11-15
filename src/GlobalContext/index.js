import {useState, createContext} from 'react'

const globalContext = createContext()

function GlobalProvider({children}){
    const [index,setIndex] = useState(0)
    const [pathImg, setPathImg] = useState([])
    const [currentTask,setCurrentTask] = useState('task_1')
    const [modalVisible,setModalVisible] = useState("none")
    const [text,setText] = useState("LOGIN")
    let Tasks 
    fetch('')



    let value = {
        index:[index,setIndex],
        pathImg:[pathImg,setPathImg],
        task:[task,setTask],
        modal: [modalVisible,setModalVisible],
        text : [text,setText]
    }
    console.log('rendder in global context')
    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export {globalContext, GlobalProvider}
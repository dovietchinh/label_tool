import {useState, createContext} from 'react'

const globalContext = createContext()

function GlobalProvider({children}){


    const [index,setIndex] = useState(0)
    const [pathImg, setPathImg] = useState([])
    const [task,setTask] = useState('task_1')
    let value = {
        index:[index,setIndex],
        pathImg:[pathImg,setPathImg],
        task:[task,setTask]
    }
    console.log('rendder in global context')
    return (
        <globalContext.Provider value={value}>
            {children}
        </globalContext.Provider>
    )
}

export {globalContext, GlobalProvider}
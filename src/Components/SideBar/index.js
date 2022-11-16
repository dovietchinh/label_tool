import images from '~/assets/images'
import styles from './SideBar.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import {globalContext} from '~/GlobalContext'
let cx = classNames.bind(styles)

function SideBar(){
    let context = useContext(globalContext)

    const [taskNames,setTasksName] = context.task
    const handleOnclick = (e)=>{
        console.log(e.target.text)
        setTasksName(e.target.text)
    }

    return (
        <div key='10' className={cx('sidebarWrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('header')}>
                    <span>TASKS</span>
                    
                </div>
                <div className={cx('content')}>
                    {
                        taskNames.map(a=>{
                            return (
                            <li key={a} className={cx('content-items')}>
                                <span onClick={handleOnclick}>{a}</span>
                            </li>  
                            )
                        })
                    }
                </div>
                <div className={cx('footer')}>
                    <span>DOVIETCHINH</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
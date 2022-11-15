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

    // let task = []
    // for(let x =0;x < 100;x++){
    //     task.push(`task_${x}`)
    // }
    let task = context.task


    // const context = useContext(globalContext)
    // console.log('this is context: ', context)
    // console.log(context.chinhdv)

    return (
        <div key='10' className={cx('sidebarWrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('header')}>
                    <span>TASKS</span>
                    
                </div>
                <div className={cx('content')}>
                    {
                        task.map(a=>{
                            return (
                            <li key={a} className={cx('content-items')}>
                                {/* <icon></icon> */}
                                <span>{a}</span>
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
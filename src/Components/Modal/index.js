import images from '~/assets/images'
import styles from './Modal.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { globalContext } from '~/GlobalContext';
let cx = classNames.bind(styles)
let usernames='admin'
let passwords = 'admin'

function Modal(){
    const context = useContext(globalContext)
    let [modalVisible,setModalVisible] = context.modal
    const [username,setUsername] = useState('')
    const [pass,setPass] = useState('')
    const [text2,setText2] = useState('')
    let [text,setText] = context.text
    const handleClick = (e)=>{
        if(username==usernames & passwords==pass){
            setText2('success!')
            setModalVisible("none")
            setText('admin')
        }
        else{
            setText2('error')
            // setModalVisible("flex")
        }
    }
    return (
        <form className={cx('Modal-wrapper')} style={{"display":modalVisible}}>
            <div className={cx('Modal')} >
                <div className={cx('avatar')}>
                    <img src='img_avatar2.png'></img>
                </div>
                <div className={cx('input')}>
                    <div className={cx("username")}>
                        <label htmlFor={"username"}>username</label>
                        <input placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className={cx("pass")}>
                        <label>pass</label>
                        <input type='password' placeholder='pass' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    </div>
                </div>
                <span className={cx('noti')}> {text2} </span>
                <button className={cx("submit")} onClick={handleClick}>LOGIN</button>
            </div>
        </form>
    )
}

// function Modal(){
//     const [state,setState] = useState(true)
//     return (
//         <div id="id01" className={cx("modal")}>
        
//         <form className={cx("modal-content animate")} action="/action_page.php" method="post">
//             <div className={cx("imgcontainer")}>
//                 <span onClick={()=>{document.getElementById('id01').style.display='none'}} className={cx("close")} title="Close Modal">&times;</span>
//                 <img src="img_avatar2.png" alt="Avatar" className={cx("avatar")}/>
//             </div>

//             <div className={cx("container")}>
//                 <label htmlFor="uname"><b>Username</b></label>
//                 <input type="text" placeholder="Enter Username" name="uname" required/>

//                 <label htmlFor="psw"><b>Password</b></label>
//                 <input type="password" placeholder="Enter Password" name="psw" required/>
                    
//                 <button type="submit">Login</button>
//                 <label>
//                     <input type="checkbox" checked={state} onChange={(e)=>{setState(!state)}}name="remember"/> Remember me
//                 </label>
//             </div>

//             <div className={cx("container")} style={{"backgroundColor":"#f1f1f1"}}>
//                 <button type="button" onClick={()=>{document.getElementById('id01').style.display='none'}}className={cx("cancelbtn")}>Cancel</button>
//                 <span className={cx("psw")}>Forgot <a href="#">password?</a></span>
//             </div>
//         </form>
//         </div>
// )
// }

export default Modal
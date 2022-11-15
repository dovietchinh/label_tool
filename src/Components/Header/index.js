import images from '~/assets/images'
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { globalContext } from '~/GlobalContext';
import {useContext} from 'react'
let cx = classNames.bind(styles)

function Header(){
    let context = useContext(globalContext)
    let [modalVisible,setModalVisible] = context.modal
    let [text,setText] = context.text
    const handleClick = (e) => {
        setModalVisible("flex")        
    }
    
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='logo' />
                </div>
                <ul className={cx('list')}>
                    <li><a href="/">Abouts</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Solutions</a></li>
                    <li><a href="/">CaseStudy</a></li>
                </ul>
                <div className={cx('language-search')}>
                    <div className={cx('language')} onClick={handleClick}> 
                        <span>{text}</span> 
                    </div>
                    {/* <div className={cx('search')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass}/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header
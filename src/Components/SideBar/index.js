import images from '~/assets/images'
import styles from './SideBar.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
let cx = classNames.bind(styles)

function SideBar(){
    console.log(cx('sidebar-wrapper'))
    return (
        <div key='10' className={cx('sidebarWrapper')}>
            <div className={cx('sidebar')}>
                <div className={cx('header')}>
                    <span>SIDEBAR HEADER</span>
                    {/* <div className='header--separate'></div> */}
                </div>
                <div className={cx('content')}>
                    <ul>
                        <li className={cx('content-items')}> 
                            Components
                        </li>
                        <li className={cx('content-items')}> 
                            Charts
                        </li>
                        <li className={cx('content-items')}> 
                            E-commerce
                        </li>

                    </ul>
                </div>
                <div className={cx('footer')}>
                    <span>SIDEBAR FOOTER</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
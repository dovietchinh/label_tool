import images from '~/assets/images'
import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
let cx = classNames.bind(styles)

function Header(){
    console.log(images)
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('header')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='logo' />
                </div>
                <ul className={cx('list')}>
                    <li><span>Abouts</span></li>
                    <li><span>Products</span></li>
                    <li><span>Solutions</span></li>
                    <li><span>CaseStudy</span></li>
                </ul>
                <div className={cx('language-search')}>
                    <div className={cx('language')}> 
                        <span>EN</span> 
                    </div>
                    <div className={cx('search')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
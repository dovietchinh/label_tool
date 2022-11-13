import images from '~/assets/images'
import styles from './Footer.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
let cx = classNames.bind(styles)

function Footer(){
    return (
        <div>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
        </div>
    )
}

export default Footer
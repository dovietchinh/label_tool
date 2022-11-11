
import styles from './Contents.module.scss'
import classNames from 'classnames'

let cx = classNames.bind(styles)
function Contents(){
    return (
        <div className={cx('content')}>
            CONTENT
        </div>
    )
}

export default Contents
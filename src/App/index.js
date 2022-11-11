
import styles from './App.module.scss';
import images from '~/assets/images'
import Header from '~/Components/Header'
import GlobalStyles from '~/GlobalStyles';
import SideBar from '../Components/SideBar';
import Contents from '../Components/Contents';
import classNames from 'classnames';

let cx = classNames.bind(styles)

function App() {
  console.log(images)
  return (
    <GlobalStyles>
      <div className={cx('App')}>
          <Header></Header>
          <div className={cx('container')}>
            {/* asd */}
            {/* <div className={cx('SideBar')}> */}
              <SideBar></SideBar>
            {/* </div> */}
            <div className={cx('Contents')}>
              <Contents></Contents>
            </div>
          </div>
      </div>
    </GlobalStyles>
  );
}

export default App;

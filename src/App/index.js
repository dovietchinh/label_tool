
import styles from './App.module.scss';
import images from '~/assets/images'
import Header from '~/Components/Header'
import GlobalStyles from '~/GlobalStyles';
import SideBar from '../Components/SideBar';
import Contents from '../Components/Contents';
import classNames from 'classnames';
import Footer from '../Components/Footer'
let cx = classNames.bind(styles)

function App() {
  return (
    <GlobalStyles>
      <div className={cx('App')}>
          <Header></Header>
          <div className={cx('container')}>
              <SideBar></SideBar>
            <div className={cx('Contents')}>
              <Contents></Contents>
            </div>
          </div>
          <Footer/>
      </div>
    </GlobalStyles>
  );
}

export default App;

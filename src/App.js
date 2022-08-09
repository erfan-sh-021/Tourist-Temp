import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import Header from './Component/Heder/Header';
import MainTittle from './Component/Main/MainTittle';
import MainSearch from './Component/Main/MainSearch';
import MainTravel from './Component/Main/MainTravel';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/Main/pages/Home';
import Carousel from './Component/Main/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Detail from './Component/Details/Detail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <div className="container-fluid">
          <MainTittle />
          <MainSearch />
          <MainTravel />
          <div className="Tittle">
            <hr className="Br " />
            <span className="T-3 ">اماکن گردشگری</span>
          </div>
          <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/detail:id' element={<Detail/>}/>
         
          </Routes>
          <div className="Tittle">
            <hr className="Br " />
            <span className="T-3 ">هتل های شهر </span>
          </div>
          <Carousel />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

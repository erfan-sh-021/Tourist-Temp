import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import Header from './pages/Heder/Header';
import MainTittle from './Component/Main/MainTittle';
import MainSearch from './Component/Main/MainSearch';
import MainTravel from './Component/Main/MainTravel';
import Footer from './pages/Footer/Footer';
import HomePage from './Component/Main/pages/Home';
import Carousel from './Component/Main/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './Component/Details/Detail';
import Layout from './Component/layout/layout';
import Login from './Component/login/login';
import { DarkModeProvider } from './pages/them/ThemeContext';
import SignUp from './Component/login/signup';
function App() {
  return (
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        {[
          {
          path:"/",
          element: (
            <>
              <MainTittle />
              <MainSearch />
              <HomePage/>
              <MainTravel />
              <div className="Tittle">
                <hr className="Br" />
                <span className="T-3">اماکن گردشگری</span>
              </div>
              <Carousel />
              </>
          ),
          },
          {path:'/detail/:id', element:<Detail/>},
          {path:'/login', element:<Login/>},
          {path:'/signUp', element:<SignUp/>},
        ].map(({path,element})=>(
          <Route key={path} path={path} element={<Layout>{element}</Layout>}/>
        ))}
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;

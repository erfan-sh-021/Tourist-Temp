import './css/styles.css';
import './css/Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import MainTittle from './Component/Main/MainTittle';
import MainSearch from './Component/Main/MainSearch';
import MainTravel from './Component/Main/MainTravel';
import Carousel from './Component/Main/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Detail from './Component/Details/Detail';
import Layout from './Component/layout/layout';
import Login from './Component/login/login';
import SignUp from './Component/login/signup';
import { useEffect, useState } from 'react';
import HCard from './Component/HCards/HCard';
import MapComponent from './Component/Map/MapComponent';

const ProvinceDetail= ({province}) => {
    const {provinceName} = useParams();
    return <h2>مکان های گردشگری استان </h2>
}
function AppContent() {
    const location = useLocation();
    const navigate = useNavigate();
    const [modalMessage, setModalMessage] = useState('');
    const [modalClass, setModalClass] = useState('');

    useEffect(() => {
        if (location.state?.showLoginModal) {
            setModalMessage('ورود با موفقیت انجام شد');
            setModalClass('success-modal');
        } else if (location.state?.showLogoutModal) {
            setModalMessage('خروج با موفقیت انجام شد');
            setModalClass('logout-modal');
        }

        if (location.state?.showLoginModal || location.state?.showLogoutModal) {
            setTimeout(() => {
                setModalMessage('');
                navigate(location.pathname, { replace: true, state: {} });
            }, 3000); // پس از ۳ ثانیه مودال بسته شود
        }
    }, [location.state]);


    return (
        <>
            <div>
                {modalMessage && <div className={`custom-modal ${modalClass}`}>{modalMessage}</div>}
             
            </div>
            <Routes>
                {[
                    {
                        path: "/",
                        element: (
                            <>
                                <MainTittle />
                                <MainSearch />
                                <HCard />
                                <MainTravel />
                                <div className="Tittle">
                                    <hr className="Br" />
                                    <span className="T-3">هتل ها</span>
                                </div>
                                <Carousel />
                            </>
                        ),
                    },
                    { path: '/detail/:id', element: <Detail /> },
                    { path: '/login', element: <Login /> },
                    { path: '/signUp', element: <SignUp /> },
                    { path: '/province/:provinceName', element: <provinceDetail/> },
                    { path: '/map', element: <MapComponent/> },
                    
                ].map(({ path, element }) => (
                    <Route key={path} path={path} element={<Layout>{element}</Layout>} />
                ))}
            </Routes>
        </>

    );
}

export default AppContent;

import Footer from "../../pages/Footer/Footer";
import Header from "../../pages/Heder/Header";

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container-fluid">
                {children}
            </div>
            <Footer />

        </>
    );
}

export default Layout;
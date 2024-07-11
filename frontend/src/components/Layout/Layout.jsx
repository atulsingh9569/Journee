
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Router from "../../router/Router";

const Layout = () => {
    return (
        <>
        <div className="">
            <Header />
            <Router />
            <Footer />
        </div>
        </>
    )
}

export default Layout;
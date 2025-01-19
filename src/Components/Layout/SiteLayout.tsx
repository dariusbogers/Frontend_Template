import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = () => {
    return (
        <div className="">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default SiteLayout
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = () => {
    // return (
    //     <div className="">
    //         <Header/>
    //         <Outlet/>
    //         <Footer/>
    //     </div>
    // )

    return (
        <div className='flex flex-col h-screen'>
            <div className="flex-none h-[120px] w-full">
                <Header/>
            </div>
            <div className="grow w-full overflow-scroll">
                <Outlet/>
            </div>
            <div className="flex-none h-[60px] w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default SiteLayout
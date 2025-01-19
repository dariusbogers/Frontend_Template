import { useState } from "react"
// import { AS_Logo } from "../../assets"
// import { DFT_Logo } from "../../assets"
import { IconContext } from "react-icons"
import { RxHamburgerMenu } from "react-icons/rx"
import { NavLink } from 'react-router-dom'
import { DFT_Logo } from "../../assets"
import Account from "../Account/Account"

const liCSS = "p-2 flex items-center justify-center"

const Header = () => {

    const [showLinks, setShowLinks] = useState(false)

    return (
        <header className="sticky w-full top-0 bg-black">
            <nav className="px-5 relative">
                <section className="tablet:flex tablet:items-center">
                    <div className="flex">
                        <div className="flex mobile:justify-center items-center">
                            <button className="tablet:hidden" onClick={() => setShowLinks(!showLinks)}>
                                <IconContext.Provider value={{ color: "white", size: "25px" }}>
                                    <div>
                                        <RxHamburgerMenu />
                                    </div>
                                </IconContext.Provider>
                            </button>
                            <NavLink to="/" className={'w-auto'}>
                                <img src={DFT_Logo} className="h-[120px] p-4 pr-5" alt="" />
                                {/* <h1>Logo</h1> */}
                            </NavLink>
                        </div>
                        <div className="">
                            
                        </div>
                        <div className='tablet:absolute tablet:w-40 tablet:h-[120px] tablet:right-0 tablet:pr-5 md:order-2 flex flex-1 content-center justify-end mr-1 '>
                            <Account />
                        </div>
                    </div>

                    <div id="links" className={`${showLinks ? `mobile:h-[160px]` : "mobile:h-0"} tablet:h-100 transform duration-500 ease-in-out transition-[height] origin-top overflow-hidden`}>
                        <ul className="tablet:flex tablet:space-x-4">
                            <li className={liCSS}><NavLink to="/home">Home</NavLink></li>
                            <li className={liCSS}><NavLink to="/aboutus">About</NavLink></li>
                            <li className={liCSS}><NavLink to="/contact">Contact</NavLink></li>
                            <li className={liCSS}><NavLink to="/events">Events</NavLink></li>
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    )
}

export default Header
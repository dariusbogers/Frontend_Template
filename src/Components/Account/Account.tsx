import { IconContext } from "react-icons"
import { BsPersonFill } from "react-icons/bs"
import Dropdown from "../Dropdown/Dropdown"
import ListButtonItem from "../List/ListButtonItem"
import ListButtonDelimiter from "../List/ListButtonDelimiter"
import { Link } from "react-router-dom"

const Account = () => {

    var loggedIn:boolean = true

    var userDefined:boolean = loggedIn
    var userKeysIsNotZero:boolean = loggedIn
    var firstname:string = "Darius"
    var lastname:string = "Bogers"

    if(userDefined) {
        if(userKeysIsNotZero){
            const buttonLayout = () => {
                return(
                    <>
                        <span className='text-white block  sm:hidden mr-1'>{firstname.charAt(0)}{lastname.charAt(0)}</span>
                        <span className='text-white hidden sm:block  mr-1'>{firstname} {lastname} </span>
                        <IconContext.Provider value={{ color: "red", size: "25px" }} >
                            <div>
                                <BsPersonFill />
                            </div>
                        </IconContext.Provider>
                    </>
                )
            }

            return (
                //TODO if name too long --> Show Initials
                // <Link to={"/Account"} className='flex items-center'>
                //     {buttonLayout()}
                // </Link>
                // Add actions
                <Dropdown button={buttonLayout()} bgClass={"border-none"} dropdownClass={"bg-white"} btnClass={"text-gray-600 border-gray-100"}>
                    <ListButtonItem className={"text-gray-600 hover:text-gray-700 hover:bg-gray-50"} onClick={() => {console.log("Account")}}>Account</ListButtonItem>
                    <ListButtonDelimiter className={"m-1 bg-gray-500"}/>
                    <ListButtonItem className={"text-gray-600 hover:text-gray-700 hover:bg-gray-50"} onClick={() => {console.log("Settings")}}>Settings</ListButtonItem>
                    <ListButtonDelimiter className={"m-1 bg-gray-500"}/>
                    <ListButtonItem className={"text-gray-600 hover:text-gray-700 hover:bg-gray-50"} onClick={() => {console.log("Logout")}}>Logout</ListButtonItem>
                </Dropdown>
            )
        }
    } else {
        return (
            <Link to={"/LoginPage"} className='flex items-center'>
                <span className=' block mr-1'>Login</span>
                <IconContext.Provider value={{ color: "red", size: "25px" }} >
                    <div>
                        <BsPersonFill />
                    </div>
                </IconContext.Provider>
            </Link>
        )
    }
}

export default Account
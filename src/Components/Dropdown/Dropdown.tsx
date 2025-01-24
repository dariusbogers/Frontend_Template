import { useRef, useEffect, useState } from "react"

// TODO add interface
interface DropdownProps {
    children: React.ReactNode;       // Content inside the dropdown
    button: React.ReactNode;         // Button content to toggle the dropdown
    dropdownClass?: string;          // Additional classes for the dropdown container
    bgClass?: string;                // Classes for the background container
    btnClass?: string;               // Classes for the button
  }

const Dropdown: React.FC<DropdownProps> = ({ children, button, dropdownClass, bgClass, btnClass }) => {
    const dropdownRef = useRef(null)
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            if(!dropdownRef.current?.contains(event.target)) {
                handleClose()
            }
        }

        window.addEventListener("mousedown", handleOutsideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick)
    }
    }, [dropdownRef])

    return (
        <div ref={dropdownRef} className={`inline-flex ${bgClass} border rounded-md`}>
            <div className="relative">
                <button
                    type="button"
                    className={`inline-flex items-center justify-center h-full ${btnClass}`}
                    onClick={handleOpen}
                >
                    {button}

                </button>

                <div className={`absolute ${open ? "scale-100" : "scale-0"} transform duration-500 ease-in-out transition-all right-0 z-10 w-56 mt-2 origin-top-right ${dropdownClass} border border-gray-100 rounded-md shadow-lg`}>
                    <div className="p-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
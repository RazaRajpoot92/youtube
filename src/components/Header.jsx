import {useDispatch} from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import {Link} from "react-router-dom"
import { useState } from "react"

const menu = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
const youtubeLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHa1f7bO91Miz1KKeYpRo95dW2FceKO-yAAW1CzueFQ&s"
const userIcon = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
const searchIcon = "https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"

const Header = ()=>{

    const [searchText, setSearchText] = useState("")

    const dispatch = useDispatch()

    const handleToggle = ()=>{
        dispatch(toggleMenu())
    }
    return(

        <div className="flex top-0 sticky w-full bg-slate-50 shadow-md justify-between p-4 border h-16 items-center">
            <div className="flex gap-1 items-center">
                <img onClick={()=>handleToggle()} className="h-6 cursor-pointer" src={menu} alt="" />
                <Link to={"/"} >
                    <img className="h-14" src={youtubeLogo} alt="" />
                </Link>
            </div>
            <div className="flex items-center">
                <input
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                className="border text-gray-600 border-gray-400 p-1 w-[430px] pl-4 rounded-l-full focus:outline-none" type="text" />
                <button className="border border-gray-400 p-1 px-2 rounded-r-full">
                    <img className="h-6" src={searchIcon} alt="" />
                </button>
            </div>
            <div>
                <img className="h-10" src={userIcon} alt="" />
            </div>
        </div>

    )
}

export default Header;
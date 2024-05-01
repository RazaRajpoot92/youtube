import {Outlet} from "react-router-dom"
import SideBar from "./SideBar";
import Header from "./Header";

const MainContainer = ()=>{
    return(
        <>
        <Header />
        <div className="w-full flex">
            <SideBar />
            <Outlet />
        </div>
        </>
    )
}

export default MainContainer;
import {useSelector} from "react-redux"


const SideBar = ()=>{

    const isOpen = useSelector(store=>store.app.isMenuOpen)

    if(!isOpen) return null;

    return(
        <div className="border text-gray-700 p-2  flex flex-col gap-4 border-r-slate-200 w-36 h-[90vh]">
            <div className="p-2">
                <ul className="flex flex-col gap-1">
                    <li className="hover:bg-slate-100 cursor-pointer">Home</li>
                    <li className="hover:bg-slate-100 cursor-pointer">Shorts</li>
                    <li className="hover:bg-slate-100 cursor-pointer">Vidoes</li>
                    <li className="hover:bg-slate-100 cursor-pointer">Live</li>
                </ul>
            </div>
            <div className="p-2">
                <h2 className="font-bold mb-1">Subscriptions</h2>
                <ul>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Music</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Sports</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Gaming</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Movies</li>
                </ul>
            </div>
            <div className="p-2">
                <h2 className="font-bold mb-1">Watch Later</h2>
                <ul>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Music</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Sports</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Gaming</li>
                    <li className="hover:bg-slate-100 cursor-pointer p-[1px]">Movies</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
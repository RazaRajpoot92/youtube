import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import {createBrowserRouter, RouterProvider, BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./utils/store";
import Home from "./components/Home";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <MainContainer />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]

}])

function App() {
  return (
    <>
    <Provider store={store}>
        
        <RouterProvider router={appRouter} />
      
    </Provider>
    </>
  );
}

export default App;

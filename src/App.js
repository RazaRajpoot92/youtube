import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {Provider} from "react-redux"
import store from "./utils/store";


function App() {
  return (
    <>
    <Provider store={store}>
      <Header />
      <SideBar />
    </Provider>
    </>
  );
}

export default App;

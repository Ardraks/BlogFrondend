import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Homepage from "./pages/Home/Homepage";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='/login'element={<Login/>}></Route>
     <Route path='/homepage'element={<Homepage/>}></Route>
     <Route path='/register'element={<Register/>}></Route>
     </Routes>

     </BrowserRouter>
      
      
    </div>
  );
}

export default App;

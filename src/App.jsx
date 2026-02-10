






import './App.css'

import LoginPage from "./LoginSchool/LoginPage.jsx";
import "./LoginSchool/LoginPage.css";

// import ChangePasswordPage from "./LoginSchool/ChangePasswordPage.jsx";
// import "./LoginSchool/ChangePasswordPage.css";
import RegisterPage from "./LoginSchool/RegisterPage.jsx";
// import Home from "./association/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    
    
    





        <BrowserRouter>
        <div className="homeaboutmoto-menu-homesch">
        </div>
        {/* <Navbar/> */}

        <Routes>
          {/* <Route element={<Navbar/>}> */}
          <Route >

          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/change-password" element={<ChangePasswordPage />} /> */}
          <Route path="/register" element={<RegisterPage />} />

  
 {/* <Route path="/" element={<Home/>} /> */}
      
          {/* 
          <Route path="/eventass" element={<Event />} />
          <Route path="/eventmoreass" element={<Eventmoreass />} />
          <Route path="/servicesass" element={<Servicesass />} />
          <Route path="/contactass" element={<Contactass />} /> */}
          </Route>

//true
 {/* <Route element={<AdminLayout />}> */}
  {/* <Route element={<AdminNavbar />}>

   
          <Route path="/eventview" element={<Eventview/>} />
          <Route path="/servicesview" element={<Servicesview />}/> 

                     <Route path="/contactview" element={<Contactview />} />
          <Route path='/event' element={<Events />} />
          <Route path='/create' element={<CreateEvent />} />
          <Route path='/update/:id' element={<UpdateEvent />} />

          <Route path='/services' element={<Services />} />
          <Route path='/createServices' element={<CreateServices />} />
          <Route path='/updateservices/:id' element={<UpdateServices />} />
  </Route> */}

        </Routes>

      </BrowserRouter>
    
    </>
  )
}

export default App

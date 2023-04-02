import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom';
import CreateEmployee from './Components/CreateEmployee';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewComponent from './Components/ViewComponent';

const App = () => {
  return ( 
    <div>
          <Header/>
          <Routes>{/*Lets you switch component based on the route and only it displays one component at a time*/}
              {/* Route will decide which component to show for the particular path.  */}
              <Route index element={<ListEmployeeComponent/>}/>
              <Route path="/employees" element={<ListEmployeeComponent/>}/>
              <Route path="/add-employee" element={<CreateEmployee/>}/>
              <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}/>
              <Route path="/employees/view/:id" element={<ViewComponent/>}/>
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;

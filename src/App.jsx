import React from 'react'
import Email from './Components/Email'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Epaycoin } from './Components/Epaycoin';
import { Transaction } from './Components/Transaction';
import Layout from './Components/Layout';
import { Admin } from './Components/Admin';
import { Setting } from './Components/Setting';
import { Inbox } from './Components/Inbox';

const App = () => {
  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path="/Email" element={<Email/>}/>
       
        <Route path="/layout" element={<Layout/>}/>
        <Route path='/epaycoin'element={<Layout><Epaycoin/></Layout>}></Route>
        <Route path='/transaction'element={<Layout><Transaction/></Layout>}></Route>
        <Route path='/admin'element={<Layout><Admin/></Layout>}></Route>
        <Route path='/setting'element={<Layout><Setting/></Layout>}></Route> 
        <Route path='/inbox'element={<Layout><Inbox/></Layout>}></Route> 
        
      </Routes>
    </BrowserRouter>

    
      
    </div>
  )
}

export default App
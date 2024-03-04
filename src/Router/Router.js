import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";


import React from 'react';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;

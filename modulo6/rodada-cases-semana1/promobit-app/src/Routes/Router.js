import React from 'react'
import Home from '../Pages/Home/Home'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Home />} />

                <Route path={"/detalhes/:id"} element={<DetailsPage />} />

                <Route path={"*"} element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
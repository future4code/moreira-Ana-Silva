import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaFeed from '../Pages/PaginaFeed/PaginaFeed'
import PaginaLogin from '../Pages/PaginaLogin/PaginaLogin'
import PaginaCadastro from '../Pages/PaginaCadastro/PaginaCadastro'
import PaginaPost from '../Pages/PaginaPost/PaginaPost'
import PaginaErro from '../Pages/PaginaErro/PaginaErro'

function Router() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<PaginaFeed />} />

                <Route path={"/login"} element={<PaginaLogin />} />

                <Route path={"/cadastro"} element={<PaginaCadastro />} />

                <Route path={"/post:id"} element={<PaginaPost />} />

                <Route path={"*"} element={<PaginaErro />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
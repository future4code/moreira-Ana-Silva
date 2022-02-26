import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PaginaFeed from '../Pages/PaginaFeed/PaginaFeed'
import PaginaLogin from '../Pages/PaginaLogin/PaginaLogin'
import PaginaCadastro from '../Pages/PaginaCadastro/PaginaCadastro'
import PaginaPost from '../Pages/PaginaPost/PaginaPost'
import PaginaErro from '../Pages/PaginaErro/PaginaErro'

function Router({setTextoDoBotao}) {

    return (

            <Routes>
                <Route path={"/"} element={<PaginaLogin setTextoDoBotao={setTextoDoBotao}/>} />

                <Route path={"/cadastro"} element={<PaginaCadastro setTextoDoBotao={setTextoDoBotao}/>} />

                <Route path={"/feed"} element={<PaginaFeed />} />

                <Route path={"/post/:id"} element={<PaginaPost />} />

                <Route path={"*"} element={<PaginaErro />} />
            </Routes>
    )
}

export default Router;
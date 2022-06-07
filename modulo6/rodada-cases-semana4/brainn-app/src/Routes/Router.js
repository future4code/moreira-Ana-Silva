import React from 'react'
import MegaSena from '../Pages/MegaSena/MegaSena'
import Quina from '../Pages/Quina/Quina'
import LotoFacil from '../Pages/LotoFácil/LotoFácil'
import LotoMania from '../Pages/LotoMania/LotoMania'
import TimeMania from '../Pages/TimeMania/TimeMania'
import DiaDeSorte from '../Pages/DiaDeSorte/DiaDeSorte'
import ErrorPage from '../Pages/Erro/Erro'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<MegaSena />} />
                <Route path={"/quina"} element={<Quina />} />
                <Route path={"/lotoFacil"} element={<LotoFacil />} />
                <Route path={"/lotoMania"} element={<LotoMania />} />
                <Route path={"/timeMania"} element={<TimeMania />} />
                <Route path={"/diaDeSorte"} element={<DiaDeSorte />} />
                <Route path={"*"} element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
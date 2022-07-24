import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound404 from '../pages/404/NotFound404'
import Home from '../pages/Home/Home'
import Practica from '../pages/Practica'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<NotFound404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/practica' element={<Practica />} />
            </Routes>

        </>
    )
}

export default AppRouter
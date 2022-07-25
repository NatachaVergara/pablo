import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound404 from '../pages/404/NotFound404'
import Home from '../pages/Home/Home'
import Practica from '../pages/Practica'
import Videos from '../pages/Videos/Videos'


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='*' element={<NotFound404 />} />
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/practica' element={<Practica />} />
                <Route path='/videos' element={<Videos />} />
            </Routes>

        </>
    )
}

export default AppRouter
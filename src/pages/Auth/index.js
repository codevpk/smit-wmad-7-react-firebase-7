import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'

export default function Auth() {
    return (
        <Routes>
            <Route path='login' element={<></>} />
            <Route path='register' element={<Register />} />
        </Routes>
    )
}

import React from 'react'
import { Link, Route, Routes, Outlet } from "react-router-dom";
import MainPage from '../page/mainPage/MainPage';
import QuestionsList from '../page/QuestionsList/QuestionsList';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import './App.css'

export default function App() {
  return (
    <div>

      <Routes>
       
          <Route path="/questions/:id" element={<QuestionsList />} />
          <Route path="/" element={<MainPage />} /> 
          <Route path='*' element={<ErrorPage />} />
       
      </Routes>

      <div className='container'><Outlet /></div>
    </div>
  )
}

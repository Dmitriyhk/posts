import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context'

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return ( 
    
      isAuth
        ? <Routes> {privateRoutes.map(route => <Route element={route.element} path={route.path} key={route.path}/>)} </Routes>
        : <Routes> {publicRoutes.map(route => <Route element={route.element} path={route.path} key={route.path}/>)} </Routes>
      
 
    
  )
}

export default AppRouter
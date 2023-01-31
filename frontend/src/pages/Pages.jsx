import React from 'react'

// import react router dom
import {Routes, Route} from 'react-router-dom'



import { Provider } from 'react-redux'
// import Store
import store from '../context/store'


// import Layouts
import MainLayout from '../layouts/MainLayout'

// Import the Main Pages
import Home from './home'


// Import Auth Pages
import Login from './auth/login/Login'
import Register from './auth/register/Register'
import Activate from './auth/activate/Activate'
import PasswordReset from './auth/password/PasswordReset'
import PasswordResetDone from './auth/password/PasswordResetDone'
import PasswordResetConfirm from './auth/password/PasswordResetConfirm'
import PasswordResetComplete from './auth/password/PasswordResetComplete'



// Import Profile
import Profile from './auth/profile/Profile'
import Settings from './auth/profile/Settings'



// import Content Pages
import Polls from './polls/Polls'






const Pages = () => {
  return (
    <div className="mx-auto max-w-6xl px-2 sm:px-4 min-h-[35rem]">
        <Provider store={store}>
            <MainLayout>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/polls" element={<Polls />} />
                      <Route exact path="/account/login" element={<Login />} />
                      <Route exact path="/account/register" element={<Register />} />
                      <Route exact path="/account/activate/:uid/:token" element={<Activate />} />
                      <Route exact path="/account/password_reset" element={<PasswordReset />} />
                      <Route exact path="/account/password_reset/done" element={<PasswordResetDone />} />
                      <Route exact path="/account/password_confirm" element={<PasswordResetConfirm />} />
                      <Route exact path="/account/password_confirm/complete" element={<PasswordResetComplete />} />
                      <Route exact path="/user/profile" element={<Profile />} />
                      <Route exact path="/user/settings" element={<Settings />} />
                  </Routes>
            </MainLayout>
        </Provider>
    </div>
  )
}

export default Pages
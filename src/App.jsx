import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { Layout } from './pages'
import { CouponDetails } from './pages/CouponDetails'

const LazyHomePage = lazy(() => import('./pages/HomePage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))
const UserLogin = lazy(() => import('./pages/UserLogin'))
const UserRegister = lazy(() => import('./pages/UserRegister'))
const LoyaltySystemPage = lazy(() => import('./pages/LoyaltySystemPage'))
const SettingsUserPage = lazy(() => import('./pages/SettingsUserPage'))
const ConfirmedEmailPage = lazy(() => import('./pages/ConfirmedEmailPage'))
const CouponsPage = lazy(() => import('./pages/CouponsPage'))
const HubsPage = lazy(() => import('./pages/HubsPage'))
const RecoverPasswordPage = lazy(() => import('./pages/RecoverPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))

export default function App () {
  return (
    <Routes>
      <Route
        path='/' Component={Layout} errorElement={ErrorPage}
      >

        <Route index element={<LazyHomePage />} />
        <Route path='/dashboard' index element={<Dashboard />} />
        <Route path='/register' index element={<UserRegister />} />
        <Route path='/login' index element={<UserLogin />} />
        <Route path='/account' index element={<ConfirmedEmailPage />} />
        <Route path='/hubs' index element={<HubsPage />} />
        <Route path='/services/loyaltySystem' index element={<LoyaltySystemPage />} />
        <Route path='/coupons&promotions' index element={<CouponsPage />} />
        <Route path='/coupons&promotions/:couponID' index element={<CouponDetails />} />
        <Route path='/accountSettings' index element={<SettingsUserPage />} />
        <Route path='/recoverAccount' index element={<RecoverPasswordPage />} />
        <Route path='/reset-password' index element={<ResetPasswordPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

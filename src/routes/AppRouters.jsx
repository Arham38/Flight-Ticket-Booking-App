/** @format */

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Signup = lazy(() => import("../pages/Signup"));
const Signin = lazy(() => import("../pages/Signin"));
const Admin = lazy(() => import("../pages/Admin"));
const Flights = lazy(() => import("../pages/Flights"));
const Profile = lazy(() => import("../pages/Profile"));
const Booking = lazy(() => import("../pages/Booking"));
const AllFlights = lazy(() => import("../pages/AllFlights"));
const UserBookings = lazy(() => import("../pages/UserBookings"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const Map = lazy(() => import("../pages/Map"));
const FAQ = lazy(() => import("../pages/Faq"));
const Features = lazy(() => import("../pages/Features"));
const HowTo = lazy(() => import("../pages/HowTo"));
const EditFlight = lazy(() => import("../pages/EditFlight"));
const CreateFlightsForm = lazy(() => import("../pages/CreateFlights"));
const UpdateUsers = lazy(() => import("../pages/UpdateUsers"));

const AppRouters = () => {
  return (
    <Suspense fallback={<div className='route-loading'>Loading page…</div>}>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/admin/*' element={<Admin />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/flights' element={<Flights />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/allflights' element={<AllFlights />} />
      <Route path='/user-Bookings' element={<UserBookings />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/map' element={<Map />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/features' element={<Features />} />
      <Route path='/how-to' element={<HowTo />} />
      <Route path='/create-flights' element={<CreateFlightsForm />} />
      <Route path='/edit-flights' element={<EditFlight />} />
      <Route path='/update-users' element={<UpdateUsers />} />
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
    </Suspense>
  );
};

export default AppRouters;

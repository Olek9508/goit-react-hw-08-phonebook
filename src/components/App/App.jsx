import React from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import {HeaderNavBar} from '../HeaderNavBar/HeaderNavBar';
import { PrivateRoute } from '../../routes/PrivateRoute';
import { PublicRoute } from '../../routes/PublicRoute';
import { refreshUser } from '../../redux/authentication/operations';
import { useAuth } from '../../hooks/useAuth';

const Home = lazy(() => import('../../pages/Home/Home'));
const Register = lazy(() => import('../../pages/Register'));
const LogIn = lazy(() => import('../../pages/Login'));
const Contacts = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<HeaderNavBar />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};


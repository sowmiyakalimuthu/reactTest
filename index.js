import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeRouting from './HomeRouting';
import Contact from './Contact';
import Error from './Error';
import ContactCopy from './ContactCopy';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import Courses from './Courses';
import { configureStore } from '@reduxjs/toolkit';
import classListReducer from './ClassListReducer';
import { Provider } from 'react-redux';
import Cart from './Cart';
import Enquiry from './Enquiry';
import Test100 from './Test100';
import TestReducer from './Tes100Reducer';
import Gettestapi from './Gettestapi';
import TestDetail from './TestDetail';

const store = configureStore({
  reducer:{
    "classList": classListReducer,
    "test100" : TestReducer
  }
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRouting/>
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "login/:input",
    element: <LoginSuccess/>,
  },
  {
    path: "course",
    element: <Courses/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "enquiry",
    element: <Enquiry/>,
  },
  {
    path: "test",
    element: <Test100/>,
  },
  {
    path: "detail",
    element: <TestDetail/>,
  },
  {
    path: "*",
    element: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

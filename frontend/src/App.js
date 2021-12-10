import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import Pay from './components/Pay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/products/ProductDetailScreen';
import ProductsListScreen from './screens/products/ProductsListScreen';
import CartScreen from './screens/CartScreen';

import customTheme from './assets/theme';
import OrderSuccess from './screens/OrderSuccess';
import OrdersScreen from './screens/orders/OrdersScreen';
import OrderDetailScreen from './screens/orders/OrderDetailScreen';
import LoginScreen from './screens/users/LoginScreen';
import RegisterScreen from './screens/users/RegisterScreen';
import DashboardScreen from './screens/admin/DashboardScreen';
import ProductsScreen from './screens/admin/ProductsScreen';
import CreateProductScreen from './screens/admin/CreateProductScreen';
import ProductScreen from './screens/admin/ProductScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Router>
          <main style={{ height: '100%', width: '100%', minWidth: '100%' }}>
            <Navbar />
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route
                path='/products/category/:category'
                element={<ProductsListScreen />}
              />
              <Route path='/products/:id' element={<ProductDetailScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/success' element={<OrderSuccess />} />
              <Route path='/orders/:id' element={<OrderDetailScreen />} />
              <Route path='/orders' element={<OrdersScreen />} />
              <Route path='/admin/products' element={<ProductsScreen />} />
              <Route
                path='/admin/products/create'
                element={<CreateProductScreen />}
              />
              <Route path='/admin/products/:id' element={<ProductScreen />} />
              <Route path='/admin' element={<DashboardScreen />} />
              <Route path='/' element={<HomeScreen />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

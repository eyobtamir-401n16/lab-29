import React from 'react';
import "../src/styles.scss"
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Categories from './components/Categories';
import Count from './components/Count';

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <Header />
                <Categories />
                <Products />
                <Count />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;

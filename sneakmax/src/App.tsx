import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductPage from './pages/ProductPage';
import { Counter } from './features/counter/Counter';
import { Users } from './features/users/Users';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

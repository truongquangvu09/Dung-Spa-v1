import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/NavBar';
import CartPage from './pages/Cart';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home/index';
import AboutPage from './pages/About/index';
import Shoppage from './pages/Shop/index';
import ServicesPage from './pages/Service';
import BookingPage from './pages/Booking';
import ProductDetail from './components/RoleCart/ProductDetail';
import NewDetail from './components/RoleCart/NewsDetail/index';
import ProductListDetail from './components/RoleCart/ProductListDetail/index';
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="" element={<Navbar />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/Introduce" element={<AboutPage />} />
                        <Route path="/Shop" element={<Shoppage />}>
                            <Route path="" element=<ProductListDetail />></Route>

                            <Route path="Product_Detail" element=<ProductDetail /> />
                            <Route path="New_Detail" element=<NewDetail />></Route>
                        </Route>
                        <Route path="/Services" element={<ServicesPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                        <Route path="/Booking" element={<BookingPage />} />
                        <Route path="/Cart" element={<CartPage />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

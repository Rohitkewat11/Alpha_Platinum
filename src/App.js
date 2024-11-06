import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import {CategoryPage} from './component/category/CategoryPage';
import { CategoryWisePage } from './component/category/categoryWisePage';
import { ProductDetails } from './component/productDetails/productDetails';
import {Products} from './component/products/products';
import About from './component/about/about';
import Contact from './component/Contact/contact';
import Term_Condition from './component/Terms&Condition/T&C';
import PrivacyPolicy from './component/privacyPolicy/privacyPolicy';
import ProductPriceDetails from './component/productDetails/productPriceDetails';
import { Cart } from './component/Cart/Cart';
import {Favorait} from './component/favoraitSection/favorait';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<CategoryPage/>}/>
        <Route path='category/:ProductName' element={<CategoryWisePage/>}/>
        <Route path='category/:ProductName/details' element={<ProductDetails/>}/>
        <Route path='/PriceDetails' element={<ProductPriceDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/T&C' element={<Term_Condition/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favorait' element={<Favorait/>}/>
        <Route path='*' element={<><h1>Path not found.</h1></>}/>
      </Routes>

      <Footer/>
    
      </BrowserRouter>
    </div>
  )
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2. 전체상품페이지 - 전체상품
//3. 로그인버튼 => 로그인페이지
//4. 상풍 디테일을 눌렀으나, 로그인이 안되었을 경우에는 로그인페이지가 나온다.
//5. 로그인이 되어 있으면, 상품디테일 페이지를 볼 수 있다.
//6. 로그아웃을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품디테일페이지를 볼 수 없다. 다시 로그인페이지 보인다.
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate]= useState(false)
  // const PrivateRoute =({authenticate})=>{
  //   return authenticate === true? <ProductDetail /> : <Navigate to="/login"/>
  // }

  return (
    <div >
      <Navbar authenticate={authenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;

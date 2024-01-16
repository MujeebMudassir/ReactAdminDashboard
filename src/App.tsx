import { lazy,Suspense} from "react"
import {Routes,Route} from "react-router-dom"
import Loader from "./components/Loader"

const  Home = lazy(() => import("./pages/Home"));
const  Dashboard = lazy(() => import("./pages/Dashboard"));
const  Customer = lazy(() => import("./pages/Customer"));
const  Products = lazy(() => import("./pages/Products"));
const  Transaction = lazy(() => import("./pages/Transaction"));
 {/* charts  */}
 const  Bar = lazy(() => import("./pages/Bar"));
 const  Pie = lazy(() => import("./pages/Pie"));
 const  Line = lazy(() => import("./pages/Line"));
//  apps
const  Stopwatch = lazy(() => import("./pages/Stopwatch"));
 const  Coupon = lazy(() => import("./pages/Coupon"));
 const  Toss = lazy(() => import("./pages/Toss"));

const App = () => {
  return (<>
  <Suspense fallback={<Loader></Loader>}>

  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/admin/customer" element={<Customer></Customer>}></Route>
    <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
    <Route path="/admin/transaction" element={<Transaction></Transaction>}></Route>
    <Route path="/admin/products" element={<Products></Products>}></Route>
    {/* charts  */}
    <Route path="/admin/bar" element={<Bar></Bar>}></Route>
    <Route path="/admin/pie" element={<Pie></Pie>}></Route>
    <Route path="/admin/line" element={<Line></Line>}></Route>
    {/* apps */}
<Route path="/admin/stopwatch" element={<Stopwatch></Stopwatch>}></Route>
    <Route path="/admin/coupon" element={<Coupon></Coupon>}></Route>
    <Route path="/admin/toss" element={<Toss></Toss>}></Route>
  </Routes>
  </Suspense>
  
  </>)
}

export default App
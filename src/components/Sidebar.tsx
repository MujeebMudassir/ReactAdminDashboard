import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
const Sidebar = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <aside>
      <h1>Logo.</h1>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.includes("/admin/dashboard")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <MdDashboard />
            <Link to={"/admin/dashboard"}>Dashboard</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/customer")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/customer"}>Customer</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/transaction")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/transaction"}>Transaction</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/products")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/products"}>Products</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.includes("/admin/bar")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <MdDashboard />
            <Link to={"/admin/bar"}>Bar</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/pie")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/pie"}>Pie</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/line")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/line"}>Line</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <li
            style={{
              backgroundColor: location.includes("/admin/stopwatch")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <MdDashboard />
            <Link to={"/admin/stopwatch"}>StopWatch</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/coupon")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/coupon"}>Coupon</Link>
          </li>
          <li
            style={{
              backgroundColor: location.includes("/admin/toss")
                ? "rgb(244,244,244)"
                : "white",
            }}
          >
            <FaShoppingCart></FaShoppingCart>
            <Link to={"/admin/toss"}>Toss</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

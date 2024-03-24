import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useCart from "../Hooks/UseCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-200 bg-slate-900">
          {/* Sidebar content here */}
          <li>
            <NavLink>User Home</NavLink>
          </li>
          <li>
            <NavLink>Reservations</NavLink>
          </li>
          <li>
            <NavLink>Payment History</NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myCart"
              style={({ isActive }) => ({ color: isActive ? "green" : "" })}
            >
              My Cart
              <span className="bg-[#cd314b] rounded w-[40px] text-center">
                {" "}
                + {cart?.length || +0}
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/order/vegetable">Order</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="AdminContainer">
      {/* side bar  */}
      <Sidebar></Sidebar>
      <main className="dashboard">
        <div className="bar">
          <CiSearch />
          <input type="text" placeholder="Search for Data, Users" />
          <FaUser />
        </div>

        <section className="widget-container">
          <WidgetItem
            color="red"
            heading="Revenue"
            percent={50}
            value={100}
            amount={true}
          ></WidgetItem>
          <WidgetItem
            color="pink"
            heading="Users"
            percent={90}
            value={503}
          ></WidgetItem>
          <WidgetItem
            color="blue"
            heading="Transactions"
            percent={70}
            value={500033}
          ></WidgetItem>
          <WidgetItem
            color="green"
            heading="Customers"
            percent={60}
            value={33}
          ></WidgetItem>
        </section>
      </main>
    </div>
  );
};

interface WidgetType {
  heading: string;
  value: number;
  color: string;
  percent: number;
  amount?: boolean;
}

const WidgetItem = ({
  color,
  heading,
  percent,
  value,
  amount = false,
}: WidgetType) => {
  return (
    <div className="widgetItem">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? "$" + value : value}</h4>
        {percent > 0 ? (
          <span style={{ color: "green" }}>
            <FaArrowTrendUp></FaArrowTrendUp>+{percent}%
          </span>
        ) : (
          <span style={{ color: "red" }}>
            <FaArrowTrendDown></FaArrowTrendDown>
            {percent}%
          </span>
        )}
        <p>{amount}</p>
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(
            ${color} ${(Math.abs(percent) / 100) * 360}deg,rgb(255,255,255)0)`,
        }}
      >
        <span style={{ color: color }}>{percent}%</span>
      </div>
    </div>
  );
};

export default Dashboard;

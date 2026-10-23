import { NavLink } from "react-router-dom"
import Logo from "../../../assets/logo.svg"
import Dashboard from "../../../assets/dashboard.svg"
import DashboardSolid from "../../../assets/solid-dashboard-icon.svg"
import Deals from "../../../assets/deals.svg"
import DealsSolid from "../../../assets/solid-deals-icon.svg"
import Customers from "../../../assets/customers.svg"
import CustomersSolid from "../../../assets/solid-customers-icon.svg"
import Tasks from "../../../assets/tasks.svg"
import TasksSolid from "../../../assets/solid-tasks-icon.svg"
import Calendar from "../../../assets/calendar.svg"
import Notifications from "../../../assets/notifications.svg"
import Settings from "../../../assets/settings.svg"
import styles from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.something}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles["something-2"]}>

        <NavLink to={"/"}>
          {({ isActive }) => (
            <div className={styles["icon-wrapper"]}>
              <img src={isActive ? DashboardSolid : Dashboard} alt="" />
            </div>
          )}
        </NavLink>

        <NavLink to="/deals">
          {({ isActive }) => (
            <div className={styles["icon-wrapper"]}>
              <img src={isActive ? DealsSolid : Deals} alt="" />
            </div>
          )}
        </NavLink>

        <NavLink to="/customers">
          {({ isActive }) => (
            <div className={styles["icon-wrapper"]}>
              <img src={isActive ? CustomersSolid : Customers} alt="" />
            </div>
          )}
        </NavLink>

        <NavLink to="/tasks">
          {({ isActive }) => (
            <div className={styles["icon-wrapper"]}>
              <img src={isActive ? TasksSolid : Tasks} alt="" />
            </div>
          )}
        </NavLink>

        <div className={styles["icon-wrapper"]} style={{ opacity: '50%' }}>
          <img src={Calendar} alt="" />
        </div>

        <div className={styles["icon-wrapper"]} style={{ opacity: "50%" }}>
          <img src={Notifications} alt="" />
        </div>

        <div className={styles["icon-wrapper"]} style={{ opacity: "50%" }}>
          <img src={Settings} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Sidebar

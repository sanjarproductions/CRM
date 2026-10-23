import { Header } from "../../../widgets/header";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" buttonText="Add New" />
      <div className={styles.content}></div>
    </>
  );
};

export default Dashboard;

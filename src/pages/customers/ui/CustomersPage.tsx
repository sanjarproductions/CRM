import { Header } from "../../../widgets/header";

import styles from "./Customers.module.css";

const CustomersPage = () => {
  return (
    <>
      <Header title="Customers" buttonText="Add Customer" />
      <div className={styles.content}></div>
    </>
  );
};

export default CustomersPage;

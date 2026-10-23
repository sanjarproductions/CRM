import { Header } from "../../../widgets/header";

import styles from "./Tasks.module.css";

const TasksPage = () => {
  return (
    <>
      <Header title="Tasks" buttonText="Add Task" />
      <div className={styles.content}></div>
    </>
  );
};

export default TasksPage;

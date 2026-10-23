import Avatar from "../../../assets/avatar.png";
import Plus from "../../../assets/plus.svg";
import SearchIcon from "../../../assets/search.svg";

import styles from "./Header.module.css";

const Header = ({
  title,
  buttonText,
}: {
  title: string;
  buttonText: string;
}) => {
  return (
    <>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.actions}>
          <button className={styles["create-new"]}>
            {buttonText} <img src={Plus} alt="" />{" "}
          </button>
          <div className={styles.search}>
            <img src={SearchIcon} alt="" />
          </div>
          <div className={styles.user}>
            <img src={Avatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

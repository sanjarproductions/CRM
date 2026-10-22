import { Outlet } from "react-router-dom";

import { Sidebar } from "../../widgets/sidebar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

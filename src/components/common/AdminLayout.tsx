import { Outlet } from "react-router-dom";
import AdminHeader from "../static/AdminHeader";
import Sider from "../static/Sider";

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex">
        <Sider />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

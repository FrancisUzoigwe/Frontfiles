import { Outlet } from "react-router-dom";
// import AdminHeader from "../static/AdminHeader";
import Sider from "../static/Sider";
// import FootProps from "../props/FootProps";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex ">
        <Sider />
      <div className="">
      {/* <AdminHeader /> */}
        <Outlet />
      </div>
    </div>
        {/* <FootProps hidden="hidden"/> */}
    </div>
  );
};

export default AdminLayout;

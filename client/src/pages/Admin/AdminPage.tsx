import { Outlet } from "react-router-dom";
import NavBarAdmin from "../../components/Admin/NavBarAdmin";

const AdminPage = () => {
  return (
    <div>
      <NavBarAdmin />
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;

import { ViewNavBar, ViewFooter } from "../components";
import { Outlet } from "react-router-dom";

const MyLayout = () => {
  return (
    <div>
      <ViewNavBar />
      <Outlet />
      <ViewFooter />
    </div>
  );
};
export default MyLayout;

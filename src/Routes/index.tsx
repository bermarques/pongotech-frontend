import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default MyRoutes;

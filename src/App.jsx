import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./container/login/signIn/Login";
import Register from "../src/container/login/register/Register";
import Documentation from "./components/documentation/Documentation";
import Dashboard from "./components/dashboard/Dashboard";
import AddForm from "./container/addProduct/AddForm";
import CreateCategory from "./container/createCategory/createCategory";
import Update from "../src/container/updateProduct/Update";
import ProductById from "./container/productbyId/ProductById";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./container/errorPage/Error";
import "bootstrap/dist/css/bootstrap.css";
import UpdateCategory from "./container/updatecategory/UpdateCategory";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<Error />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/update/:productId" element={<Update />} />
          <Route path="/products/:productId" element={<ProductById />} />
          <Route path="/createcategory" element={<CreateCategory />} />
          <Route
            path="/editcategory/:categoryid"
            element={<UpdateCategory />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

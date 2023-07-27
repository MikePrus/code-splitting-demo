import { Routes, Route, Outlet, Link } from "react-router-dom";
import loadable from "@loadable/component";
import "./styles.css";

import HomePage from "./pages/Home";

const LoadablePage = loadable((props) => import(`./pages/${props.page}`), {
  fallback: <div>Page is Loading...</div>,
  cacheKey: (props) => props.page
});

export default function App() {
  return (
    <div className="App">
      <h1>React Router Code Splitting Demo</h1>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<LoadablePage page="Dashboard" />} />
          <Route
            path="notifications"
            element={<LoadablePage page="Notifications" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddLogo from "./components/addlogo.component";
import AddPhoto from "./components/addphoto.component";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Santiago Carreno Midterm
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/addLogo">
              Upload Logo
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/addPhoto">
            Upload Photo
            </Link>
          </li>          
        </ul>
      </nav>
      <Routes>
        <Route path="/addLogo" Component={AddLogo} />
        <Route path="/addPhoto" Component={AddPhoto} />
      </Routes>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Personal from "./routes/Personal";
import ID_Login from "./routes/ID_Login";
import Team_building from "./routes/Team_building";
import Team_leader from "./routes/Team_leader";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/team_building" element={<Team_building />} />
      <Route path="/id_login/:inputCode" element={<ID_Login />} />
      <Route path="/personal/:inputCode/:inputId" element={<Personal />} />
      <Route
        path="/team_leader/:inputCode/:inputId"
        element={<Team_leader />}
      />
    </Routes>
  );
};

export default App;

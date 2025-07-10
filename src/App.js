import Login from "./componente/login/Login";
import Info from "./componente/info/Info";
import { useState } from "react";


function App() {
const [info, setInfo] = useState(false)

return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;

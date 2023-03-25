import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {ProtectedRoutes} from "./ConfigureRoutes";
import * as ROUTES from "./constants/routes"
import { useFirebaseContext } from "./context/FirebaseContext";
import { Home , Browse, Signin, Signup} from "./pages";

export default function App() {
  const {firebaseData} = useFirebaseContext();

  // const firebaseData = {user : {id : 1}}

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={ROUTES.SIGN_IN} element={<Signin />}/>
          <Route exact path={ROUTES.SIGN_UP} element={<Signup />}/>
          <Route exact path={ROUTES.BROWSE} element={<Browse />}
          />
          <Route exact path={ROUTES.HOME} element={
            <ProtectedRoutes user={firebaseData?.user} path={ROUTES.BROWSE}>
              <Home />
            </ProtectedRoutes>
          }
          />
          <Route path="/*" element={<div>...Page Not Found...</div>} />
        </Routes>
      </Router>

    </div>
  );
}

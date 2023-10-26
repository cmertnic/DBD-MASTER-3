import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Registration from "./pages/registration/registration";
import Main from "./pages/main_page/Main";
import Login from "./pages/login/login";
import Survivor from "./pages/survivor_page/Survivor";
import Killer from "./pages/killer_page/Killer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/Killer">
        <Killer/>
          </Route>
        <Route exact path="/Survivor">
        <Survivor/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/main">
            <Main/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
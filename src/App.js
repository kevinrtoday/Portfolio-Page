import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Admin from "./components/admin/Admin";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

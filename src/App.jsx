import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OrderProvider } from "./context/OrderContext";
import Main from "./components/Main";
import SiparisFormu from "./components/SiparisFormu";
import SiparisOnayi from "./components/SiparisOnayi";
import { Header } from "./components/Header";

const App = () => {
  return (
    <OrderProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/siparis-formu" component={SiparisFormu} />
          <Route path="/siparis-onayi" component={SiparisOnayi} />
        </Switch>
      </BrowserRouter>
    </OrderProvider>
  );
};

export default App;

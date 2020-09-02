import { Home } from "../../pages/Home";
import { Configuration } from "../../pages/Configuration";
import { Primitives } from "../../pages/Primitives";
import { FAQ } from "../../pages/FAQ";
import { Login } from "../../pages/Auth/Login";
import { Register } from "../../pages/Auth/Register";
import CreateDatabase from "../../pages/Configuration/CreateDatabase/createDatabase";


const generateRoute = (path: string, component: Function, exact: boolean, isProctedRoute: boolean) => {
  let routes: any = {};
  routes['exact'] = exact;
  routes['path'] = path;
  routes['component'] = component;
  routes['isProctedRoute'] = isProctedRoute;
  return routes;
}

const ROUTES = [
  generateRoute('/', Home, true, false),
  generateRoute('/home', Home, true, false),
  generateRoute('/trading-portfolios', Login, true, false),
  generateRoute('/trading-portfolios/login', Login, true, false),
  generateRoute('/trading-portfolios/signup', Register, true, false),
  generateRoute('/configuration', Configuration, true, false),
  generateRoute('/configuration/buildDBTables', CreateDatabase, true, false),
  generateRoute('/primitives', Primitives, true, false),
  generateRoute('/faq', FAQ, true, false),
]

export default ROUTES;
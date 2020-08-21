import { Home } from "../../pages/Home";
import { TradingPortfolios } from "../../pages/Trading & Portfolios";
import { Configuration } from "../../pages/Configuration";
import { Primitives } from "../../pages/Primitives";
import { FAQ } from "../../pages/FAQ";


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
  generateRoute('/trading-portfolios', TradingPortfolios, true, false),
  generateRoute('/configuration', Configuration, true, false),
  generateRoute('/primitives', Primitives, true, false),
  generateRoute('/faq', FAQ, true, false),
]

export default ROUTES;
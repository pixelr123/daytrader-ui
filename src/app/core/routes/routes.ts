import { Home } from "../../pages/Home";


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
]

export default ROUTES;
import { RouterProvider } from "react-router-dom";
import "./Styles/App.scss";
import route from "./Router/Router";

function App() {
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;

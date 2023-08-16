import './App.css'
import {RouterProvider} from "react-router-dom";
import routes from './componets/Router/routes/routes';

function App() {
  return (
    <div>
        <RouterProvider router={routes} />
    </div>
  )
}

export default App

import { RoutesMain as Routes} from "./routes"
import GlobalStyles from "./styles/globalStyles"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {


  return (
    <>
      <GlobalStyles/>
      <Routes/>
      <ToastContainer/>
    </>
  )
}

export default App

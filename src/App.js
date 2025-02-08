import { BrowserRouter } from "react-router";
import { DarkModeProvider } from "./pages/them/ThemeContext";
import AppContent from "./AppContent";
import addProducts from './Component/service/sendData'
function App() {
  return ( 
    <DarkModeProvider>
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </DarkModeProvider>
   );
}
addProducts()
window.addProducts = addProducts;
export default App;
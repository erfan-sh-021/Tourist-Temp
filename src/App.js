import { BrowserRouter } from "react-router";
import { DarkModeProvider } from "./pages/them/ThemeContext";
import AppContent from "./AppContent";

function App() {
  return ( 
    <DarkModeProvider>
      <BrowserRouter>
        <AppContent/>
      </BrowserRouter>
    </DarkModeProvider>
   );
}

export default App;
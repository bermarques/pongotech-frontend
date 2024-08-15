import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./Routes";
import "./index.css";
import { ThemeProvider } from "./Components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

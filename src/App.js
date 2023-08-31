import { ToastContainer } from "react-toastify";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme/theme";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />;
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;

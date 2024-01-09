import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/Admin";
import ConsumerPage from "./pages/Consumer";
import Layout from "./pages/Layout";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route path='/admin' element={<AdminPage />} />
                <Route path="consumer" element={<ConsumerPage />} />
                <Route path="*" element={<Navigate to={ "/admin"} replace  />} />
            </Route>
        </Routes>
      </BrowserRouter>
    
    )
}

export default App;

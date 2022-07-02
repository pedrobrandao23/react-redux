import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import PsicologoCreate from "./pages/Psicologo/create";
import PsicologoList from "./pages/Psicologo/List"

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/cadastro" element={<PsicologoCreate />} />
                <Route path="/lista" element={<PsicologoList />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}
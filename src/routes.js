import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home";
import Sobre from './pages/Sobre'
import Post from "./pages/Post";
import Categoria from "./pages/Categoria";
import Page404 from './pages/Page404'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/sobre' element={<Sobre />} />
                    <Route path='/posts/:id' element={<Post/>} />
                    <Route path='/categoria/:id/*' element={<Categoria />} />
                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes>


        </BrowserRouter>
    )

}

export default AppRoutes;
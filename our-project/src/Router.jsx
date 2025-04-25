import { Route, Routes } from "react-router-dom"
import { LayoutPadrao } from "./layouts"
import { Inicial } from "./pages"

const Router = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} /> 
            </Route>
        </Routes>
    )
}

export { Router }
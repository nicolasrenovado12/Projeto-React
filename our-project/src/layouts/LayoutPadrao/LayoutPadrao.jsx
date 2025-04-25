import { Outlet } from "react-router-dom"

import { Conteudo } from "../../components"
import { useAppContext } from "../../hooks";

const LayoutPadrao = () => {
    return ( 
    <>
    <Conteudo>
      <Outlet />
    </Conteudo>
   </>
    )
}

export { LayoutPadrao }
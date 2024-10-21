import Diminuir from "../src/Componentes/Diminuir/Diminuir";
import CalculoiMC from "./Componentes/CalculoiMC/CalculoiMC.jsx";
import CambioDolar from "./Componentes/CambioDolar/CambioDolar";
import CambioEuro from "./Componentes/CambioEuro/CambioEuro";
import Dividir from "./Componentes/Dividir/Dividir";
import Multiplicar from "./Componentes/Multiplicar/Multiplicar";




function App() {
  return <>
    <hr />
    <Diminuir/>
    <hr />
    <Multiplicar/>
    <hr />
    <Dividir/>
    <hr />
    <CambioDolar/>
    <hr />
    <CambioEuro/>
    <hr />
    <CalculoiMC/>
    <hr />
  </>;
}

export default App;

import Diminuir from "../src/Componentes/Diminuir/Diminuir";
import AdicionarNome from "./Componentes/AdicionarNome/AdicionarNome.jsx";
import BotaoContador from "./Componentes/BotaoContador/BotaoContador.jsx";
import CalculoiMC from "./Componentes/CalculoiMC/CalculoiMC.jsx";
import CambioDolar from "./Componentes/CambioDolar/CambioDolar";
import CambioEuro from "./Componentes/CambioEuro/CambioEuro";
import Contador from "./Componentes/Contador/Contador.jsx";
import Dividir from "./Componentes/Dividir/Dividir";
import Multiplicar from "./Componentes/Multiplicar/Multiplicar";
import RemoverNome from "./Componentes/RemoverNome/RemoverNome.jsx";
import Somar from "./Componentes/Somar/Somar.jsx";




function App() {
  return <>
    <hr />
    <BotaoContador/>
    <hr />
    <Contador/>
    <hr />
    <Somar/>
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
    <AdicionarNome/>
    <hr />
    <RemoverNome/>
    <hr />
  </>;
}

export default App;

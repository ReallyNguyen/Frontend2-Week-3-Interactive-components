import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Company from "./components/Company";
// import App from "./App";

function App() {
  return (
    <>
      <h1 className="title">My News Feed</h1>
      <Company
        image="https://placehold.co/600x400/EEE/31343C"
        link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
        title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
        name="Steve Hanley"
        description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
      />
      <Company
        image="http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
        link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
        title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
        name="Milenio Digital"
        description="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de los Estados Unidos. Algo tiene que ceder.?, señaló el multimillonario a través de su cuenta de Twitter.True national debt, including unfunded entitlements, is at least $60 trillion ? roughly three times the size of the entire US economy. Something has got to give.? Elon Musk (@elonmusk) February 11, 2022 Esto como parte de los comentarios en respuesta a una publicación del medio satírico The Babylon Bee, en donde señaló que supuestamente el presidente estadunidense, Joe Biden, planeaba pagar la deuda pública apostando ?doble o nada? en el equipo de futbol de los Cincinnati Bengals en el Super Bowl. Según el Departamento del Tesoro de Estados Unidos el total de la deuda de dicho país ya supera los 30 billones de dólares, dio a conocer el martes pasado.El endeudamiento del gobierno se aceleró durante la pandemia de covid-19, como parte del gasto del gobierno estadunidense para amortiguar el golpe económico de la crisis. La deuda pública se ha disparado en alrededor 7 billones desde finales de 2019.m{1861862}RM?"
      />
      <Company
        image="https://placehold.co/600x400/EEE/31343C"
        link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
        title="Tesla recall for heater and defroster systems issued by Transport Canada"
        name="Maria Merano"
        description="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over 2,084 Tesla vehicles were affected by the recall. The recall […] The post Tesla recall for heater and defroster systems issued by Transport Canada appeared first on TESLARATI."
      />
      <Company
        image="https://placehold.co/600x400/EEE/31343C"
        link="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
        title="China representó la mitad de las ventas globales de coches eléctricos en 2021"
        name="Newsroom Infobae"
        description="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos y los híbridos enchufables- en todo el mundo durante el año pasado, un 109 % más que en 2020, alcanzando ya un 9 % de las ventas totales de vehículos a nivel global. De la citada cantidad, más de 3,2 millones fueron en China, donde los eléctricos ya representan un 15 % de las ventas de vehículos, doblando así el porcentaje del año anterior. \"
      />
      <Company
        image="https://placehold.co/600x400/EEE/31343C"
        link="https://cleantechnica.com/2022/02/13/tesla-model-y-top-selling-suv-in-california-in-2021/"
        title="Tesla Model Y = Top Selling SUV in California in 2021"
        name="Zachary Shahan"
        description="It’s hard to believe, even as someone who has been placed firmly on the Tesla bull list for a decade, but the Tesla Model Y ended 2021 as the top selling SUV or truck in California! That is across all types of SUVs and trucks. The Model Y outsold the #2 Toyota RAV4, a much […]"
      />
      <Company
        image="https://placehold.co/600x400/EEE/31343C"
        link="https://www.teslarati.com/tesla-gigafactory-shenyang/"
        title="Tesla’s next facility in China may be located in Shenyang: local gov’t announcement"
        name="Maria Merano"
        description="On Friday, February 11, the Liaoning Province hinted that Tesla was searching for a second Gigafactory in China. One of the potential locations for Tesla’s next factory is the District of Shenyang.  Liaoning Province released an announcement on its official WeChat account. It published an article with a title roughly translating to “Five Grasps of […] The post Tesla’s next facility in China may be located in Shenyang: local gov’t announcement appeared first on TESLARATI."
      />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

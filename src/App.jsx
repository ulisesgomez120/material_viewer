import { useState } from "react";
import "./App.css";
import Sidebar from "./views/Sidebar/Sidebar";

const data = [
  {
    id: 1001,
    name: "Pentane",
    coord: [
      "C      -0.06119     -0.14438     -0.09006",
      "H      -0.06046     -0.76500      0.81047",
      "H       0.04110     -0.82551     -0.94388",
      "C       1.13633      0.80196     -0.06785",
      "H       1.04730      1.50136      0.77446",
      "H       1.16482      1.40068     -0.98213",
      "C       2.43464      0.02076      0.06562",
      "H       2.42913     -0.60381      0.96237",
      "H       3.28623      0.69990      0.13111",
      "H       2.58851     -0.63256     -0.80327",
      "C      -1.39343      0.59934     -0.18301",
      "H      -1.35021      1.39778     -0.92849",
      "H      -1.60573      1.07576      0.78352",
      "C      -2.52277     -0.35635     -0.53888",
      "H      -3.48791      0.04616     -0.21351",
      "H      -2.38991     -1.33607     -0.06587",
      "H      -2.57051     -0.50852     -1.61872",
    ],
  },
];
function App() {
  const [materials, setMaterials] = useState(data);
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  return (
    <>
      <h1>Material Viewer</h1>
      <Sidebar materials={materials} selectMaterial={setSelectedMaterial} />
    </>
  );
}

export default App;

import "./App.css";

import broccoli from "./assets/broccoli.png";
import lettuce from "./assets/lettuce.png";
import potato from "./assets/potato.png";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";

const playableItems = [
  {
    id: "1",
    name: "broccoli",
    image: broccoli,
    color: "#f9c642",
  },
  {
    id: "2",
    name: "lettuce",
    image: lettuce,
    color: "#4aa564",
  },
  {
    id: "3",
    name: "potato",
    image: potato,
    color: "#02bfe7",
  },
];

const App = () => {
  return (
    <div className="App">
      <DragAndDrop playableItems={playableItems} />
    </div>
  );
};

export default App;

import "./App.css";

import DragAndDrop from "./components/DragAndDrop/DragAndDrop";

import broccoli from "./assets/broccoli.png";
import lettuce from "./assets/lettuce.png";
import potato from "./assets/potato.png";

const playableItems = [
  {
    id: "1",
    name: "broccoli",
    image: broccoli,
    buttonBackgroundColor: "#f9c642",
  },
  {
    id: "2",
    name: "lettuce",
    image: lettuce,
    buttonBackgroundColor: "#4aa564",
  },
  {
    id: "3",
    name: "potato",
    image: potato,
    buttonBackgroundColor: "#02bfe7",
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

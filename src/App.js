import './App.css';
import DragableItems from './Components/DragableList/DragableList';
// import SortableList from './Components/SortableList';
// import { items } from './Components/data';


function App() {
  return (
    <div className="App">
      {/* <SortableList items={items}/> */}
      <DragableItems/>
    </div>
  );
}

export default App;

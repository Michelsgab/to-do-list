import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Estudar JavaScript", done: false },
    { id: 2, name: "Estudar React.js", done: false },
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To Do List</C.Header>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;

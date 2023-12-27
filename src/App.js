import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
// import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance
        title={"Your Balance"}
        value={"2,500.05"}
        size={"small"}
      />
      <DisplayBalances />
      {/* <Header as={"h3"}>History</Header> */}
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      {/* <EntryLine description={"Something"} value={"$110.00"} />
      <EntryLine description={"Something"} isExpense={true} value={"$200.00"} /> */}

      {/* <Header as={"h3"}>Add new Transaction</Header> */}
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: "$100.00",
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20.00",
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: "$200.00",
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: "$50.00",
    isExpense: true,
  },
];

export default App;

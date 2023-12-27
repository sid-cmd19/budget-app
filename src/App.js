import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
// import EntryLine from "./components/EntryLine";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpenses += Number(entry.value);
      } else {
        totalIncomes += Number(entry.value);
      }
    });
    setTotalExpense(totalExpenses);
    setTotalIncome(totalIncomes);
    setTotal(totalIncomes - totalExpenses);
    console.log(
      `Toatl expenses is ${totalExpenses} and total income is ${totalIncomes}`
    );
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`The entry id is ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title={"Your Balance"} value={total} size={"small"} />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      {/* <Header as={"h3"}>History</Header> */}
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      {/* <EntryLine description={"Something"} value={"$110.00"} />
      <EntryLine description={"Something"} isExpense={true} value={"$200.00"} /> */}

      {/* <Header as={"h3"}>Add new Transaction</Header> */}
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        setDescription={setDescription}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        setDescription={setDescription}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 100.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 200.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: 50.0,
    isExpense: true,
  },
];

export default App;

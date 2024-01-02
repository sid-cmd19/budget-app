import { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

import "./App.css";

function App() {
  //To be removed
  // const [description, setDescription] = useState("");
  // const [value, setValue] = useState("");
  // const [isExpense, setIsExpense] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);
  // const [entryId, setEntryId] = useState();
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    // eslint-disable-next-line
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

  // store.subscribe(() => {
  //   console.log("store: ", store.getState());
  // });
  // console.log("store before: ", store.getState());
  // const payload_add = {
  //   id: 5,
  //   description: "Hello from redux",
  //   value: 120,
  //   isExpense: false,
  // };

  // const payload_remove = 1;

  // store.dispatch(addEntryRedux(payload_add));
  // // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch(removeEntryRedux(payload_remove));
  // store.dispatch(removeEntryRedux(2));

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    // setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title={"Your Balance"} value={total} size={"small"} />
      <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense} />
      {/* <Header as={"h3"}>History</Header> */}
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      {/* <EntryLine description={"Something"} value={"$110.00"} />
      <EntryLine description={"Something"} isExpense={true} value={"$200.00"} /> */}

      {/* <Header as={"h3"}>Add new Transaction</Header> */}
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;

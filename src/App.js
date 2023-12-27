import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
  Form,
  Button,
} from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
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
      <EntryLine description={"Something"} value={"$20.00"} />
      <EntryLine description={"Something"} value={"$110.00"} />
      <EntryLine description={"Something"} isExpense={true} value={"$200.00"} />

      {/* <Header as={"h3"}>Add new Transaction</Header> */}
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

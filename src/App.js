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

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>$2,50,000</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Incoming
                </Statistic.Label>
                <Statistic.Value>1200</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Expenses
                </Statistic.Label>
                <Statistic.Value>600</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as={"h3"}>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <span style={{ cursor: "default" }}>|</span>
              <Icon name="trash" style={{ marginLeft: "4px" }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $200.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <span style={{ cursor: "default" }}>|</span>
              <Icon name="trash" style={{ marginLeft: "4px" }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <span style={{ cursor: "default" }}>|</span>
              <Icon name="trash" style={{ marginLeft: "4px" }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as={"h3"}>Add new Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon={"tags"}
            width={12}
            label="Description"
            placeholder="New Shinny thing"
          />
          <Form.Input
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{ margin: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Add</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;

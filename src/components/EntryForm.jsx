import React from "react";
import { Checkbox, Container, Form, Segment } from "semantic-ui-react";

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <Container>
      <Form.Group>
        <Form.Input
          icon={"tags"}
          width={12}
          label="Description"
          placeholder="New Shinny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is Expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldState) => !oldState)}
        />
      </Segment>
    </Container>
  );
};

export default EntryForm;

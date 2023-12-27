import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, description, value, isExpense }) => {
  return (
    <Button.Group style={{ margin: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(description, value, isExpense)}>
        Add
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;

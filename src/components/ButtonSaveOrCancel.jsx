import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = () => {
  return (
    <Button.Group style={{ margin: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Add</Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;

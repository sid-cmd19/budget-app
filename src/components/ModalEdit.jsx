import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  value,
  setDescription,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          setDescription={setDescription}
          setValue={setValue}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Okay
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;

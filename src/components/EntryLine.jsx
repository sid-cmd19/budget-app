import React, { useState } from "react";
import { Container, Grid, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

const EntryLine = ({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
}) => {
  return (
    <React.Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => editEntry(id)} />
              <span style={{ cursor: "default" }}>|</span>
              <Icon
                name="trash"
                style={{ marginLeft: "4px" }}
                onClick={() => deleteEntry(id)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default EntryLine;

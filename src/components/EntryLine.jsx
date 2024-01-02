import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addEntryRedux, removeEntryRedux } from "../actions/entries.actions";
import { openEditModal } from "../actions/modals.action";

const EntryLine = ({ id, description, value, isExpense = false }) => {
  const dispatch = useDispatch();
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
              <Icon name="edit" onClick={() => dispatch(openEditModal(id))} />
              <span style={{ cursor: "default" }}>|</span>
              <Icon
                name="trash"
                style={{ marginLeft: "4px" }}
                onClick={() => dispatch(removeEntryRedux(id))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  );
};

export default EntryLine;

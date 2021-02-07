import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import format from "date-fns/format";

import { EditableField } from "../common/enums";
import { ListData } from "../common/models";
import { EMPTY_INPUT, TIME_FORMAT } from "../common/constants";

interface EditModalProps {
  editing: boolean;
  selectedPost: ListData | undefined;
  authorFieldText: string;
  locationFieldText: string;

  handleTextFeildChange: (field: EditableField, value: string) => void;
  handleUpdate: (postId: number) => void;
  setEditing: (isEditing: boolean) => void;
}

const useStyles = makeStyles(theme =>
  createStyles({
    editContainer: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4, 4, 4),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "grid",
      gridRowGap: "20px"
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    field: {
      marginRight: "20px"
    },
    button: {
      marginRight: "20px"
    }
  })
);

const EditModal = (props: EditModalProps) => {
  const classes = useStyles();
  const { editing, selectedPost, authorFieldText, locationFieldText } = props;
  const { handleTextFeildChange, handleUpdate, setEditing } = props;

  return (
    <Modal
      open={editing}
      onClose={() => setEditing(false)}
      aria-labelledby="edit-modal"
      aria-describedby="modal-for-editing-info"
    >
      {selectedPost ? (
        <div className={classes.editContainer}>
          <div>
            <TextField
              className={classes.field}
              required
              label="Author"
              value={authorFieldText}
              placeholder={selectedPost.author}
              onChange={e => handleTextFeildChange(EditableField.Author, e.target.value)}
            />
            <TextField
              required
              label="Location"
              value={locationFieldText}
              placeholder={selectedPost.location}
              onChange={e => handleTextFeildChange(EditableField.Location, e.target.value)}
            />
          </div>
          <TextField
            label="Time (Read Only)"
            type="datetime-local"
            defaultValue={format(Number(selectedPost.time), TIME_FORMAT.DATETIME_LOCAL)}
            InputLabelProps={{
              shrink: true
            }}
            disabled
          />
          <TextField
            label="Text (Read Only)"
            multiline
            rows={4}
            defaultValue={selectedPost.text}
            InputProps={{
              readOnly: true
            }}
            disabled
          />
          <div className={classes.buttonGroup}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => handleUpdate(selectedPost.id)}
              disabled={authorFieldText === EMPTY_INPUT && locationFieldText === EMPTY_INPUT}
            >
              Save
            </Button>
            <Button variant="contained" color="secondary" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div>Could not find post</div>
      )}
    </Modal>
  );
};

export default EditModal;

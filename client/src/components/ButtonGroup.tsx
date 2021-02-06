import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { default as MUIButtonGroup } from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { GroupType } from "../common/enums";

interface ButtonGroupProps {
  selectedGroupType: GroupType;
  setSelectedGroupType: (groupType: GroupType) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    buttonGroupContainer: {
      display: "flex",
      justifyContent: "start",
      padding: "0 20px 20px 0"
    },
    buttonGroupTitle: {
      paddingRight: "10px",
      alignSelf: "center"
    }
  })
);

const ButtonGroup = ({ selectedGroupType, setSelectedGroupType }: ButtonGroupProps) => {
  const classes = useStyles();

  return (
    <div className={classes.buttonGroupContainer}>
      <Typography variant="subtitle1" component="h3" className={classes.buttonGroupTitle}>
        Group By:
      </Typography>
      <MUIButtonGroup color="primary" aria-label="outlined primary button group">
        {Object.values(GroupType).map(type => (
          <Button
            variant="outlined"
            key={`button-${type}`}
            disabled={type === selectedGroupType}
            onClick={() => setSelectedGroupType(type)}
          >
            {type}
          </Button>
        ))}
      </MUIButtonGroup>
    </div>
  );
};

export default ButtonGroup;

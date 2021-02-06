import React from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { default as MUITreeView } from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { ForamtedList } from "../common/models";

interface TreeViewProps {
  foramtedList: ForamtedList[];
  editing: boolean;
  handleEditing: (postId: number) => void;
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      margin: "10px 0 10px 0"
    },
    count: { padding: "0 0 8px 0" },
    cardButton: {
      justifyContent: "flex-end",
      padding: "0 20px 20px 0"
    },
    secondaryInfo: {
      textAlign: "end",
      padding: "8px 4px 0 0"
    }
  })
);

const TreeView = (props: TreeViewProps) => {
  const { foramtedList, editing } = props;
  const { handleEditing } = props;

  const classes = useStyles();

  return (
    <MUITreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
      {foramtedList.map(({ key, data }, idx) => {
        return (
          <TreeItem nodeId={`group-${key}-${idx}`} label={key} key={`group-${key}-${idx}`}>
            {data.map(({ id, text, author, location }, n) => (
              <React.Fragment key={`item-${id}`}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color="textSecondary" className={classes.count}>
                      {n + 1} / {data.length}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {text}
                    </Typography>
                    <Typography className={classes.secondaryInfo} color="textSecondary">
                      by {author} from {location}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditing(id)}
                      disabled={editing}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </React.Fragment>
            ))}
          </TreeItem>
        );
      })}
    </MUITreeView>
  );
};

export default TreeView;

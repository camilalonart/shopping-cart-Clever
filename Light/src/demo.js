import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  input: {
    height: 40,
    width: 40,
    textAlign: "center"
  }
}));

export default function DetailedExpansionPanel() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);

  return (
    <div styles={{ width: "100%" }}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <Badge color="secondary" badgeContent={count}>
            <ShoppingCartIcon />
          </Badge>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails styles={{ alignItems: "center" }}>
          <List
            styles={{
              width: "100%",
              maxWidth: "36ch",
              backgroundColor: "#1D2C41",
              color: "#1D2C41"
            }}
          >
            <ListItem
              alignItems="flex-start"
              styles={{ backgroundColor: "#1D2C41", color: "#1D2C41" }}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <ListItemText primary="Producto" secondary="Precio: $3.000" />
              <Box m={5} />
              <ButtonGroup>
                <Button
                  size="small"
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  InputProps={{
                    className: classes.input
                  }}
                  id="filled-number"
                  variant="filled"
                  onClick={() => {
                    setCount();
                  }}
                />
                <Button
                  size="small"
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
              <Box m={2} />
              <DeleteIcon color="secondary" />
            </ListItem>

            <Divider />

            <ListItem
              alignItems="flex-start"
              styles={{ backgroundColor: "#1D2C41", color: "#1D2C41" }}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <ListItemText primary="Producto" secondary="Precio: $3.000" />
              <Box m={5} />
              <ButtonGroup>
                <Button
                  size="small"
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  InputProps={{
                    className: classes.input
                  }}
                  id="filled-number"
                  variant="filled"
                  onClick={() => {
                    setCount();
                  }}
                />
                <Button
                  size="small"
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
              <Box m={2} />
              <DeleteIcon color="secondary" />
            </ListItem>

            <Divider />

            <ListItem
              alignItems="flex-start"
              styles={{ backgroundColor: "#1D2C41", color: "#1D2C41" }}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <ListItemText primary="Producto" secondary="Precio: $3.000" />
              <Box m={5} />
              <ButtonGroup>
                <Button
                  size="small"
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 0));
                  }}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <TextField
                  InputProps={{
                    className: classes.input
                  }}
                  id="filled-number"
                  variant="filled"
                  onClick={() => {
                    setCount();
                  }}
                />
                <Button
                  size="small"
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
              <Box m={2} />
              <DeleteIcon color="secondary" />
            </ListItem>
            <Divider />
          </List>
        </ExpansionPanelDetails>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          style={{ margin: -12 }}
        >
          <Typography>Total:</Typography>
          <Typography>$2000</Typography>
        </Grid>
        <ExpansionPanelActions>
          <Divider />
          <Button size="small">Cancelar</Button>
          <Button size="small" color="primary">
            Comprar
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}

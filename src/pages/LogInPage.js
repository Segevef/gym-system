import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Dropdown, DropdownButton } from "react-bootstrap";
import PropTypes from "prop-types";
import { UserServiceContext } from "../providers/UserService.provider";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function LogInPage({ onLogin }) {
  const userService = useContext(UserServiceContext);
  const styling = useStyles();
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const getUser = () => users.find(user => user._id === currentUser);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await userService.getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styling.paper}>
        <Avatar className={styling.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userID"
          label="User ID"
          name="userID"
          autoFocus
          value={currentUser || ""}
        />
        <DropdownButton
          id="dropdown-item-button"
          title="Pick user from this list"
        >
          {users ? (
            users.map(user => (
              <Dropdown.Item
                as="button"
                key={user._id}
                eventKey={user._id}
                onSelect={eventKey => {
                  setCurrentUser(eventKey);
                }}
              >
                {user.userName}
              </Dropdown.Item>
            ))
          ) : (
            <Dropdown.Item>Loading...</Dropdown.Item>
          )}
        </DropdownButton>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          disabled={currentUser === null}
          onClick={() => onLogin(getUser())}
          className={styling.submit}
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
}

LogInPage.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default LogInPage;

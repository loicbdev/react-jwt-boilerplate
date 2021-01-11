import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from "./styleFormConnection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      console.log(email, password);
    } else {
      alert("Please specify both email and password");
    }
  };

  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        type="email"
        label="Email"
        className={classes.someInput}
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        name="password"
        id="password"
        placeholder="***********"
        variant="outlined"
        className={classes.someInput}
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text="Connexion"
        color="primary"
        size="medium"
        variant="contained"
        fullWidth
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Login;

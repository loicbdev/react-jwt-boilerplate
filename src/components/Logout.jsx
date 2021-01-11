import React from "react";
import Button from "@material-ui/core/Button";

const Logout = () => {
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Disconnected successfully");
  };

  return (
    <form>
      <Button
        variant="contained"
        color="primary"
        margin="normal"
        onClick={handleSubmit}
      >
        Disconnect
      </Button>
    </form>
  );
};

export default Logout;

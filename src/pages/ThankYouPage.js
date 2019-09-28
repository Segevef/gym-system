import React from "react";
import { Link } from "react-router-dom";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";

function ThankYouPage(props) {
  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1
                className="font-weight-light"
                style={{ marginBottom: 20, marginTop: 30 }}
              >
                Thank You! You have {props.location.state.eventOccured}.
              </h1>
              <Link to="/">
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  style={{ marginBottom: 20 }}
                >
                  <NavigationIcon />
                  Back To Classes
                </Fab>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ThankYouPage;

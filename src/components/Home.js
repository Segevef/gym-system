import React from "react";
import Nav from "./Nav";
import {Route} from "react-router-dom";
import ClassesPage from "../pages/ClassesPage";
import MyClassesPage from "../pages/MyClassesPage";
import ProfilePage from "../pages/ProfilePage";
import ThankYouPage from "../pages/ThankYouPage";

function Home() {
    return (
        <div className="container-fluid">
            <Nav />
            <Route path="/" exact component={ClassesPage}/>
            <Route path="/my-classes" component={MyClassesPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/thank-you" component={ThankYouPage} />
        </div>
    );
}

export default Home;

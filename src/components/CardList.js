import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TimerIcon from "@material-ui/icons/Timer";
import PeopleIcon from "@material-ui/icons/People";

function CardList({
  name,
  description,
  price,
  duration,
  maxParticipants,
  currentParticipants,
  classId,
  instructor
}) {
  const isAvailable =
    maxParticipants > currentParticipants.length;

  return (
    <List>
      <ListItem>
        <h3>{name} Class </h3>
      </ListItem>
      <ListItem>
        <div>{description} </div>
      </ListItem>
      <ListItem>
      <ListItemIcon>
        <AttachMoneyIcon />
      </ListItemIcon>
      <div> Price: {price}</div>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <TimerIcon />
        </ListItemIcon>
        <div> Duration: {duration} Min</div>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PeopleIcon />

        </ListItemIcon>
        <div>
          {" "}
          Participants: {currentParticipants.length} / {maxParticipants}{" "}
        </div>
      </ListItem>
      <ListItem>
        <sub>By {instructor} </sub>
      </ListItem>
      <ListItem>
        <sub style={isAvailable ? { color: "green" } : {}}>
          {isAvailable ? "Is" : "Not"} available
        </sub>
      </ListItem>
    </List>
  );
}

export default CardList;

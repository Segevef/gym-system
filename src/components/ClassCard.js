import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import defaultCardImage from '../images/defaultCardImage.jpg';
import CardList from './CardList';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../providers/User.provider';
import { UserServiceContext } from '../providers/UserService.provider';
import { ClassService } from '../service/class-service';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles({
  card: {
    width: 350,
    marginLeft: 25,
    marginBottom: 15
  },
  media: {
    height: 200
  }
});


function ClassCard({
                     name,
                     description,
                     price,
                     duration,
                     maxParticipants,
                     currentParticipants,
                     classId,
                     instructor,
                     extraInfo,
                     currentPage,
                     history
                   }) {
  const styleClasses = useStyles();

  const user = useContext(UserContext);
  const userService = useContext(UserServiceContext);

  const isAvailable =
    maxParticipants > currentParticipants.length;
  const isWaitingListAvailable = () => isAvailable || currentPage === 'myClassesPage';
  const isCancelAvailable = () => currentPage === 'classesPage';
  const isBookAvailable = () => currentPage === 'myClassesPage' || !isAvailable;
  const onBook = async () => {
    try{
      await userService.bookClass(user._id, classId);
      return history.push({
        pathname: '/thank-you',
        state: {eventOccured: 'booked'}
      });
    }catch (e) {
      console.error('we had error', e);
      }
    };
  const onCancel = async () => {
    try{
      await userService.cancelClass(user._id, classId);
      return history.push({
        pathname: '/thank-you',
        state: {eventOccured: 'canceled'}
      });
  }catch (e) {
    console.error('we had error', e);
    }
  };
  const onWaitingList = async () => {
    try {
      await ClassService().addUserToWaitingList(classId, user._id);
      return history.push({
        pathname: '/thank-you',
        state: {eventOccured: 'joined the waiting list'}
      });
    } catch (e) {
      console.error('we had error', e);
    }
  };

  const onClassClicked = () => {
    
      return history.push({
        pathname: `/class-details/${classId}`,
        state: { name: name,
                description: description,
                price: price,
                duration: duration,
                maxParticipants: maxParticipants,
                currentParticipants: currentParticipants,
                classId: classId,
                instructor: instructor,
                extraInfo: extraInfo
              }
      })  
  }


  return (
    <Card className={styleClasses.card}>
      <ButtonBase onClick = {onClassClicked}>
      <CardActionArea>
        <CardMedia
          className={styleClasses.media}
          image={defaultCardImage}
          title="Contemplative Reptile"
        />
        
        <CardContent>
          <CardList
            name={name}
            description={description}
            price={price}
            duration={duration}
            maxParticipants={maxParticipants}
            currentParticipants={currentParticipants}
            instructor={instructor}
            classId={classId}
            key={classId}
          />
        </CardContent>
      </CardActionArea>
      </ButtonBase>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={isBookAvailable()}
          onClick={onBook}
        >
          Book
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={isCancelAvailable()}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={isWaitingListAvailable()}
          onClick={onWaitingList}
        >
          Waiting List
        </Button>
      </CardActions>
    </Card>
  );
}

ClassCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  maxParticipants: PropTypes.number.isRequired,
  instructor: PropTypes.string.isRequired,
  classId: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default withRouter(ClassCard);

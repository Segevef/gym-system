import React, { useState, useEffect, useContext } from 'react';
import ClassCard from '../components/ClassCard';
import { CardDeck } from 'react-bootstrap';
import { UserContext } from '../providers/User.provider';
import { UserServiceContext } from '../providers/UserService.provider';

function ClassesPage() {
  const user = useContext(UserContext);
  const userService = useContext(UserServiceContext);
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState();


  useEffect(() => {
    const fetchClasses = async () => {
      const {data} = await userService.getClasses(user._id);
      setClasses(data);
    };
    fetchClasses();

    setCurrentPage('classesPage');
  }, []);

  return (
    <div className="jumbotron">
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1>Join Classes</h1>
            </div>
          </div>
        </div>
      </header>

      <CardDeck>
        {classes.map(gymClass => (
          <ClassCard
            name={gymClass.className}
            description={gymClass.description}
            price={gymClass.price}
            duration={gymClass.duration}
            maxParticipants={gymClass.maxParticipants}
            currentParticipants={gymClass.usersIds}
            instructor={gymClass.instructorName}
            extraInfo={gymClass.extraInfo}
            classId={gymClass._id}
            key={gymClass._id}
            currentPage={currentPage}
          />
        ))}
      </CardDeck>
    </div>
  );
}

export default ClassesPage;

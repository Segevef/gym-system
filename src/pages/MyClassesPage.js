import React, { useState, useEffect, useContext } from "react";
import ClassCard from "../components/ClassCard";
import { CardDeck } from "react-bootstrap";
import { UserContext } from "../providers/User.provider";
import { UserServiceContext } from "../providers/UserService.provider";

function MyClassesPage() {
  const user = useContext(UserContext);
  const userService = useContext(UserServiceContext);
  const [myClasses, setMyClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    const fetchClasses = async () => {
      const { data } = await userService.getMyClasses(user._id);
      setMyClasses(data);
    };
    fetchClasses();
    setCurrentPage("myClassesPage");
  }, []);

  return (
    <>
      <div className="jumbotron">
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center">
                <h1>My Classes</h1>
              </div>
            </div>
          </div>
        </header>

        <CardDeck>
          {myClasses.map(gymClass => (
            <ClassCard
              name={gymClass.className}
              description={gymClass.description}
              price={gymClass.price}
              duration={gymClass.duration}
              maxParticipants={gymClass.maxParticipants}
              currentParticipants={gymClass.usersIds}
              instructor={gymClass.instructorName}
              classId={gymClass._id}
              key={gymClass._id}
              currentPage={currentPage}
            />
          ))}
        </CardDeck>
      </div>
    </>
  );
}

export default MyClassesPage;

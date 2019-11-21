import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ClassDetailsPage(props) {

    const {name, description, price, duration, maxParticipants,
         currentParticipants, classId, instructor, extraInfo} = props.location.state

    // console.log(typeof(currentParticipants));
    // console.log(currentParticipants);

  return (
    <>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light" style={{marginTop: 20}}>Profile Info</h1>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell>{name} Class Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell >Class Name: </TableCell>
                      <TableCell >{name}</TableCell>
                    </TableRow>
                  <TableRow >
                    <TableCell >Class Description: </TableCell>
                    <TableCell >{description}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Price: </TableCell>
                    <TableCell >{price}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Duration: </TableCell>
                    <TableCell >{duration}</TableCell>
                  </TableRow>
                  <TableRow > 
                    <TableCell >Max Participants </TableCell>
                    <TableCell >{maxParticipants}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Current Participants: </TableCell>
                    <TableCell >{currentParticipants.join(", ")}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Class Intructor: </TableCell>
                    <TableCell >{instructor}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Extra Info: </TableCell>
                    <TableCell >{extraInfo}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Class ID: </TableCell>
                    <TableCell >{classId}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ClassDetailsPage;

import React, { useContext } from 'react';
import { UserContext } from '../providers/User.provider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ProfilePage() {

  const user = useContext(UserContext);

  const { _id, userName, firstName, lastName, email, createdOn } = user;
  console.log(user);


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
                    <TableCell> User Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell >User Name: </TableCell>
                      <TableCell >{userName}</TableCell>
                    </TableRow>
                  <TableRow >
                    <TableCell >First Name: </TableCell>
                    <TableCell >{firstName}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Last Name: </TableCell>
                    <TableCell >{lastName}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Email: </TableCell>
                    <TableCell >{email}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Date Created: </TableCell>
                    <TableCell >{createdOn}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell >Id: </TableCell>
                    <TableCell >{_id}</TableCell>
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

export default ProfilePage;

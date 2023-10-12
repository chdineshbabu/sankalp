import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState,useEffect } from 'react';


const TABLE_HEAD = ["Name", "Email", "Leave Type", "Date", "Status",];
 
const TABLE_ROWS = [


];



 


function AdminDashBoard() {
    
    const [personList, setPersonList] = useState(null);
    const postsRef = collection(db, 'leaveApplications');
  
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    
  
    useEffect(() => {
      getPosts();
    }, []);
  return (
    <div className='w-screen p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-semibold mb-4'>Applications:</h1>
        <Card className="h-contain w-full overflow-hidden">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {personList && personList.map((post, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {post?.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {post?.emailId}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {post?.type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {post?.startDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {post?.status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  )
}

export default AdminDashBoard
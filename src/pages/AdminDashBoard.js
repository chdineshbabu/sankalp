import React, { useState, useEffect } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const TABLE_HEAD = ["Name", "Email", "Leave Type", "Date", "Status"];
const TABLE_ROWS = [];

function AdminDashboard() {
  const [personList, setPersonList] = useState(null);

  const getPosts = async () => {
    const data = await getDocs(collection(db, 'leaveApplications'));
    setPersonList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const handleSave = async (id, status) => {
    try {
      await updateDoc(doc(db, 'leaveApplications', id), { status });
  
      window.alert('Document updated successfully');
  
    } catch (error) {
      console.error("Error updating document:", error);
      window.alert('Error updating document. Please try again later.');
    }
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
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
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
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {post?.name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {post?.emailId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {post?.type}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {post?.startDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <select
                        id="type"
                        name="type"
                        value={post.status} // Bind the status value to the dropdown
                        onChange={(e) => {
                          const newStatus = e.target.value;
                          const updatedPersonList = [...personList];
                          updatedPersonList[index].status = newStatus;
                          setPersonList(updatedPersonList);
                        }}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                      >
                        <option value="Approve">Approve</option>
                        <option value="Reject">Reject</option>
                        <option value="Make Pending">Make Pending</option>
                      </select>
                    </Typography>
                  </td>
                  <td>
                    <button
                      className='bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-0 px-2 border border-blue-500 hover:border-transparent rounded'
                      onClick={() => handleSave(post.id, post.status)}
                    >
                      Save
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";

function LeaveForm() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div className='w-1/2 p-6 bg-white rounded-lg shadow-md'>
            <h1 className='text-2xl font-semibold mb-4'>Leave Application</h1>
            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold text-sm mb-2">Leave Type:</label>
                <select
                    id="type"
                    name="type"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                >
                    <option>Casual Leave (CL)</option>
                    <option>Earned Leave (EL)</option>
                    <option>Vacation Leave (VL)</option>
                    <option>Sick Leave (SL)</option>
                    <option>On-Duty Leave (OD)</option>
                    <option>Compensatory Off (CO)</option>
                    <option>Maternity Leave (ML)</option>
                </select>
            </div>
            <div className='mb-4'>
                <label className="block text-gray-700 font-bold text-sm mb-2">Date From-To:</label>
                <div className='border-2 rounded-md p-3'>
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                    />
                </div>
            </div>
            <div className='mb-4'>
                <label htmlFor="about" className="block text-gray-700 font-bold text-sm mb-2">Description:</label>
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                />
            </div>
            <button
                className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md py-2 px-4 font-semibold focus:outline-none focus:ring focus:ring-indigo-400"
            >
                Submit
            </button>
        </div>
    );
}

export default LeaveForm;

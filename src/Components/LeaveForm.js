import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth';

function LeaveForm() {

    const [user] = useAuthState(auth);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (newStartDate) => {
        setStartDate(newStartDate);
    };

    const handleEndDateChange = (newEndDate) => {
        setEndDate(newEndDate);
    };

    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Leave Type is required'),
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date()
            .when('startDate', (startDate, schema) => {
                return startDate
                    ? schema.required('End Date is required').min(startDate, 'End Date must be after or equal to Start Date')
                    : schema;
            }),
        description: Yup.string().required('Description is required'),
    });
    

    const formik = useFormik({
        initialValues: {
            type: 'Casual Leave (CL)',
            startDate: new Date(), // Provide a default date
            endDate: new Date(), // Provide a default date
            description: '',
            status:'submitted'
        },
        validationSchema,
        onSubmit: async (values) => {
            // Check if startDate and endDate are not null
            if (values.startDate && values.endDate) {
                try {
                    const postsRef = collection(db, 'leaveApplications');
                    await addDoc(postsRef, {

                        type: values.type,
                        startDate: values.startDate.toISOString(),
                        endDate: values.endDate.toISOString(),
                        description: values.description,
                        name:user?.displayName,
                        emailId:user?.email,
                        status:values.status
                        
                    });
    
                    console.log('Leave application submitted to Firestore');
                    // You can add further actions after successful submission
                } catch (error) {
                    console.error('Error submitting leave application to Firestore:', error);
                    // Handle the error as needed
                }
            } else {
                console.error('Start Date and End Date must not be null.');
                // Handle this case as needed, e.g., show an error message to the user.
            }
        },
    });
    

    return (
        <div className='w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md'>
            <h1 className='text-2xl font-semibold mb-4'>Leave Application</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold text-sm mb-2">Leave Type:</label>
                    <select
                        id="type"
                        name="type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                    >
                        <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                        <option value="Earned Leave (EL)">Earned Leave (EL)</option>
                        <option value="Vacation Leave (VL)">Vacation Leave (VL)</option>
                        <option value="Sick Leave (SL)">Sick Leave (SL)</option>
                        <option value="On-Duty Leave (OD)">On-Duty Leave (OD)</option>
                        <option value="Compensatory Off (CO)">Compensatory Off (CO)</option>
                        <option value="Maternity Leave (ML)">Maternity Leave (ML)</option>
                    </select>
                    {formik.touched.type && formik.errors.type && <div className="text-red-500">{formik.errors.type}</div>}
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold text-sm mb-2">Start Date:</label>
                    <div className='border-2 rounded-md p-3'>
                        <DatePicker
                            selected={startDate}
                            onChange={date => handleStartDateChange(date)}
                            dateFormat="MM/dd/yyyy" // Customize the date format
                        />
                    </div>
                    {formik.touched.startDate && <div className="text-red-500">{formik.errors.startDate}</div>}
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 font-bold text-sm mb-2">End Date:</label>
                    <div className='border-2 rounded-md p-3'>
                        <DatePicker
                            selected={endDate}
                            onChange={date => handleEndDateChange(date)}
                            dateFormat="MM/dd/yyyy" // Customize the date format
                        />
                    </div>
                    {formik.touched.endDate && <div className="text-red-500">{formik.errors.endDate}</div>}
                </div>
                <div className='mb-4'>
                    <label htmlFor="description" className="block text-gray-700 font-bold text-sm mb-2">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        rows={3}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
                    />
                    {formik.touched.description && formik.errors.description && <div className="text-red-500">{formik.errors.description}</div>}
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 text-white hover.bg-indigo-700 rounded-md py-2 px-4 font-semibold focus.outline-none focus.ring focus.ring-indigo-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LeaveForm;

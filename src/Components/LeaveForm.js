import React, { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LeaveForm() {
    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Leave Type is required'),
        date: Yup.object().shape({
            startDate: Yup.date().required('Start Date is required'),
            endDate: Yup.date()
                .required('End Date is required')
                .min(Yup.ref('startDate'), 'End Date must be after Start Date'),
        }),
        description: Yup.string().required('Description is required'),
    });

    const formik = useFormik({
        initialValues: {
            type: 'Casual Leave (CL)',
            date: {
                startDate: new Date(),
                endDate: new Date().setMonth(11),
            },
            description: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log('Form submitted with values:', values);
        },
    });

    return (
        <div className='w-1/2 p-6 bg-white rounded-lg shadow-md'>
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
                    <label className="block text-gray-700 font-bold text-sm mb-2">Date From-To:</label>
                    <div className='border-2 rounded-md p-3'>
                        <Datepicker
                            value={formik.values.date}
                            onChange={(newValue) => formik.setFieldValue('date', newValue)}
                        />
                    </div>
                    {formik.touched.date && formik.errors.date && <div className="text-red-500">{formik.errors.date.startDate || formik.errors.date.endDate}</div>}
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
                    className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md py-2 px-4 font-semibold focus:outline-none focus:ring focus:ring-indigo-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LeaveForm;

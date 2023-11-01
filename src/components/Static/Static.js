import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const Static = () => {
   const loadedData = useLoaderData();
   const data = loadedData.data;
  


    return (
       
        <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
        
    );
};

export default Static;
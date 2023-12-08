import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowOneItem from './showOne.jsx'
import Delete from './deletProduct.jsx';
import GetAll from './allProduct.jsx'
import Post from './postProduct.jsx'
import Put from './putProduct.jsx'
import StudentInfo from './studentInfo.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
      <div>
        {/* Navigation Bar link to the module */}
        <nav>
          <ul>
            <li>
              <Link to="/get">See All Products</Link>
            </li>
            <li>
              <Link to="/getid">Get by Id</Link>
            </li>
            <li>
              <Link to="/post">Add A Product</Link>
            </li>
            <li>
              <Link to="/delete">Delete a Product</Link>
            </li>
            <li>
              <Link to="/put">Edit a Product</Link>
            </li>
            <li>
              <Link to="/studentInfo">Student Info</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Routes: map a path to a module */}
      <Routes>
        <Route path="/get" element={<GetAll />} />
        <Route path="/getid" element={<ShowOneItem />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/post" element={<Post />} />
        <Route path="/put" element={<Put />} />
        <Route path="/studentInfo" element={<StudentInfo />} />
      </Routes>
    </Router>
);


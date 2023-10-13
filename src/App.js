import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={5} country={'in'} category='sports'/>}/>
          <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={5} country={'in'} category='general'/>}/>
          <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={5} country={'in'} category='business'/>}/>
          <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={5} country={'in'} category='entertainment'/>}/>
          <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={5} country={'in'} category='science'/>}/>
          <Route path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={5} country={'in'} category='general'/>}/>
          <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={5} country={'in'} category='technology'/>}/>
          <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={5} country={'in'} category='health'/>}/>
        </Routes>
      </Router>
      </>
    )
}


export default  App;
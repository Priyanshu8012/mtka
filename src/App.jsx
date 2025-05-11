import React from 'react';
import DpBossClone from "./components/Dpboss";
import DpbossChart from './components/DpbossChart';
import Satta from './components/Satta'
import WeeklyTable from './components/WeeklyTable';
import ChartList from './components/ChartList';
import './index.css';
import F from "./components/F";
import Button from "./components/Button"

function App() {
  return (
    <>
      <DpBossClone />
      <DpbossChart/>
     <Satta />
     <WeeklyTable />
     <ChartList />
     <F />
     <Button />
    
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import AgileGuide from './components/AgileGuide';
import StandardForProjectManagement from './components/StandardForProjectManagement';
import ProjectManagementDomains from './components/ProjectManagementDomains';
import ModelsMethodsAndArtifacts from './components/ModelsMethodsAndArtifacts';
import ProcessGroups from './components/ProcessGroups';
import Terminology from './components/Terminology';

function App() {

  const [topic, setTopic] = useState(1);

  function useTab(tabNumber) {
    setTopic(tabNumber);
    Array.from(document.getElementsByClassName('tabBtn')).forEach(
      (el) => {
        el.className = 'tabBtn btn btn-outline-secondary fw-medium';
      }
    );
    let thisElementId = 'btn' + tabNumber;
    document.getElementById(thisElementId).className = 'tabBtn btn btn-primary fw-medium';
  }

  return (
    <div>
      <header className='px-4 my-4 text-center'>
        <h1 className='display-6 fw-normal'>Project Management - PMP</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4 fw-normal'>Learn the essentials of Project Management and prepare for PMP certification test.</p>
        </div>
      </header>

      <nav className='px-4 my-4 text-center sticky-top'>
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center topics'>
          <button type='button' className='tabBtn btn btn-primary fw-medium' onClick={() => useTab(1)} id='btn1'>Terminology</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(2)} id='btn2'>Process Groups</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(3)} id='btn3'>Standard</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(4)} id='btn4'>Domains</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(5)} id='btn5'>Models & Methods</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(6)} id='btn6'>Agile Guide</button>
          <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(9)} id='btn9'>View All</button>
        </div>
      </nav>

      <div className='px-4 my-5'>
        {(topic === 1 || topic === 9) && <Terminology />}
        {(topic === 2 || topic === 9) && <ProcessGroups />}
        {(topic === 3 || topic === 9) && <StandardForProjectManagement />}
        {(topic === 4 || topic === 9) && <ProjectManagementDomains />}
        {(topic === 5 || topic === 9) && <ModelsMethodsAndArtifacts />}
        {(topic === 6 || topic === 9) && <AgileGuide />}
      </div>

      <footer className='border-top'>
        <div className='px-4 my-4 text-center'>
          <div className='col-lg-12 mx-auto text-body-secondary'>
            <p className='mb-4'>© 2024 Project Management Institute (<a href='https://www.pmi.org/' target='_blank'>PMI</a>) and Divyesh Jani. Images credit <a href='https://www.pmi.org/standards/' target='_blank'>PMI books and resources</a> including PMBOK 6<sup>th</sup> and 7<sup>th</sup> Edition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

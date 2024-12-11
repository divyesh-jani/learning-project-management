import { useState } from 'react';
import './App.css'
import AgileGuide from './components/AgileGuide';
import StandardForProjectManagement from './components/StandardForProjectManagement';
import ProjectManagementDomains from './components/ProjectManagementDomains';
import ModelsMethodsAndArtifacts from './components/ModelsMethodsAndArtifacts';
import ProcessGroups from './Components/processGroups';

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
      <div className='px-4 my-4 text-center'>
        <h1 className='display-5 text-body-emphasis fw-normal'>Project Management - PMP</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4 fw-normal'>Learn the essentials of Project Management and prepare for PMP certification test.</p>
        </div>
      </div>

      <div className='px-4 my-4 text-center sticky-top'>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center sticky-top stickyTopics'>
            <button type='button' className='tabBtn btn btn-primary fw-medium' onClick={() => useTab(1)} id='btn1'>Process Groups</button>
            <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(2)} id='btn2'>Standards</button>
            <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(3)} id='btn3'>Domains</button>
            <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(4)} id='btn4'>Models & Methods</button>
            <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(5)} id='btn5'>Agile Guide</button>
            <button type='button' className='tabBtn btn btn-outline-secondary fw-medium' onClick={() => useTab(6)} id='btn6'>View All</button>
          </div>
      </div>

      <div className='px-4 my-5'>
        {(topic === 1 || topic === 6) && <ProcessGroups />}
        {(topic === 2 || topic === 6) && <StandardForProjectManagement />}
        {(topic === 3 || topic === 6) && <ProjectManagementDomains />}
        {(topic === 4 || topic === 6) && <ModelsMethodsAndArtifacts />}
        {(topic === 5 || topic === 6) && <AgileGuide />}
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useEffect } from 'react';
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

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }, []);

  return (
    <div>
      <header className='px-4 my-4 text-center'>
        <h1 className='display-6 fw-normal'>Project Management - PMP</h1>
        <div className='col-lg-10 mx-auto'>
          <p className='lead mb-4 fw-normal'>Learn the essentials of Project Management and prepare for PMP certification test.</p>
        </div>
      </header>

      <nav className='px-4 my-4 text-center sticky-top'>
        <div className='d-grid gap-2 d-md-flex justify-content-md-center topics'>
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
          <ul className="nav justify-content-center mb-3 alignItemsCenter">
            <li className="nav-item mx-1 px-1"><a href="https://linkedin.com/in/divyeshjani/" target="_blank" data-bs-toggle="tooltip" data-bs-title="Connect on LinkedIn" data-bs-custom-class="custom-bs-tooltip"><img src="https://divyeshjani.github.io/shared/img/linkedin.png" className="nav-link px-2 text-body-secondary social" alt="LinkedIn" /></a></li>
            <li className="nav-item mx-1 px-1"><a href="https://github.com/divyesh-jani/" target="_blank" data-bs-toggle="tooltip" data-bs-title="Github Account" data-bs-custom-class="custom-bs-tooltip"><img src="https://divyeshjani.github.io/shared/img/github.png" className="nav-link px-2 text-body-secondary social" alt="Github" /></a></li>
            <li className="nav-item mx-1 px-1"><a href="https://divyeshjani.com" target="_blank" data-bs-toggle="tooltip" data-bs-title="Divyesh Jani Portfolio" data-bs-custom-class="custom-bs-tooltip"><img src="https://divyeshjani.github.io/shared/img/favicon.png" className="nav-link px-2 text-body-secondary social-lg" alt="DivyeshJani.com" /></a></li>
            <li className="nav-item mx-1 px-1"><a href="mailto:contact.djani@gmail.com?subject=Hello from your website" data-bs-toggle="tooltip" data-bs-title="Email Divyesh" data-bs-custom-class="custom-bs-tooltip"><img src="https://divyeshjani.github.io/shared/img/email.png" className="nav-link px-2 text-body-secondary social" alt="Email" /></a></li>
            <li className="nav-item mx-1 px-1"><a href="https://divyesh.org" target="_blank" data-bs-toggle="tooltip" data-bs-title="Donate" data-bs-custom-class="custom-bs-tooltip"><img src="https://divyeshjani.github.io/shared/img/donate.png" className="nav-link px-2 text-body-secondary social" alt="Divyesh.org" /></a></li>
          </ul>
          <div className='col-lg-12 mx-auto text-body-secondary'>
            <p className='mb-4'>© 2024-2026 Project Management Institute (<a href='https://www.pmi.org/' target='_blank'>PMI</a>) and Divyesh Jani. Images credit <a href='https://www.pmi.org/standards/' target='_blank'>PMI books and resources</a> including PMBOK 6<sup>th</sup> and 7<sup>th</sup> Edition.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

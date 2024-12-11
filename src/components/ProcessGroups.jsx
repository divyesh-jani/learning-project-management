export default function ProcessGroups() {
  return (
    <div>
      <h3 className='text-center display-6 fw-normal'>Process Groups</h3>

      <p><strong>Project Management Process Groups</strong>:</p>
      <ol>
        <li>Initiating - obtaining authorization to start a project</li>
        <li>Planning - establish scope, refine objectives, define course of action</li>
        <li>Executing - processes performed to complete the work defined in Project Management Plan</li>
        <li>Monitoring and Controlling - track, review, and regulate the progress and performance of project, identify and initiate changes if required</li>
        <li>Closing - formally close or complete the project, phase, or contract</li>
      </ol>
      <figure className='figure'>
        <img src='./src/assets/groups/process-groups.png' className='figure-img img-fluid rounded' alt='Process Groups and Project Management Processes' />
      </figure>
      <p><strong>Project Charter</strong> is document issued by project sponsor that formally authorizes existence of project and provides project manager with authority to apply organizational resources to project activities.</p>
      <p><strong>Project Management Plan</strong> is document that describes how the project will be executed, monitored, and controlled. Integrates and consolidates all subsidiary management plans (scope, schedule, resource, risk, stakeholder, etc.)</p>
      <p><strong>Baselines</strong>:</p>
      <ul>
        <li>Scope - approved version of scope statement, Work Breakdown Structure (WBS), and associated WBS dictionary</li>
        <li>Schedule - approved version of schedule model</li>
        <li>Cost - approved version of time-phased project budget, excluding any management reserves</li>
      </ul>
      <figure className='figure'>
        <img src='./src/assets/groups/plan-and-documents.png' className='figure-img img-fluid rounded' alt='Project Management Plan and Project Documents' />
      </figure>
      <p><strong>Project Success Measures</strong>:</p>
      <ul>
        <li>NPV (Net Present Value)</li>
        <li>ROI (Return on Investment)</li>
        <li>IRR (Internal Rate of Return)</li>
        <li>PBP (Payback Period)</li>
        <li>BCR (Benefit-cost Ratio)</li>
      </ul>
      <p><strong>Project Management Office (PMO)</strong> is an organizational structure that standardizes the project related governance processes and facilitates the sharing of resources, methodologies, tools, and techniques. PMO is liaison between organization's portfolios, programs, projects, and organizational management systems. There are 3 types of PMO based on degree of control and influence - Supportive, Controlling, and Directive.</p>
      <p><strong>Project Manager</strong> is the person assigned by performing organization to lead the team responsible for achieving project objectives. Project Manager performs communication roles between project sponsor, team members, and other stakeholders. Must balance conflicting and competing goals of project stakeholders in order to achieve consensus.</p>
      <p><strong>Functional Manager</strong> focuses on providing management oversight for a function or business unit.</p>
      <p><strong>Operations Manager</strong> is responsible for ensuring that business operations are efficient.</p>
      <p><strong>Stakeholder</strong> is an individual, group, or organization that may affect, be affected, or perceive to be affected by decision, activity, or outcome of a project. Stakeholders may be internal or external to the project, and they may be actively involved, passively involved, or unaware of the project. They may have positive or negative impact on the project, or may be positively or negatively impacted by the project.</p>




    </div>
  );
}
import Process from './Process';

export default function ProcessGroups() {
  return (
    <div>
      <h3 className='text-center'>Process Groups</h3>

      <p><strong>Project Management Process Groups</strong>:</p>
      <ol>
        <li>Initiating - obtaining authorization to start a project</li>
        <li>Planning - establish scope, refine objectives, define course of action</li>
        <li>Executing - processes performed to complete the work defined in Project Management Plan</li>
        <li>Monitoring and Controlling - track, review, and regulate the progress and performance of project, identify and initiate changes if required</li>
        <li>Closing - formally close or complete the project, phase, or contract</li>
      </ol>
      <figure className='figure'>
        <img src='assets/groups/process-groups.png' className='figure-img img-fluid rounded' alt='Process Groups and Project Management Processes' />
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
        <img src='assets/groups/plan-and-documents.png' className='figure-img img-fluid rounded' alt='Project Management Plan and Project Documents' />
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

      <h4>Initiating Process Group</h4>
      <Process index='1' name='Develop Project Charter' description='Process of creating a formal record of the project and provides link between project and strategic objectives of the organization.' image='i1' />
      <Process index='2' name='Identify Stakeholders' description='Process of identifying stakeholders and analyzing and documenting relevant information regarding their interests, involvements, interdependencies, influence, and potential impact on project success. This is performed periodically throughout the project as needed.' image='i2' />

      <h4>Planning Process Group</h4>
      <Process index='1' name='Develop Project Management Plan' description='Process of defining, preparing, and coordinating all plan components and consolidating them into integrated Project Management Plan. This Project Management Plan defines how the project is executed, monitored, controlled, and closed. This plan should be robust enough to respond to an ever-changing project environment.' image='p1' />
      <Process index='2' name='Plan Scope Management' description='Process of creating a Scope Management Plan that documents how the project and product scope will be defined, validated, and controlled.' image='p2' />
      <Process index='3' name='Collect Requirements' description='Process of determining, documenting, and managing stakeholder needs and requirements to meet objectives. This provides the basis for defining product scope or project scope.' image='p3' />
      <Process index='4' name='Define Scope' description='Process of developing a detailed description of the project and product. A key benefit is that this process describes acceptance criteria.' image='p4' />
      <Process index='5' name='Create WBS' description='Process of subdividing project deliverables and project work into smaller, more manageable components. Provides a framework for what has to be delivered. WBS is hierarchical decomposition of the total scope of work.' image='p5' />
      <Process index='6' name='Plan Schedule Management' description='Process of establishing policies, procedures, and documentation for planning, developing, managing, executing, and controlling the project schedule.' image='p6' />
      <Process index='7' name='Define Activities' description='Process of identifying and documenting specific actions to be performed to produce project deliverables.' image='p7' />
      <Process index='8' name='Sequence Activities' description='Process of identifying and documenting relationships among project activities. Defines the logical sequence of work to obtain the greatest efficiency given all project constraints. Every activity except the first and last should be connected to at least one predecessor and at least one successor activity.' image='p8' />
      <Process index='9' name='Estimate Activity Durations' description='Process of estimating the number of work periods needed to complete individual activities with estimated resources. This process provides the amount of time each activity will take to complete.' image='p9' />
      <Process index='10' name='Develop Schedule' description='Process of analyzing activity sequences, durations, resource requirements, and schedule constraints to create a schedule model for project execution and monitoring and controlling. This process generates a schedule model with planned dates for completing project activities. Developing an acceptable project schedule is an iterative process.' image='p10' />
      <Process index='11' name='Plan Cost Management' description='Process of defining how the project costs will be estimated, budgeted, managed, monitored, and controlled. This process provides guidance and direction on how the project costs will be managed throughout the project.' image='p11' />
      <Process index='12' name='Estimate Costs' description='Process of developing an estimation of cost of resources needed to complete project work. This process determines the monetary resources required for the project. Cost estimates may be presented at activity level or in summary form.' image='p12' />
      <Process index='13' name='Determine Budget' description='Process of aggregating estimated costs of individual activities or work packages to establish an authorized cost baseline. This process determines the cost baseline against which the project performance can be monitored or controlled.' image='p13' />
      <Process index='14' name='Plan Quality Management' description='Process of identifying quality requirements and/or standards for the project and its deliverables. This process documents how the project will demonstrate compliance with quality standards. This process also provides guidance and direction on how quality will be managed and verified throughout the project. Quality planning should be performed in parallel with other planning processes.' image='p14' />
      <Process index='15' name='Plan Resource Management' description='Process of defining how to estimate, acquire, manage, and use team and physical resources. This process establishes the approach and level of management effort needed for managing project resources based on type and complexity of the project. Resource planning is used to determine and identify an approach to ensure that sufficient resources are available for successful completion of the project.' image='p15' />
      <Process index='16' name='Estimate Activity Resources' description='Process of estimating team resources and the types and quantities of materials, equipment, and supplies necessary to perform project work.' image='p16' />
      <Process index='17' name='Plan Communications Management' description='Process of developing an appropriate approach and plan for project communications activities based on the information needs of stakeholders, available organizational assets, and needs of the project. Key benefit of this process is a documented approach to effectively and efficiently engage stakeholders by presenting relevant information in a timely manner.' image='p17' />
      <Process index='18' name='Plan Risk Management' description='Process of defining how to conduct risk management activities for a project. This process should begin when a project is conceived and should be completed early in the project. It may also be necessary to revisit this process later in project life cycle if anything changes or requires modification.' image='p18' />
      <Process index='19' name='Identify Risks' description='Process of identifying individual project risks as well as sources of overall project risk and documenting their characteristics. This brings together information so the project team can respond appropriately to identified risks. Identifying risk is an iterative process since new risks may emerge any time through project life cycle.' image='p19' />
      <Process index='20' name='Perform Qualitative Risk Analysis' description='Process of prioritizing individual project risks for further analysis or action by assessing their probability of occurrence and impact as well as other characteristics. Key benefit of this process is it focuses efforts on high-priority risks. This process also establishes the relative priorities of individual project risks for Plan Risk Responses.' image='p20' />
      <Process index='21' name='Perform Quantitative Risk Analysis' description='Process of numerically analyzing the combined effect of identified individual project risks and other sources of uncertainty on overall project objectives. This process quantifies overall project risk exposure, and can provide information to support risk response planning.' image='p21' />
      <Process index='22' name='Plan Risk Responses' description='Process of developing options, selecting strategies, and agreeing on actions to address overall project risk exposure as well as to treat individual project risks. Effective and appropriate risk responses can minimize individual threats, maximize individual opportunities, and reduce overall project risk exposure. A contingency plan (fallback plan) can be developed for implementation if the selected strategy turns out not to be fully effective or if an accepted risk occurs.' image='p22' />
      <Process index='23' name='Plan Procurement Management' description='Process of documenting project procurement decisions, specifying the approach, and identifying potential sellers. The requirements of project schedule can significantly influence the strategy during this process.' image='p23' />
      <Process index='24' name='Plan Stakeholder Engagement' description='Process of developing approaches to involve project stakeholders based on their needs, expectations, interests, and potential impact on the project. Stakeholder Engagement Plan is updated regularly to reflect changes to the stakeholder community.' image='p24' />

      <h4>Executing Process Group</h4>
      <Process index='1' name='Direct and Manage Project Work' description='Process of leading and performing the work defined in project management plan and implementing approved changes to achieve objectives of the project.' image='e1' />
      <Process index='2' name='Manage Project Knowledge' description='Process of using existing knowledge and creating new knowledge to achieve objectives of the project and contribute to organizational learning. Leverage prior organizational knowledge to produce or improve project outcomes. Knowledge can be explicit (can be readily codified using words, pictures, or numbers) or tacit (personal, difficult to express).' image='e2' />
      <Process index='3' name='Manage Quality' description='Process of translating quality management plan into executable quality activities that incorporate quality policies of the organization into the project. This process is performed throughout the project. This process uses data from Control Quality process to reflect the overall quality status of the project to stakeholders. Manage Quality is also called Quality Assurance. Manage Quality is considered the work of Everybody.' image='e3' />
      <Process index='4' name='Acquire Resources' description='Process of obtaining team members, facilities, equipment, materials, supplies, and other resources necessary to complete project work. This is performed periodically throughout the project as needed. Resources can internal or external to the project-performing organization.' image='e4' />
      <Process index='5' name='Develop Team' description='Process of improving competencies, team member interaction, and overall team environment to enhance project performance. This results in improved teamwork, enhanced interpersonal skills and competencies, motivated employees, reduced attrition, and improved overall project performance. Process performed throughout the project.' image='e5' />
      <p>High Performing teams</p>
      <ul>
        <li>Use open and effective communication</li>
        <li>Create team-building opportunities</li>
        <li>Develop trust among team members</li>
        <li>Manage conflicts in constructive manner</li>
        <li>Encourage collaborative problem solving</li>
        <li>Encourage collaborative decision making</li>
      </ul>
      <p><strong>Tuckman Ladder</strong> - 5 stages of development that teams go through</p>
      <ul>
        <li>Forming: team members meet and learn about project and their roles and responsibilities</li>
        <li>Storming: begin to address project work, technical decisions. Environment can be counterproductive if team members are not collaborative</li>
        <li>Norming: team members begin to work together and adjust their work habits and behaviors to support the team</li>
        <li>Performing: teams work as well organized unit. Work through issues smoothly and effectively</li>
        <li>Adjourning: team completes the work and moves on from project</li>
      </ul>
      <Process index='6' name='Manage Team' description='Process of tracking team member performance, providing feedback, resolving issues, and managing team changes to optimize project performance.' image='e6' />
      <Process index='7' name='Manage Communications' description='Process of ensuring timely and appropriate collection, creating, distribution, storage, retrieval, management, monitoring, and the ultimate disposition of project information.' image='e7' />
      <Process index='8' name='Implement Risk Responses' description='Process of implementing agreed upon risk response plans. This process is performed throughout the project.' image='e8' />
      <Process index='9' name='Conduct Procurements' description='Process of obtaining seller responses, selecting a seller, and awarding a contract. This process selects a qualifies seller and implements legal agreement for delivery.' image='e9' />
      <Process index='10' name='Manage Stakeholder Engagement' description='Process of communicating and working with stakeholders to meet their needs and expectations, address issues, and foster appropriate stakeholder involvement.' image='e10' />

      <h4>Monitoring and Controlling Process Group</h4>
      <Process index='1' name='Monitor and Control Project Work' description='Process of tracking, reviewing, and reporting the overall progress to meet the performance objectives defined in project management plan. This allows stakeholders to understand the current state the project, and have visibility into future project status with cost and schedule forecasts.' image='m1' />
      <Process index='2' name='Perform Integrated Change Control' description='Process of reviewing all change requests, approving changes and managing changes to deliverables, project documents, and the project management plan, and communicating the decisions. This is conducted from project start through completion and is the ultimate responsibility of project manager. Changes do not go through this process before baselines are established, but this process is necessary after project is baselined.' image='m2' />
      <Process index='3' name='Validate Scope' description='Process of formalizing acceptance of the completed project deliverables. This process increases the probability of final product (or service or result) acceptance by validating each deliverable.' image='m3' />
      <p>Validate Scope process is primarily concerned with acceptance of the deliverables while Control Quality process is primarily concerned with correctness of the deliverables and meeting the quality requirements specified for the deliverables. Control Quality is generally performed before Validate Scope, although the two processes may be performed in parallel.</p>
      <Process index='4' name='Control Scope' description='Process of monitoring the status of project and product scope and managing changes to the scope baseline.' image='m4' />
      <Process index='5' name='Control Schedule' description='Process of monitoring the status of project to update the project schedule and managing changes to schedule baseline.' image='m5' />
      <Process index='6' name='Control Costs' description='Process of monitoring the status of the project to update project costs and managing changes to the cost baseline.' image='m6' />
      <Process index='7' name='Control Quality' description='Process of monitoring and recording results of executing the quality management activities to assess performance and ensure project outputs are complete, correct, and meet customer expectations. This process determines if the project outputs do what they were intended to do.' image='m7' />
      <Process index='8' name='Control Resources' description='Process of ensuring that the physical resources assigned and allocated to the project are available as planned, and monitoring planned versus actual utilization of resources and taking corrective action as necessary.' image='m8' />
      <Process index='9' name='Monitor Communications' description='Process of ensuring the information needs of the project and its stakeholders are met.' image='m9' />
      <Process index='10' name='Monitor Risks' description='Process of monitoring the implementation of agreed-upon risk response plans, tracking identified risks, identifying and analyzing new risks, and evaluating risk process effectiveness throughout the process.' image='m10' />
      <Process index='11' name='Control Procurements' description='Process of managing procurement relationships, monitoring contract performance and making changes and corrections as appropriate, and closing out contracts. This ensures performance of both the seller and the buyer meet requirements of the project according to the legal agreement. Agreements can be amended at any time prior to contract closure my mutual consent in accordance with the change control terms of the agreement.' image='m11' />
      <Process index='12' name='Monitor Stakeholder Engagement' description='Process of monitoring project stakeholder relationships and tailoring strategies for engaging stakeholders through the modification of engagement strategies and plans.' image='m12' />

      <h4>Closing Process Group</h4>
      <Process index='1' name='Close Project or Phase' description='Process performed to formally complete or close a project, phase, or contract. This process group may also address early closure of the project, for example, aborted or canceled projects.' image='c1' />
      <p>When closing a project, the Project Manager reviews project management plan to ensure all project work is completed and that the project has met its objectives.</p>
      <p>Examples of actions necessary to satisfy completion criteria for a phase or project:</p>
      <ul>
        <li>All documents and deliverables are up to date and all issues are resolved</li>
        <li>Confirm the delivery and formal acceptance of deliverables by the customer</li>
        <li>Ensure all costs are charged to the project</li>
        <li>Close project accounts</li>
        <li>Reassign personnel</li>
        <li>Reallocate project facilities, equipment, and other resources</li>
        <li>Audit project success or failure</li>
        <li>Manage knowledge sharing and transfer</li>
        <li>Identify lessons learnt</li>
        <li>Archive project information for future use by the organization</li>
        <li>Actions and activities to measure stakeholder satisfaction</li>
      </ul>

    </div>
  );
}
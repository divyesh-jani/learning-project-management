export default function AgileGuide() {
  return (
    <div>
      <h3 className='text-center'>Agile Guide</h3>

      <figure className='figure'>
        <img src='assets/agile/agile-guide.png' className='figure-img img-fluid rounded' alt='Agile Guide' />
      </figure>
      <h4>Life Cycle Selection</h4>
      <h6>Predictive Life Cycle</h6>
      <p>A more traditional approach, with the bulk of planning occurring upfront, then executing in a single pass; a sequential process.</p>
      <h6>Iterative Life Cycle</h6>
      <p>An approach that allows feedback for unfinished work to improve and modify that work.</p>
      <h6>Incremental Life Cycle</h6>
      <p>An approach that provides finished deliverables that the customer may be able to use immediately.</p>
      <h6>Agile Life Cycle</h6>
      <p>An approach that is both iterative and incremental to refine work items and deliver frequently.</p>
      <figure className='figure'>
        <img src='assets/agile/life-cycle-comparison.png' className='figure-img img-fluid rounded' alt='Life Cycle Characteristics Comparison' />
      </figure>

      <h4>Agile Values and Principles</h4>
      <p>Agile values and principles as declared in <a href="https://agilemanifesto.org/" target="_blank">Agile Manifesto</a> in 2001:</p>
      <h5>Values</h5>
      <ul>
        <li><strong>Individuals and interactions</strong> over processes and tools</li>
        <li><strong>Working software</strong> over comprehensive documentation</li>
        <li><strong>Customer collaboration</strong> over contract negotiation</li>
        <li><strong>Responding to change</strong> over following a plan</li>
      </ul>
      <h5>Principles</h5>
      <ol>
        <li>Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li>
        <li>Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li>
        <li>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li>
        <li>Business people and developers must work together daily throughout the project.</li>
        <li>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li>
        <li>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li>
        <li>Working software is the primary measure of progress.</li>
        <li>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li>
        <li>Continuous attention to technical excellence and good design enhances agility.</li>
        <li>Simplicity--the art of maximizing the amount of work not done--is essential.</li>
        <li>The best architectures, requirements, and designs emerge from self-organizing teams.</li>
        <li>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
      </ol>

      <h4>Implementing Agile</h4>
      <p>Agile approaches emphasize servant leadership as a way to empower teams. <strong>Servant leadership</strong> is the practice of leading through service to the team, by focusing on understanding and addressing the needs and development of team members in order to enable the highest possible team performance.</p>
      <p>Role of servant leader is to facilitate team's discovery and definition of agile. Servant leaders approach work in this order:</p>
      <ul>
        <li>Purpose</li>
        <li>People</li>
        <li>Process</li>
      </ul>

      <h4>Scrum</h4>
      <p>Scrum is a single-team process framework used to manage product development. Scrum team consists of Product Owner, Development Team, and Scrum Master.</p>
      <p>Product Owner is responsible for maximizing value of the product.</p>
      <p>Development team is cross functional, self-organizing team consisting of team members who have everything they need within the team to deliver working product without depending on others outside of the team.</p>
      <p>Scrum Master is responsible for ensuring the Scrum process is upheld and works to ensure the team adheres to the practices and rules as well as coaches the team on removing impediments.</p>
      <figure className='figure'>
        <img src='assets/agile/scrum.png' className='figure-img img-fluid rounded' alt='Scrum Events and Artifacts' />
      </figure>

      <h4>Extreme Programming</h4>
      <p>Extreme Programming (XP) is a software development method based on frequent cycles.</p>
      <figure className='figure'>
        <img src='assets/agile/extreme-programming.png' className='figure-img img-fluid rounded' alt='Extreme Programming' />
      </figure>

      <h4>Kanban</h4>
      <p>Physical Kanban boards with cards enable and promote the visualization and flow of the work through the system for everyone to see. The simplest of boards could have three columns - To Do, Doing, and Done.</p>
      <p>Unlike most agile approaches, Kanban method does not prescribe the use of timeboxed iterations. Kanban is great for:</p>
      <ul>
        <li>Flexibility - not bound by timeboxes and will work on highest priority item in backlog</li>
        <li>Focus on continuous delivery - focused on flowing work through completion and not beginning new work until work in progress is completed</li>
        <li>Increased productivity and quality - productivity and quality are increased by limiting work in progress</li>
        <li>Increased efficiency - checking each task for value adding</li>
        <li>Team member focus - limiting work in progress to focus on current work</li>
        <li>Variability in workload - unpredictability makes it impossible for teams to make predictable commitments</li>
        <li>Reduction of waste - transparency makes waste visible</li>
      </ul>
      <figure className='figure'>
        <img src='assets/agile/kanban.png' className='figure-img img-fluid rounded' alt='Kanban Principles and Properties' />
      </figure>

      <h4>Scrum of Scrums</h4>
      <p>Scrum of Scrums, also known as 'meta Scrum' is a technique used when two or more scrum teams consisting of three to nine members each need to coordinate their work instead of one large scrum team. A representative from each team attends a meeting with the other team representative(s), potentially daily but typically two to three times a week.</p>
    </div>
  );
}
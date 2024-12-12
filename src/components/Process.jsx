export default function Process(props) {
  let { index = 1, name = '', description = '', image = 'process-groups' } = props;
  let imagePath = './src/assets/groups/' + image + '.png';
  let altImagetext = name + ' Process group Inputs, Tools, Techniques, and Outputs';
  return (
    <div>
      <h5>{index}. {name}</h5>
      <p>{description}</p>
      <figure className='figure'>
        <img src={imagePath} className='figure-img img-fluid rounded' alt={altImagetext} />
      </figure>
    </div>
  );
}
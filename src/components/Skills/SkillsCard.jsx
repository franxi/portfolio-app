import "./Skills.css";

const SkillsCard = ({ id, name, skillSvg }) => {
  // const { theme } = useContext(ThemeContext);

  return (
    <div key={id}>
      <span className="html">{skillSvg}</span>
      {/* <div className="skills-details"> */}
      <h4>{name}</h4>
      {/* <h1>hola como estas</h1> */}
      {/* <h5>{institution}</h5> */}
      {/* </div> */}
    </div>
  );
};

export default SkillsCard;

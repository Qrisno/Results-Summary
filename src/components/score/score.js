
import './score.css';
function Score(props) {
  return (
    <div className="score">
      <h2>{props.score}</h2>
      <h3>{props.outOff}</h3>
    </div>
  );
}

export default Score;
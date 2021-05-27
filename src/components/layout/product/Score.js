import ScoreBar from "./ScoreBar";
import { ScoreFigure, Number, Title } from "./styled";

function Score({ name, score }) {
  return (
    <ScoreFigure>
      <Title>
        {name}
        <Number>({score})</Number>
      </Title>
      <ScoreBar
        score={score}
        width={30}
        height={1.8}
      />
    </ScoreFigure>
  );
}

export default Score;

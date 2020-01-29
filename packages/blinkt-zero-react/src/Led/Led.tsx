import React from "react";
import "./Led.css";

/**
 * Die Eigenschaften, die an die Komponente übergeben werden können
 */
type Props = {
  /**
   * Der fortlaufende Index einer Led (0-basiert)
   */
  index: number;
  /**
   * Die Farbe als valider CSS-String
   */
  color?: string;
};

const Led: React.FunctionComponent<Props> = ({ index, color = "goldenrod" }) => {
  return <div className="box" style={{backgroundColor: color}}>Led {index}</div>;
};

export default Led;

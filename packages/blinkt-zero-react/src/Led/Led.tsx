import React, { Fragment } from "react";
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

/**
 * Stellt eine einzelne Led visuell dar.
 * @param props 
 */
const Led: React.FunctionComponent<Props> = ({
  index,
  color = "goldenrod"
}) => {
  return (
    <Fragment>
      <p>Led {index + 1}</p>
      <div className="box" style={{ backgroundColor: color }} onClick={(ev) => console.log(ev)}></div>
    </Fragment>
  );
};

export default Led;

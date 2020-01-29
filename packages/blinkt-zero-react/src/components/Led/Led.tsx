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
  /**
   * Reagiert auf das Auswählen der Led
   */
  onSelect?: (index: number) => void;
  /**
   * Die Kinder
   */
  children?: React.ReactNode;
};

/**
 * Stellt eine einzelne Led visuell dar.
 * @param props
 */
const Led: React.FunctionComponent<Props> = ({
  index,
  color = "goldenrod",
  onSelect = () => {},
  children
}) => {
  /**
   * Reagiert auf einen Klick auf die farbige Box
   * @param ev
   */
  function handleClick(ev: React.MouseEvent) {
    if (ev.ctrlKey || ev.metaKey) {
      // console.log(ev, ev.metaKey);
      onSelect(index);
    }
  }

  return (
    <Fragment>
      <p>Led {index + 1}</p>
      <div
        className="box"
        style={{ backgroundColor: color }}
        onClick={ev => handleClick(ev)}
      ></div>
      {children}
    </Fragment>
  );
};

export default Led;

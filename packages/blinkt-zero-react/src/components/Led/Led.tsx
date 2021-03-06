import React, { Fragment } from "react";
import styles from "./Led.module.css";

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
};

/**
 * Stellt eine einzelne Led visuell dar.
 * @param props
 */
const Led: React.FC<Props> = ({
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
      <p className="is-text-5">Led {index + 1}</p>
      <div
        className={styles.box}
        style={{ backgroundColor: color }}
        onClick={ev => handleClick(ev)}
      ></div>
      {children}
    </Fragment>
  );
};

export default Led;

import React from "react";
import Led from "../Led/Led";

/**
 * Stellt eine Liste von Leds visuell dar
 */
const LedList: React.FunctionComponent = () => {
  /**
   * Die Liste der Leds
   */
  const leds = [
    {
      index: 0,
      color: "red"
    },
    {
      index: 1,
      color: "green"
    },
    {
      index: 2,
      color: "blue"
    }
  ];

  return (
    <table>
      <tbody>
        <tr>
          {leds.map(led => (
            <td key={led.index}>
              <Led
                index={led.index}
                color={led.color}
                onSelect={index => console.log(`I was clicked ${index}`)}
              />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default LedList;

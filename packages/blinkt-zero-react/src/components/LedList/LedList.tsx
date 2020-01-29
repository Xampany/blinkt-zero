import React, {  } from "react";
import Led from "../Led/Led";
import useReadLeds from "../../hooks/readLeds";

/**
 * Stellt eine Liste von Leds visuell dar
 */
const LedList: React.FunctionComponent = () => {
  const [{ leds, isLoading }] = useReadLeds();

  return (
    <>
      {isLoading ? (
        <p>Bin am Laden am dran am sein...</p>
      ) : (
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
      )}
    </>
  );
};

export default LedList;

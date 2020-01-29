import React from "react";
import Led from "../Led/Led";
import useReadLeds from "../../hooks/readLeds";
import ColorText from "../ColorText/ColorText";

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
        <table className="table">
          <tbody>
            <tr>
              {leds.map(led => (
                <td key={led.index}>
                  <Led
                    index={led.index}
                    color={led.color}
                    onSelect={index => console.log(`I was clicked ${index}`)}
                  >
                    <ColorText color={led.color} />
                  </Led>
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

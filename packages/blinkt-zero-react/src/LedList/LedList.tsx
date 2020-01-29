import React, { useState, useEffect } from "react";
import Led from "../Led/Led";
import { API_URL_01 } from "../environment";
import axios from "axios";

/**
 * Stellt eine Liste von Leds visuell dar
 */
const LedList: React.FunctionComponent = () => {
  /**
   * Die Liste der Leds
   */
  const [leds, setLeds] = useState<{ index: number; color: string }[]>([]);
  /**
   * Loader
   */
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Liste über REST API laden
   */
  useEffect(() => {
    // HINT: an useEffect darf keine async function übergeben werden
    const readLeds = async () => {
      const URL = `${API_URL_01}/colors`;

      setIsLoading(true);

      const response = await axios.get<string[]>(URL);

      const payload = response.data;

      return payload.map((color, index) => ({ index, color }));
    };

    readLeds()
      .then(leds => setLeds(leds))
      .then(() => setIsLoading(false));
  }, []);

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

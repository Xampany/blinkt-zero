import { useState, useEffect } from "react";
import { API_URL_01 } from "../environment";
import axios from "axios";

/**
 * Hook zum Laden der Liste der Leds über die REST API
 */
const useReadLeds = () => {
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

      const response = await axios.get<string[]>(URL);

      const payload = response.data;

      return payload.map((color, index) => ({ index, color }));
    };

    setIsLoading(true);
    
    readLeds()
      .then(leds => setLeds(leds))
      .then(() => setIsLoading(false));
  }, []);

  return [{ leds, isLoading }];
};

export default useReadLeds;

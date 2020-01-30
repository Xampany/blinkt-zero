import { useState, useEffect } from "react";
import { API_URL_01 } from "../environment";
import axios from "axios";

const useReadColor = (index: string) => {
  /**
   * Die gewünschte Farbe
   */
  const [color, setColor] = useState();
  /**
   * Loader
   */
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Farbe über REST API laden
   */
  useEffect(() => {
    const readColor = async () => {
      const URL = `${API_URL_01}/colors/${index}`;

      setIsLoading(true);

      const response = await axios.get<string>(URL);

      const payload = response.data;

      return payload;
    };

    readColor()
      .then(color => setColor(color))
      .then(() => setIsLoading(false));
  }, [index]);

  return { color, isLoading };
};

export default useReadColor;

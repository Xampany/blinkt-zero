import React from "react";
import Led from "../Led/Led";
import { useParams } from "react-router-dom";
import useReadColor from "../../hooks/readColor";

const Detail: React.FC = () => {
  const { index } = useParams<{ index: string }>();

  const { color, isLoading } = useReadColor(index);

  return (
    <>
      {isLoading ? (
        <p>Bin am Laden am dran am sein...</p>
      ) : (
        <Led index={parseInt(index)} color={color}></Led>
      )}
    </>
  );
};

export default Detail;

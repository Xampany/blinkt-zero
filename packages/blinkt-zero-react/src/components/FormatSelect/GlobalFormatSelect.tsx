import React from "react";
import { connect } from "react-redux";
import FormatSelect from "./FormatSelect";

const GlobalFormatSelect: React.FC = () => {
  return <FormatSelect />;
};

export default connect()(GlobalFormatSelect);

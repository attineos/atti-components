import React from "react";
import { StyledFooter, StyledText, DivFooter } from "./style";

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter className="container-fluid">
        <DivFooter className="row">
          <StyledText>Generated with ReactJS</StyledText>
        </DivFooter>
      </StyledFooter>
    );
  }
}

export default Footer;

import styled from "styled-components";
import { Modal, Form, Row, Button } from "react-bootstrap";

const BfRowForm = styled(Row)`
  //background-color: #C3D7EE 100%;
  background-color: rgba(195, 215, 238, 0.4);
  color: black;
  border-bottom: 0px;
  padding: 10px 30px 0px 30px;
  border: 0px solid black;
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px !important;
`;

const BfTightRowForm = styled(Row)`
  background-color: rgba(195, 215, 238, 0.4);
  padding: 15px 30px 0px 30px;
  color: black;
  border-bottom: 0px;
  border: 0px solid black;
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px !important;
`;

const BfRowSpacer = styled(Row)`
  background-color: white;
  height: 40px;
`;

const BfFormLabel = styled(Form.Label)`
  font-family: "Fira Sans", "sans-serif";
  font-weight: 200;
  font-size: 20px;
  color: black;
  margin-bottom: 0px;
`;
const BfFormLabelSm = styled(Form.Text)`
  font-family: "Fira Sans", "sans-serif";
  font-size: 14px;
  color: black;
  margin-top: 4px;
`;
const BfFormControl = styled(Form.Control)`
  border-radius: 0rem;
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px;
`;
const BfButtonBlue = styled(Button)`
  border-radius: 0rem;
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px;
  background-color: rgba(0, 79, 113, 1);
  :hover {
    background-color: rgba(98, 181, 229, 0.5);
  }
`;
const BfButtonLink = styled(Button)`
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px;
`;

const BfSelect = styled.select`
  font-family: "Fira Sans", "sans-serif";
  font-size: 20px;

  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;

  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    outline: none !important;
    border-color: #b7d2fb;
    border: 4px solid #b7d2fb;
    border-radius: 0px;
    //box-shadow: 0 0 10px #719ECE;
  }
`;

export {
  BfRowForm,
  BfTightRowForm,
  BfRowSpacer,
  BfFormLabel,
  BfFormLabelSm,
  BfFormControl,
  BfButtonBlue,
  BfButtonLink,
  BfSelect
};

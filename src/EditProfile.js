import React, { useContext, useEffect, useState } from "react";
//import { IntlProvider, FormattedMessage } from 'react-intl'
import { messages } from "./EditProfile.i18n";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl
} from "react-bootstrap";
import {
  BfRowForm,
  BfTightRowForm,
  BfRowSpacer,
  BfFormLabel,
  BfFormLabelSm,
  BfFormControl,
  BfButtonBlue,
  BfSelect
} from "./styledBlueForm";
import { useUcForm } from "./useUcForm";

import styled from "styled-components";

const FormattedMessage = (props) => {
  return <>{props.id}</>;
};

const EditProfile = (props) => {
  //const locale = React.useContext(LocaleContext);
  const {
    EpostPlaceholder,
    NavnPlaceholder,
    PassordPlaceholder,
    Passord1Placeholder,
    Passord2Placeholder
  } = messages;

  const formValidators = {};

  const {
    handleChange,
    formState,
    validateField,
    validateAll,
    errorMessages,
    formIsValid,
    validatorsState
  } = useUcForm(props.formValues, formValidators);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    validateAll();
    //alert(`Submitting Name ${name}`)
  };
  const isRed = { color: "red" };

  return (
    <Form onSubmit={handleSubmit}>
      {!formIsValid && (
        <div style={isRed}>
          form is not valid
          <br />
          <br />
        </div>
      )}

      <Container fluid="md">
        <BfRowForm>
          <Col xs={12} md={6}>
            <Form.Group controlId="formEpost">
              <BfFormLabel>
                <FormattedMessage id="EpostLabel" />
              </BfFormLabel>
              <BfFormControl
                type="email"
                placeholder={EpostPlaceholder}
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="EpostSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} s={12} md={6}>
            <Form.Group controlId="formNavn">
              <BfFormLabel>
                <FormattedMessage id="NavnLabel" />
              </BfFormLabel>
              <BfFormControl type="email" placeholder={NavnPlaceholder} />
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="NavnSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formPassword">
              <BfFormLabel>
                <FormattedMessage id="PassordLabel" />
              </BfFormLabel>
              <BfFormControl type="password" placeholder={PassordPlaceholder} />
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="PassordSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formPassword1">
              <BfFormLabel>
                <FormattedMessage id="Passord1Label" />
              </BfFormLabel>
              <BfFormControl
                type="password"
                placeholder={Passord1Placeholder}
              />
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="Passord1Small" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}></Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formPassword2">
              <BfFormLabel>
                <FormattedMessage id="Passord2Label" />
              </BfFormLabel>
              <BfFormControl
                type="password"
                placeholder={Passord2Placeholder}
              />
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="Passord2Small" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formRolle">
              <BfFormLabel>
                <FormattedMessage id="RolleLabel" />
              </BfFormLabel>

              <BfSelect>
                <option>Administrator</option>
                <option>Foreningsadministrator</option>
                <option>Regnskapesbyrå</option>
                <option>Kreditor</option>
              </BfSelect>

              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="RolleSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formForening">
              <BfFormLabel>
                <FormattedMessage id="ForeningLabel" />
              </BfFormLabel>

              <BfSelect as="select">
                <option>Vest</option>
                <option>Sør</option>
                <option>Midt</option>
                <option>Øst</option>
              </BfSelect>

              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="ForeningSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>
        </BfRowForm>

        <BfRowSpacer></BfRowSpacer>

        <BfTightRowForm>
          <Col xs={12} md={5}>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Søk</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>

          <Col xs={6} md={1}></Col>
          <Col xs={6} md={1}></Col>

          <Col xs={12} md={5}>
            <InputGroup size="sm" className="mb-3">
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Søk</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </BfTightRowForm>

        <BfRowForm>
          <Col xs={12} md={5}>
            <Form.Group controlId="formKreditorListe">
              <BfFormLabel>
                <FormattedMessage id="KreditorListeLabel" />
              </BfFormLabel>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="KreditorListeSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>

          <Col xs={6} md={1}>
            <BfFormLabel></BfFormLabel>
            <br />
            <BfButtonBlue variant="primary" type="submit">
              ->
            </BfButtonBlue>
          </Col>
          <Col xs={6} md={1}>
            <BfFormLabel></BfFormLabel>
            <br />
            <BfButtonBlue variant="primary" type="submit">
              <FormattedMessage id="<-" />
            </BfButtonBlue>
          </Col>

          <Col xs={12} md={5}>
            <Form.Group controlId="formValgteKreditorer">
              <BfFormLabel>
                <FormattedMessage id="ValgteKreditorerLabel" />
              </BfFormLabel>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <BfFormLabelSm className="text-muted">
                <FormattedMessage id="ValgteKreditorerSmall" />
              </BfFormLabelSm>
            </Form.Group>
          </Col>
        </BfRowForm>

        <BfTightRowForm>
          <Col xs={12} md={12}>
            <BfButtonBlue variant="primary" type="submit">
              <FormattedMessage id="Lagre" />
            </BfButtonBlue>
            &nbsp;
            <BfButtonBlue variant="primary" type="submit">
              <FormattedMessage id="Nullstill" />
            </BfButtonBlue>
          </Col>
        </BfTightRowForm>

        <BfTightRowForm />

        {JSON.stringify(formState)}
      </Container>
    </Form>
  );
};

export default EditProfile;

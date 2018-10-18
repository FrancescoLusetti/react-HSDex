import React, { Component } from 'react'; 

import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

export default class Search extends Component {
    render(props){
        return(
            <Container>
            <Row onSubmit={this.props.loginHandler}>
              <Col className={"mt-2"} sm="12" md={{ size: 6, offset: 3 }}>
                <Form>
                  <FormGroup>
                    <Input type="text" name="username" id="username" placeholder="Name or Expansion" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
        </Container>
        )   
    }
}
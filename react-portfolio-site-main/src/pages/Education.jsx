import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Education = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold mb-4">Education</h1>
            <div class="col-lg-8 mx-auto">
              <p class="lead mb-4">
                Working towards a Bachelor of Science in Information Systems at
                Naga College Foundation, Inc. (NCF), an esteemed academic
                institution in Naga City. NCF, which earned its reputation as{' '}
                <b>The Home of Champions</b>, has a rich history of producing
                industry leaders and accomplished professionals. This
                comprehensive program combines technical expertise in
                information systems with business fundamentals, preparing
                students for careers in IT management and systems development.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Education;

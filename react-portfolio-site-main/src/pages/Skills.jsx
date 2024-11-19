import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

const skills = [
  {
    name: 'ReactJs',
    logo: 'https://icon.icepanel.io/Technology/svg/React.svg',
    stats: [{ level: 'Intermediate', color: 'secondary' }],
  },
  {
    name: 'NodeJs',
    logo: 'https://icon.icepanel.io/Technology/svg/Node.js.svg',
    stats: [{ level: 'Intermediate', color: 'secondary' }],
  },
  {
    name: 'C++',
    logo: 'https://icon.icepanel.io/Technology/svg/C%2B%2B-%28CPlusPlus%29.svg',
    stats: [{ level: 'Beginner', color: 'success' }],
  },
  {
    name: 'MySQL',
    logo: 'https://icon.icepanel.io/Technology/svg/MySQL.svg',
    stats: [{ level: 'Expert', color: 'danger' }],
  },
  {
    name: 'Python',
    logo: 'https://icon.icepanel.io/Technology/svg/Python.svg',
    stats: [{ level: 'Beginner', color: 'success' }],
  },
  {
    name: 'VS Code',
    logo: 'https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg',
    stats: [{ level: 'Expert', color: 'danger' }],
  },
];

export const Skills = () => {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold mb-4">Skills</h1>
      <div class="col-lg-8 mx-auto">
        <Row className="py-2">
          {skills.map((skill) => {
            return (
              <Col lg={3} className="pb-3">
                <Card className="m-auto px-2 py-4">
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      variant="top"
                      src={skill.logo}
                      style={{ width: '120px', height: '120px' }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">
                      {skill.name}
                    </Card.Title>
                    <Card.Text>
                      {skill.stats.map((stat) => {
                        return (
                          <Badge bg={stat.color || 'primary'} className="mx-2">
                            {stat.level}
                          </Badge>
                        );
                      })}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Skills;

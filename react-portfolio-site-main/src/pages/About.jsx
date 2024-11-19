import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
  return (
    <div class="px-4 py-5 my-5 text-center border-bottom ">
      <h1 class="display-5 fw-bold mb-4">About Me</h1>
      <div class="col-lg-8 mx-auto">
        {/* I am KYLE VINCENT B. GUIBILONDO. A Simple guy who loves computers,
          Also an Avid Grass toucher and a gamer. im also proficient in computer
          hardware repair and troubleshooting */}
        <p class="lead mb-4">
          "Hey there! I'm KYLE VINCENT B. GUIBILONDO – your friendly
          neighborhood tech wizard who believes in the perfect balance between
          pixels and nature. 🖥️🌿
        </p>
        <p>When I'm not: </p>
        <ul class="list-unstyled justify-content-centerpb-3 mb-3">
          <li>
            Bringing computers back to life with my hardware repair skills 🔧
          </li>
          <li>Exploring virtual worlds as an passionate gamer 🎮</li>
          <li>Diagnosing tech troubles like a digital doctor 💻</li>
        </ul>
        <p>You'll find me: </p>
        <ul class="list-unstyled  pb-3 mb-3">
          <li>Actually touching grass (yes, really!) 🌱</li>
          <li>Converting caffeine into code ☕</li>
          <li>Learning about the latest tech trends 📱</li>
        </ul>
        <p class="lead">
          I pride myself on being the go-to person for all things tech-related,
          combining technical expertise with a down-to-earth approach to
          problem-solving."
        </p>
      </div>
    </div>
  );
};

export default About;

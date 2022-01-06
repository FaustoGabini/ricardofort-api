import "./peticion.css";
const Card = ({ link }) => {
  return (
    <pre className="requestWrapper">
      <code className="request">
        <p className="codeRequest">GET</p>
        <a
          target="_blank"
          href={link}
          className="linkRequest"
        >
          {link}
        </a>
      </code>
    </pre>
  );
};

export default Card;

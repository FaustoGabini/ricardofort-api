import React, { useState, useEffect } from "react";
import "./response.css";
const Response = () => {
  const [quote, setQuote] = useState(null);

  const consultarAPI = async () => {
    const apiResponse = await fetch(
      "https://ricardofort.herokuapp.com/"
    );
    const frase = await apiResponse.json();
    console.log(frase);
    setQuote(frase);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <pre className="responseWrapper">
      <code className="response">
        {quote !== null ? (
          <>
            <p>{" {"}</p>
            <p>"frase": "{quote.frase}"</p>
            <p>{"}"}</p>
          </>
        ) : null}
      </code>
    </pre>
  );
};

export default Response;

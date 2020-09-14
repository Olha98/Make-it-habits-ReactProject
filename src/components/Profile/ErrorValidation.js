import React from "react";

function ErrorValidation({ touched, message }) {
  return (
    <>
      {touched === false && <div>&nbsp;</div> ? (
        message && <div>{message}</div>
      ) : (
        <div>все хорошо</div>
      )}
    </>
  );
}

export default ErrorValidation;

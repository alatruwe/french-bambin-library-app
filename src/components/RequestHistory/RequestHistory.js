import React from "react";
import Request from "./Request/Request";
import requestData from "../../requestData.js";

export default class RequestHistory extends React.Component {
  render() {
    return (
      <section>
        <ul>
          {requestData.map((request) => (
            <li key={request.id}>
              <Request
                title={request.title}
                object={request.object}
                message={request.message}
                date={request.date}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

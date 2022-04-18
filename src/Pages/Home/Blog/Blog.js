import React from "react";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container text-center mt-4 d-flex  ">
      <Card border="primary ">
        <Card.Body>
          <Card.Title className="text-danger ">
            Difference between authorization and authentication
          </Card.Title>
          <Card.Text>
            <span className="fw-bold">Authorization :: </span>
            <span>
              Authorization is the process of specifying access rights/
              privileges to resources related to information security.
              Authentication verifies users credentials while authorization
              validates users permissions.Verifies user's permission.
            </span>
            <br />
            <br />
            <span className="fw-bold">Authentication :: </span>
            <span>
              Authentication is the process of confirming the truth of an
              attribute of a single piece of data claimed true by an entity.The
              authentication checks a persons details to identify him while the
              authorization checks a users privileges to access
              resources.Verifies user's credential.
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card border="success ">
        <Card.Body>
          <Card.Title className="text-danger">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            Firebase by Google can be used for the following: Firebase manages
            all data real-time in the database. So, the exchange of data to and
            fro from the database is easy and quick. Hence, if I am looking to
            develop mobile apps such as live streaming, chat messaging, etc., I
            can use Firebase.Back4app is a reliable Firebase alternative that
            works with an amalgamation of open-source technologies. The platform
            is straightforward to use and has a low learning curve. It offers
            features like a relational data model, scalable hosting, REST and
            GraphQL APIs, notifications, authentication, and storage.
          </Card.Text>
        </Card.Body>
      </Card>

      <br />

      <Card border="primary  bg-white">
        <Card.Body>
          <Card.Title className="text-danger">
            What other services does firebase provide other than authentication
          </Card.Title>
          <Card.Text>
            To use the Firebase Storage we need to authenticate a user via
            Firebase authentication.There are many services which Firebase
            provides, Most useful of them are:Cloud Firestore,Cloud
            Functions,Authentication,Hosting,Cloud Storage.,Google
            Analytics,Predictions,Cloud Messaging.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
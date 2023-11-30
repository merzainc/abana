import { Body, Button, Container, Html, Text } from "@react-email/components";
import React from "react";

const ContactTemplate = ({
  email,
  message,
}: {
  email: string;
  message: string;
}) => {
  return (
    <Html>
      <Body>
        <Container>
          <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
            {message}
          </Text>
          <Button href={`mailto:${email}`} style={cta}>
            Reply
          </Button>
        </Container>
      </Body>
    </Html>
  );
};

const cta = {
  padding: "13px 20px",
  borderRadius: "5px",
  backgroundColor: "#FF6C37",
  textAlign: "center" as const,
  color: "#fff",
  display: "block",
  width: "45%",
  margin: "0.5rem auto 0 auto",
};

export default ContactTemplate;

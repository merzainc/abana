import { Button, Html, Text } from "@react-email/components";

export const Email = () => {
  return (
    <Html>
      <Button href="https://google.com" style={cta}>
        Click me
      </Button>
      {/* or */}
      <Text style={{ color: "#61dafb" }}>Confirm subscription</Text>
    </Html>
  );
};

const cta = {
  padding: "13px 20px",
  borderRadius: "5px",
  backgroundColor: "#D13928",
  textAlign: "center" as const,
  color: "#fff",
  display: "block",
  width: "45%",
  margin: "0.5rem auto 0 auto",
};

export default Email;

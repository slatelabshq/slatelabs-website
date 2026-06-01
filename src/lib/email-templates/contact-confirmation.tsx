import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

const SITE_NAME = "Slate Labs";

interface ContactConfirmationProps {
  name?: string;
  projectType?: string;
  message?: string;
}

const ContactConfirmationEmail = ({
  name,
  projectType,
  message,
}: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME} — we'll reply within 24 hours.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SLATE LABS</Text>
        <Heading style={h1}>
          {name ? `Thanks, ${name}.` : "Thanks for reaching out."}
        </Heading>
        <Text style={text}>
          We've received your message and a real human at {SITE_NAME} will get back
          to you within 24 hours.
        </Text>

        {(projectType || message) && (
          <Section style={card}>
            <Text style={cardLabel}>Your enquiry</Text>
            {projectType && (
              <Text style={cardLine}>
                <strong style={strong}>Project type:</strong> {projectType}
              </Text>
            )}
            {message && (
              <Text style={cardLine}>
                <strong style={strong}>Message:</strong> {message}
              </Text>
            )}
          </Section>
        )}

        <Text style={text}>
          In the meantime, feel free to reply directly to this email if you'd like
          to share more context — or book a 20-minute intro call from our contact
          page.
        </Text>

        <Text style={footer}>— The {SITE_NAME} team · Lagos, Nigeria</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: ContactConfirmationEmail,
  subject: "Thanks for reaching out — Slate Labs",
  displayName: "Contact confirmation",
  previewData: {
    name: "Jane",
    projectType: "Digital Platforms",
    message: "We're rebuilding our marketing site and want to start in Q3.",
  },
} satisfies TemplateEntry;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};
const container = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 24px",
};
const brand = {
  fontSize: "11px",
  letterSpacing: "0.2em",
  color: "#0099BF",
  fontWeight: 600,
  margin: "0 0 24px",
};
const h1 = {
  fontSize: "28px",
  lineHeight: "1.15",
  letterSpacing: "-0.02em",
  fontWeight: 500,
  color: "#111111",
  margin: "0 0 20px",
};
const text = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#3f3f3d",
  margin: "0 0 18px",
};
const card = {
  backgroundColor: "#F2F1EC",
  borderRadius: "16px",
  padding: "20px 22px",
  margin: "8px 0 22px",
};
const cardLabel = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  color: "#6B6B68",
  margin: "0 0 10px",
  fontWeight: 600,
};
const cardLine = {
  fontSize: "14px",
  lineHeight: "1.55",
  color: "#111111",
  margin: "0 0 8px",
};
const strong = { color: "#111111", fontWeight: 600 };
const footer = {
  fontSize: "13px",
  color: "#6B6B68",
  margin: "32px 0 0",
};

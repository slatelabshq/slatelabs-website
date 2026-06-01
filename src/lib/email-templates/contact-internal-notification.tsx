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

interface InternalProps {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  ip?: string;
  userAgent?: string;
  submissionId?: string;
  receivedAt?: string;
}

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <Text style={row}>
      <strong style={rowLabel}>{label}</strong>
      <span style={rowValue}>{value}</span>
    </Text>
  ) : null;

const InternalNotificationEmail = (p: InternalProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      New enquiry from {p.name ?? "someone"}
      {p.projectType ? ` (${p.projectType})` : ""}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SLATE LABS · NEW ENQUIRY</Text>
        <Heading style={h1}>
          {p.name ?? "New enquiry"}
          {p.projectType ? ` — ${p.projectType}` : ""}
        </Heading>

        <Section style={card}>
          <Row label="Name" value={p.name} />
          <Row label="Email" value={p.email} />
          <Row label="Company" value={p.company} />
          <Row label="Project type" value={p.projectType} />
          <Row label="Budget" value={p.budget} />
        </Section>

        {p.message && (
          <Section style={messageCard}>
            <Text style={msgLabel}>Message</Text>
            <Text style={msgBody}>{p.message}</Text>
          </Section>
        )}

        <Section style={metaCard}>
          <Row label="Submission ID" value={p.submissionId} />
          <Row label="Received at" value={p.receivedAt} />
          <Row label="IP" value={p.ip} />
          <Row label="User agent" value={p.userAgent} />
        </Section>

        <Text style={footer}>
          Reply directly to this email to respond to {p.name ?? "the sender"}.
        </Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: InternalNotificationEmail,
  subject: (d: Record<string, any>) =>
    `New enquiry — ${d.name ?? "anonymous"}${d.projectType ? ` (${d.projectType})` : ""}`,
  to: "hello@slatelabshq.com",
  displayName: "Internal contact notification",
  previewData: {
    name: "Jane Doe",
    email: "jane@example.com",
    company: "Acme Co.",
    projectType: "Digital Platforms",
    budget: "₦1M–₦3M",
    message: "We're rebuilding our marketing site and want to start in Q3.",
    ip: "203.0.113.42",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0)",
    submissionId: "00000000-0000-0000-0000-000000000000",
    receivedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
};
const container = { maxWidth: "600px", margin: "0 auto", padding: "40px 24px" };
const brand = {
  fontSize: "11px",
  letterSpacing: "0.2em",
  color: "#0099BF",
  fontWeight: 600,
  margin: "0 0 16px",
};
const h1 = {
  fontSize: "24px",
  lineHeight: "1.2",
  letterSpacing: "-0.02em",
  fontWeight: 500,
  color: "#111111",
  margin: "0 0 24px",
};
const card = {
  backgroundColor: "#F2F1EC",
  borderRadius: "16px",
  padding: "18px 22px",
  margin: "0 0 16px",
};
const messageCard = {
  backgroundColor: "#FAFAF7",
  borderLeft: "3px solid #0099BF",
  borderRadius: "8px",
  padding: "16px 20px",
  margin: "0 0 16px",
};
const metaCard = {
  backgroundColor: "#FAFAF7",
  borderRadius: "12px",
  padding: "14px 20px",
  margin: "0 0 16px",
  fontSize: "12px",
};
const row = { fontSize: "14px", lineHeight: "1.6", color: "#111111", margin: "0 0 6px" };
const rowLabel = {
  display: "inline-block",
  minWidth: "120px",
  color: "#6B6B68",
  fontWeight: 600,
};
const rowValue = { color: "#111111" };
const msgLabel = {
  fontSize: "11px",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  color: "#6B6B68",
  margin: "0 0 8px",
  fontWeight: 600,
};
const msgBody = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#111111",
  whiteSpace: "pre-wrap" as const,
  margin: 0,
};
const footer = { fontSize: "13px", color: "#6B6B68", margin: "20px 0 0" };

import './globals.css'

export const metadata = {
  title: "Harsha Vardhan — Portfolio",
  description: "Full-Stack Developer | Java | React | SQL | Spring Boot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

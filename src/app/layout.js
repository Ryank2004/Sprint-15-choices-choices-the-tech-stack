import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

export const metadata = {
  title: "OnCollabarion",
  description: "Een platform voor radiotherapeuten",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

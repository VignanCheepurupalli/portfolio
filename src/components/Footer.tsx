import siteConfig from "@/config/siteConfig";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container text-center">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

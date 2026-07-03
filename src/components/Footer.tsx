import { siteConfig } from "@/data/site";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4">{siteConfig.name}</h3>
            <p className="opacity-80 leading-relaxed max-w-md">
              Advancing trauma recovery through innovative neuroscience research and compassionate care.
            </p>
            <p className="opacity-60 text-sm mt-4">
              EIN: {siteConfig.ein} · 501(c)(3) Tax-Exempt Organization
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link to="/programs" className="hover:opacity-100 transition-opacity">Programs</Link></li>
              <li><Link to="/team" className="hover:opacity-100 transition-opacity">Team</Link></li>
              <li><Link to="/impact" className="hover:opacity-100 transition-opacity">Impact</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 opacity-80">
              <li><Link to="/research" className="hover:opacity-100 transition-opacity">Research Publications</Link></li>
              <li><Link to="/resources" className="hover:opacity-100 transition-opacity">Patient Resources</Link></li>
              <li><Link to="/donate" className="hover:opacity-100 transition-opacity">Donate</Link></li>
              <li><Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="opacity-60 text-sm text-center md:text-left">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="opacity-60 text-sm">
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

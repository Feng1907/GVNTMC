"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const hrefs = ["/", "/gioi-thieu", "/dich-vu", "/san-pham", "/du-an", "/tin-tuc", "/lien-he", "/bao-gia"];
  const serviceHrefs = [
    "/dich-vu/bao-tri-nang-cap-he-thong",
    "/dich-vu/helpdesk-it-outsourcing",
    "/dich-vu/giai-phap-camera-may-chu-luu-tru",
    "/dich-vu/tu-van-thiet-ke-thi-cong",
    "/dich-vu/thiet-bi-ngan-hang",
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">GVN</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">GVN</span>
                <span className="block text-xs text-white/60">Technology</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {t.footer.quickLinksItems.map((label, i) => (
                <li key={hrefs[i]}>
                  <Link href={hrefs[i]} className="text-white/70 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">{t.footer.servicesLabel}</h3>
            <ul className="space-y-2">
              {t.footer.servicesItems.map((label, i) => (
                <li key={serviceHrefs[i]}>
                  <Link href={serviceHrefs[i]} className="text-white/70 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-4 text-white">{t.footer.contact}</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh</span>
              </li>
              <li>
                <a
                  href="tel:+842862515094"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  028 6251 5094 – 091 970 4433
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@gvntmc.com"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  support@gvntmc.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-2">{t.footer.newsletter.title}</p>
              {subscribed ? (
                <p className="text-sm text-green-400 bg-green-400/10 px-3 py-2 rounded-xl">
                  {t.footer.subscribeSuccess}
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.newsletter.placeholder}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent hover:bg-accent-dark p-2 rounded-xl transition-colors flex-shrink-0"
                    aria-label={t.footer.newsletter.button}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">{t.footer.copyright}</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-white/50 hover:text-white/80 transition-colors">
              {t.footer.policyLinks.privacy}
            </Link>
            <Link href="#" className="text-white/50 hover:text-white/80 transition-colors">
              {t.footer.policyLinks.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Server,
  HardDrive,
  Camera,
  Wifi,
  Battery,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SearchModal from "./SearchModal";
import clsx from "clsx";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const productDropdownItems = [
    { icon: HardDrive, label: t.header.productCategories.storage, href: "/san-pham?category=Lưu trữ" },
    { icon: Camera, label: t.header.productCategories.camera, href: "/san-pham?category=Camera an ninh" },
    { icon: Wifi, label: t.header.productCategories.network, href: "/san-pham?category=Thiết bị mạng" },
    { icon: Server, label: t.header.productCategories.server, href: "/san-pham?category=Máy chủ" },
    { icon: Battery, label: t.header.productCategories.ups, href: "/san-pham?category=UPS & Nguồn" },
  ];
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productDropOpen, setProductDropOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/gioi-thieu" },
    { label: t.nav.services, href: "/dich-vu" },
    { label: t.nav.projects, href: "/du-an" },
    { label: t.nav.news, href: "/tin-tuc" },
    { label: t.nav.contact, href: "/lien-he" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-nav"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-9 h-9 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GVN</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-primary text-lg leading-none">GVN</span>
                <span className="block text-xs text-text-secondary leading-none">Technology</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    isActive(link.href)
                      ? "text-primary bg-primary-50"
                      : "text-text-primary hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Products dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProductDropOpen(!productDropOpen)}
                  className={clsx(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                    pathname.startsWith("/san-pham")
                      ? "text-primary bg-primary-50"
                      : "text-text-primary hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {t.nav.products}
                  <ChevronDown
                    className={clsx(
                      "w-4 h-4 transition-transform duration-200",
                      productDropOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {productDropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                      <div className="p-2">
                        <Link
                          href="/san-pham"
                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-primary-50 text-sm font-semibold text-primary mb-1"
                          onClick={() => setProductDropOpen(false)}
                        >
                          {t.header.allProducts}
                        </Link>
                        <div className="h-px bg-gray-100 mb-1" />
                        {productDropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setProductDropOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm text-text-primary">{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                aria-label="Tìm kiếm"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language toggle */}
              <button
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg border border-gray-200 text-text-secondary hover:text-primary hover:border-primary transition-colors"
              >
                <span className={language === "vi" ? "text-primary font-bold" : ""}>VI</span>
                <span className="text-gray-300">|</span>
                <span className={language === "en" ? "text-primary font-bold" : ""}>EN</span>
              </button>

              {/* CTA */}
              <Link
                href="/bao-gia"
                className="hidden lg:inline-flex btn-accent text-sm py-2 px-4"
              >
                {t.nav.getQuote}
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-gray-50 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="container-custom py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive(link.href)
                        ? "text-primary bg-primary-50"
                        : "text-text-primary hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Products */}
                <div>
                  <Link
                    href="/san-pham"
                    className={clsx(
                      "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      pathname.startsWith("/san-pham")
                        ? "text-primary bg-primary-50"
                        : "text-text-primary hover:bg-gray-50"
                    )}
                  >
                    {t.nav.products}
                  </Link>
                  <div className="ml-4 mt-1 space-y-1">
                    {productDropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-text-secondary hover:bg-gray-50 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <Link href="/bao-gia" className="btn-accent flex-1 justify-center text-sm py-2.5">
                    {t.nav.getQuote}
                  </Link>
                  <button
                    onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
                    className="flex items-center gap-1 text-xs font-semibold px-3 py-2.5 rounded-xl border border-gray-200 text-text-secondary"
                  >
                    <span className={language === "vi" ? "text-primary font-bold" : ""}>VI</span>
                    <span className="text-gray-300">|</span>
                    <span className={language === "en" ? "text-primary font-bold" : ""}>EN</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

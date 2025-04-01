'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"; // import styles from layout.css

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();
    
    return (
      // returns all 3 links from navLink
        <div> 
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);

              return (
                <Link 
                key={link.href} 
                href={link.href}  
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} // if isActive is true, font bold, else, text blue
                
                >
                  {link.name}
                </Link>
              );
   })}
            {/* returns the link clicked but in the same page */}
            {children}
           
        </div>
    );
    }
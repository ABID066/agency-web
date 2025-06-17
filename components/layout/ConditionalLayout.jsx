"use client"

import { usePathname } from 'next/navigation';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function ConditionalLayout({ children }) {
    const pathname = usePathname();
    const isDashboard = pathname?.includes('/dashboard');

    // You can add other conditions here as needed
    const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/register/verify'|| pathname === '/forgot-password';

    // Hide navbar/footer on dashboard or auth pages
    const hideNavAndFooter = isDashboard || isAuthPage;

    return (
        <>
            {!hideNavAndFooter && <Navbar className="mb-20" />}
            {children}
            {!hideNavAndFooter && <Footer />}
        </>
    );
}
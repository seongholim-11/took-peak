"use client";

import Footer from "@/components/footer/Footer";
import "./globals.scss";
import NavBar from "@/components/nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Mypage from "@/components/mypage/MypageButton";

// 클라이언트 컴포넌트에서 로그인 정보 및 유무를 확인을 위해 import
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>
                    <NavBar />
                    {children}
                    <Mypage />
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}

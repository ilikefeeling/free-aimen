'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import {
    LayoutDashboard,
    Video,
    Upload,
    LogOut,
    User,
    ChevronDown,
    Menu,
    X,
    Sparkles,
    Shield,
    Crown,
    Home,
    Settings,
    HelpCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import ApiKeyModal from '@/components/ui/ApiKeyModal';
import { hasGeminiApiKey } from '@/lib/apiKeyStore';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isApiModalOpen, setIsApiModalOpen] = useState(false);

    useEffect(() => {
        // Check if API key exists on mount
        if (!hasGeminiApiKey()) {
            setIsApiModalOpen(true);
        }
    }, []);

    // 미들웨어(middleware.ts)가 이미 세션 체크를 수행하므로 
    // 여기서의 강제 리다이렉트는 무한 루프를 유발할 수 있어 제거합니다.


    const navItems = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'My Videos', href: '/dashboard/videos', icon: Video },
        { name: 'Upload', href: '/dashboard/upload', icon: Upload },
    ];

    // Renaming navItems to NAV_ITEMS and adding 'path' and 'label' for the new structure
    const NAV_ITEMS = [
        { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { label: 'My Videos', path: '/dashboard/videos', icon: Video },
        { label: 'Upload', path: '/dashboard/upload', icon: Upload },
        { label: 'Guide', path: '/dashboard/guide', icon: HelpCircle },
    ];


    const isActive = (path: string) => pathname === path;

    return (
        <div className="min-h-screen bg-divine-light flex flex-col">
            {/* Main Navigation - Integrated & Sticky */}
            <header className="sticky top-0 z-50 glass-panel">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo & Branding */}
                        <div
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => router.push('/')}
                        >
                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shadow-divine group-hover:scale-110 transition-transform p-1.5 border border-white/10">
                                <img src="/logo.png" alt="aimen logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-divine-title text-xl font-black text-white leading-none tracking-[0.2em] group-hover:text-gold transition-colors">
                                    AI<span className="text-gold">MEN</span>
                                </span>
                                <span className="text-[9px] font-bold text-gray-500 tracking-widest uppercase mt-1">
                                    Divine Content Engine
                                </span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1.5">
                            <button
                                onClick={() => router.push('/')}
                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                            >
                                <Home className="w-4 h-4" />
                                Home
                            </button>
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => router.push(item.path)}
                                    className={`
                                        flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all
                                        ${pathname === item.path
                                            ? 'bg-gold text-navy shadow-gold'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }
                                    `}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            {/* Settings Button (API Key) */}
                            <button
                                onClick={() => setIsApiModalOpen(true)}
                                className="p-2.5 rounded-xl text-gray-400 hover:text-gold hover:bg-white/5 transition-all border border-transparent hover:border-gold/20"
                                title="API 키 설정"
                            >
                                <Settings className="w-5 h-5" />
                            </button>

                            {/* User Profile - Simplified */}
                            <div className="hidden md:flex items-center gap-4 pr-4 border-l border-white/10 pl-4">
                                <div className="text-right">
                                    <p className="text-sm font-bold text-white leading-none">
                                        성도님
                                    </p>
                                    <p className="text-xs text-gold/60 mt-1 uppercase tracking-widest">
                                        Serverless Mode
                                    </p>
                                </div>
                                <div className="w-10 h-10 bg-navy-lighter rounded-full flex items-center justify-center border border-gold/20">
                                    <User className="w-5 h-5 text-gold" />
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg text-gold hover:bg-navy-lighter transition-colors"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-navy-light/95 backdrop-blur-xl border-b border-gold/10 animate-fade-in shadow-2xl">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium ${pathname === item.path
                                        ? 'bg-gold/10 text-gold border border-gold/30 font-bold'
                                        : 'text-gray-400 hover:text-white hover:bg-navy-lighter'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content Area */}
            <main className="min-h-[calc(100-4rem)]">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="py-8 bg-navy-darker border-t border-gold/5">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 AI-MEN. All rights reserved.
                    </p>
                    <Link href="/privacy" className="text-gray-600 text-xs hover:text-gold transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </footer>
            {/* Api Key Selection Modal */}
            <ApiKeyModal
                isOpen={isApiModalOpen}
                onClose={() => setIsApiModalOpen(false)}
                onSuccess={() => {
                    // Refresh current page or state if needed
                    router.refresh();
                }}
            />
        </div>
    );
}

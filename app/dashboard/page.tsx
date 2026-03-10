'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import {
    Video,
    Upload,
    Zap,
    Clock,
    CheckCircle2,
    Sparkles,
    ArrowRight,
    Play
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    const router = useRouter();

    return (
        <div className="p-4 md:p-10 max-w-7xl mx-auto space-y-12 animate-fade-in relative">
            {/* Background Divine Ambience */}
            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Welcome Hero Section */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-darker border border-gold/20 p-8 md:p-16 shadow-divine group">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Sparkles className="w-80 h-80 text-gold transform rotate-12" />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        반가워요, <br />
                        <span className="text-gold-gradient font-cinzel italic tracking-normal">성도님!</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed mb-10 font-medium">
                        주일의 깊은 은혜를 평일의 일상으로. <br className="hidden md:block" />
                        주님의 귀한 말씀을 숏폼 사역으로 세상에 널리 알리는 사역에 함께해주셔서 감사합니다.
                    </p>
                    <div className="flex flex-wrap gap-5">
                        <Link href="/dashboard/upload">
                            <button className="bg-[#FEE500] hover:bg-[#FEE500]/90 text-[#3C1E1E] px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-gold flex items-center gap-3">
                                <Upload className="w-6 h-6 stroke-[3]" /> 새 영상 업로드
                            </button>
                        </Link>
                        <Link href="/dashboard/videos">
                            <button className="glass-panel text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gold hover:text-navy border border-gold/30 transition-all flex items-center gap-3">
                                <Video className="w-6 h-6 text-gold group-hover:text-navy transition-colors" /> 아카이브 보기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* How it Works / Guide */}
                <div className="lg:col-span-2 glass-card p-10 rounded-[2rem] border-divine">
                    <h3 className="text-2xl font-cinzel text-gold-light mb-10 flex items-center gap-4 tracking-widest uppercase">
                        <Zap className="w-7 h-7 fill-gold animate-glow-pulse rounded-full" /> Ministry Guide
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            {[
                                { step: 1, title: '설교 영상 업로드', desc: '예배 실황이나 설교 영상 파일을 선택하여 업로드하세요.' },
                                { step: 2, title: 'AI 지능형 분석', desc: 'Gemini AI가 가장 은혜로운 30-60초 구간을 정밀 추출합니다.' }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-navy-lighter rounded-2xl flex items-center justify-center shrink-0 border border-gold/10 group-hover:border-gold/40 transition-colors shadow-inner">
                                        <span className="text-gold font-cinzel text-xl font-black">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-8">
                            {[
                                { step: 3, title: '숏폼 컨텐츠 제작', desc: '쇼츠, 릴스 규격에 맞춰 자막과 최적화된 화면비로 편집합니다.' },
                                { step: 4, title: '플랫폼 선교 공유', desc: '완성된 영상을 다운로드하거나 SNS에 업로드하여 세상을 깨우십시오.' }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 group">
                                    <div className="w-14 h-14 bg-navy-lighter rounded-2xl flex items-center justify-center shrink-0 border border-gold/10 group-hover:border-gold/40 transition-colors shadow-inner">
                                        <span className="text-gold font-cinzel text-xl font-black">{item.step}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white text-lg mb-2">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

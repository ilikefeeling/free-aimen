'use client';

import { Card } from '@/components/ui/Card';
import {
    Key,
    Upload,
    Video,
    ShieldCheck,
    Zap,
    Smartphone,
    Download,
    RefreshCcw,
    AlertTriangle,
    CheckCircle2,
    BookOpen,
    Play
} from 'lucide-react';

export default function GuidePage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            {/* Header section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-2xl mb-4 border border-gold/20">
                    <BookOpen className="w-8 h-8 text-gold" />
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                    사용 가이드
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Aimen Free는 서버 비용 없이 사용자의 개인 API 키를 활용하여
                    안전하고 효율적으로 설교 하이라이트를 생성하는 서버리스 도구입니다.
                </p>
            </div>

            <div className="grid gap-8">
                {/* Step 1: API Key */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <span className="text-blue-400 font-bold">1</span>
                        </div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Key className="w-5 h-5 text-blue-400" /> Google Gemini API 키 설정
                        </h2>
                    </div>
                    <Card className="p-6 bg-navy-light/30 border-white/5">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Aimen Free는 사용자의 개인 API 키를 기반으로 작동합니다. 발급받은 키는 서버에 저장되지 않고 오직 <strong>본인의 브라우저에만 저장</strong>됩니다.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                                <span><a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-white transition-colors">Google AI Studio</a>에서 무료 API 키를 발급받으세요.</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                                <span>상단 설정(톱니바퀴) 아이콘을 클릭하여 API 키를 입력하고 저장합니다.</span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-400">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                                <span>'저장 및 시작' 클릭 시 자동으로 키 유효성을 검사합니다.</span>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Step 2: Upload */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                            <span className="text-purple-400 font-bold">2</span>
                        </div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Upload className="w-5 h-5 text-purple-400" /> 영상 업로드 및 분석
                        </h2>
                    </div>
                    <Card className="p-6 bg-navy-light/30 border-white/5">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest text-gold/80">준비 사항</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• MP4, WebM 등 동영상 파일 지원</li>
                                    <li>• 설교 제목 및 교회 이름 입력 (선택)</li>
                                    <li>• 인터넷 연결 상태 확인</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest text-gold/80">분석 과정</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• 파일 선택 후 '분석 시작' 클릭</li>
                                    <li>• Gemini AI가 영상 내용을 이해하고 분석</li>
                                    <li>• 분석 완료 시 자동으로 로컬 저장소에 저장</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Step 3: View & Manage */}
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
                            <span className="text-green-400 font-bold">3</span>
                        </div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Video className="w-5 h-5 text-green-400" /> 하이라이트 확인 및 관리
                        </h2>
                    </div>
                    <Card className="p-6 bg-navy-light/30 border-white/5">
                        <div className="space-y-4">
                            <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                <Play className="w-5 h-5 text-gold shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">하이라이트 재생</h4>
                                    <p className="text-xs text-gray-400 mt-1">AI가 추출한 핵심 포인트별로 영상을 즉시 확인할 수 있습니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">강력한 보안</h4>
                                    <p className="text-xs text-gray-400 mt-1">모든 데이터는 서버가 아닌 본인의 기기에 저장되어 프라이버시가 완벽히 보호됩니다.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                                <Download className="w-5 h-5 text-gold shrink-0" />
                                <div>
                                    <h4 className="text-white font-bold text-sm">데이터 백업</h4>
                                    <p className="text-xs text-gray-400 mt-1">설정 메뉴에서 분석된 데이터를 JSON 파일로 내보내어 보관할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Additional Tips */}
                <section className="mt-4">
                    <Card className="p-6 bg-gold/5 border-gold/10">
                        <h2 className="text-lg font-bold text-gold mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5" /> 유용한 팁
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <Smartphone className="w-5 h-5 text-white/40 mt-1" />
                                <div>
                                    <p className="text-sm font-bold text-white">PWA 설치</p>
                                    <p className="text-xs text-gray-400 mt-1">브라우저 메뉴에서 '앱 설치' 또는 '홈 화면에 추가'를 선택하여 앱처럼 사용하세요.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <RefreshCcw className="w-5 h-5 text-white/40 mt-1" />
                                <div>
                                    <p className="text-sm font-bold text-white">데이터 초기화</p>
                                    <p className="text-xs text-gray-400 mt-1">기기를 변경하거나 데이터가 꼬인 경우 설정의 '데이터 초기화'를 활용하세요.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Important Notice */}
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-red-400 font-bold text-sm">주의사항</h4>
                        <p className="text-xs text-red-400/80 leading-relaxed mt-1">
                            브라우저의 '캐시 삭제' 또는 '모든 데이터 삭제' 수행 시 서비스 내의 모든 데이터(API 키, 분석 기록)가 삭제됩니다.
                            중요한 데이터는 정기적으로 백업해 두시기를 권장합니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer space */}
            <div className="py-20 text-center">
                <p className="text-gray-600 text-xs">
                    &copy; 2024 AI-MEN Divine Content Engine. Powered by Google Gemini.
                </p>
            </div>
        </div>
    );
}

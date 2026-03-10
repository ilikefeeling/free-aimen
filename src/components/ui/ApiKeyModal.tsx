'use client';

import React, { useState, useEffect } from 'react';
import { getLocalSermons, clearLocalSermons } from '@/lib/sermonStore';
import { Shield, Download, Trash2 } from 'lucide-react';
import { saveGeminiApiKey, getGeminiApiKey, hasGeminiApiKey } from '@/lib/apiKeyStore';
import { validateApiKey } from '@/lib/gemini/client';
import { Button } from './Button';

interface ApiKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function ApiKeyModal({ isOpen, onClose, onSuccess }: ApiKeyModalProps) {
    const [apiKey, setApiKey] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showKey, setShowKey] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setApiKey(getGeminiApiKey());
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleExport = () => {
        const sermons = getLocalSermons();
        const dataStr = JSON.stringify(sermons, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = `aimen-backup-${new Date().toISOString().split('T')[0]}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        // toast.success('데이터가 성공적으로 내보내졌습니다.'); // Assuming toast is available globally or imported
    };

    const handleReset = () => {
        if (confirm('정말로 모든 로컬 데이터를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            clearLocalSermons();
            // toast.success('모든 데이터가 초기화되었습니다.'); // Assuming toast is available globally or imported
            onSuccess?.();
            onClose();
        }
    };

    const handleSave = async () => {
        if (!apiKey) {
            setError('API 키를 입력해주세요.');
            return;
        }

        setIsValidating(true);
        setError(null);

        try {
            const isValid = await validateApiKey(apiKey);
            if (isValid) {
                saveGeminiApiKey(apiKey);
                onSuccess();
                onClose();
            } else {
                setError('유효하지 않은 API 키입니다. 다시 확인해주세요.');
            }
        } catch (err) {
            setError('검증 중 오류가 발생했습니다.');
        } finally {
            setIsValidating(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Gemini API 키 설정</h2>
                    <p className="text-slate-400 text-sm mb-6">
                        이 서비스는 사용자의 개인 API 키를 사용하여 동작합니다.
                        입력하신 키는 <span className="text-blue-400 font-semibold">브라우저 로컬 저장소에만 안전하게 저장</span>되며,
                        서버로 절대 전송되지 않습니다.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                Google Gemini API Key
                            </label>
                            <div className="relative">
                                <input
                                    type={showKey ? 'text' : 'password'}
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="AI... (Gemini API Key)"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowKey(!showKey)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    {showKey ? '숨기기' : '보기'}
                                </button>
                            </div>
                            {error && (
                                <p className="mt-2 text-sm text-red-500 flex items-center">
                                    <span className="mr-1">⚠️</span> {error}
                                </p>
                            )}
                        </div>

                        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                            <h3 className="text-sm font-semibold text-blue-400 mb-1">💡 도움말</h3>
                            <p className="text-xs text-blue-300/80 leading-relaxed">
                                API 키가 없으신가요? <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Google AI Studio</a>에서 무료로 발급받으실 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    <div className="pt-4 mt-2 border-t border-slate-800 space-y-4">
                        <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Shield className="w-3 h-3" /> Data Management
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleExport}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-400 border border-slate-800 hover:bg-slate-800 transition-all"
                            >
                                <Download className="w-3 h-3" /> 백업 추출
                            </button>
                            <button
                                onClick={handleReset}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-red-500/70 border border-red-500/10 hover:bg-red-500/5 transition-all"
                            >
                                <Trash2 className="w-3 h-3" /> 데이터 초기화
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-800/30 flex gap-3">
                    <button
                        onClick={onClose}
                        disabled={isValidating}
                        className="flex-1 px-4 py-3 rounded-xl text-slate-400 font-medium hover:bg-slate-800 transition-colors disabled:opacity-50"
                    >
                        취소
                    </button>
                    <Button
                        onClick={handleSave}
                        isLoading={isValidating}
                        className="flex-1 py-3"
                    >
                        {isValidating ? '검증 중...' : '저장 및 시작'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

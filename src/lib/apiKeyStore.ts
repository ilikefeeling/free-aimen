'use client';

const GEMINI_KEY_NAME = 'aimen_gemini_api_key';

/**
 * Obfuscates a string using Base64
 */
const obfuscator = {
    encode: (str: string) => {
        if (typeof window === 'undefined') return str;
        return btoa(str);
    },
    decode: (str: string) => {
        if (typeof window === 'undefined') return str;
        try {
            return atob(str);
        } catch (e) {
            return '';
        }
    }
};

/**
 * Saves the Gemini API key to LocalStorage
 */
export function saveGeminiApiKey(key: string): void {
    if (typeof window !== 'undefined') {
        const obfuscated = obfuscator.encode(key);
        localStorage.setItem(GEMINI_KEY_NAME, obfuscated);
    }
}

/**
 * Gets the Gemini API key from LocalStorage
 */
export function getGeminiApiKey(): string {
    if (typeof window !== 'undefined') {
        const obfuscated = localStorage.getItem(GEMINI_KEY_NAME);
        if (obfuscated) {
            return obfuscator.decode(obfuscated);
        }
    }
    return '';
}

/**
 * Clears the Gemini API key from LocalStorage
 */
export function clearGeminiApiKey(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(GEMINI_KEY_NAME);
    }
}

/**
 * Checks if a Gemini API key exists
 */
export function hasGeminiApiKey(): boolean {
    return !!getGeminiApiKey();
}

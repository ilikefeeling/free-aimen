'use client';

import { Highlight } from '@/types';

export interface Sermon {
    id: string;
    title: string;
    videoFile?: File;
    videoUrl: string;
    thumbnailUrl?: string;
    churchName: string | null;
    analysisData: {
        highlights: Highlight[];
        summary?: string;
        status: 'COMPLETED' | 'FAILED' | 'ANALYZING';
    };
    createdAt: string;
}

const SERMONS_KEY = 'aimen_local_sermons';

/**
 * Saves a sermon to LocalStorage
 */
export function saveLocalSermon(sermon: Sermon): void {
    if (typeof window === 'undefined') return;

    const existing = getLocalSermons();
    // Keep only serializable data
    const serializableSermon = { ...sermon };
    delete serializableSermon.videoFile;

    const updated = [serializableSermon, ...existing.filter(s => s.id !== sermon.id)];
    localStorage.setItem(SERMONS_KEY, JSON.stringify(updated));
}

/**
 * Gets all sermons from LocalStorage
 */
export function getLocalSermons(): Sermon[] {
    if (typeof window === 'undefined') return [];

    const data = localStorage.getItem(SERMONS_KEY);
    if (!data) return [];

    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

/**
 * Gets a single sermon by ID
 */
export function getLocalSermon(id: string): Sermon | null {
    const sermons = getLocalSermons();
    return sermons.find(s => s.id === id) || null;
}

/**
 * Deletes a sermon from LocalStorage
 */
export function deleteLocalSermon(id: string): void {
    if (typeof window === 'undefined') return;

    const existing = getLocalSermons();
    const updated = existing.filter(s => s.id !== id);
    localStorage.setItem(SERMONS_KEY, JSON.stringify(updated));
}

/**
 * Clears all local sermons
 */
export function clearLocalSermons(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(SERMONS_KEY);
}

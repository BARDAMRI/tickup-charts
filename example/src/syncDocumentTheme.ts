import {ChartTheme} from 'tickup/full';

/**
 * Keeps `document.documentElement` in sync with the in-app chart theme so global CSS variables apply.
 */
export function syncDocumentTheme(theme: ChartTheme): void {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const mode = theme === ChartTheme.dark ? 'dark' : 'light';
    root.dataset.theme = mode;
    root.classList.toggle('dark-theme', mode === 'dark');
    root.classList.toggle('light-theme', mode === 'light');
}

/**
 * Hosted showcase-only demo identifiers. They are public, client-visible, and intended solely
 * for this demo site — not for securing server-side resources.
 *
 * Optional build-time overrides (still exposed in the client bundle):
 * - VITE_TICKUP_SHOWCASE_LICENSE_KEY
 * - VITE_TICKUP_SHOWCASE_USER_ID
 */
export const SHOWCASE_PRIME_LICENSE_KEY =
    (import.meta.env.VITE_TICKUP_SHOWCASE_LICENSE_KEY as string | undefined)?.trim() || 'TICKUP-PRO-2026-BETA';

export const SHOWCASE_PRIME_USER_ID =
    (import.meta.env.VITE_TICKUP_SHOWCASE_USER_ID as string | undefined)?.trim() || 'showcase@tickup.demo';

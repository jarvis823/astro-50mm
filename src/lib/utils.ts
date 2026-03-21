/**
 * Format a date using Intl.DateTimeFormat (no external deps needed in Workers).
 */
export function formatDate(date: Date, locale = 'en-us'): string {
	return date.toLocaleDateString(locale, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

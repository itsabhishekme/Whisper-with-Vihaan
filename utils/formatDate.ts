/**
 * utils/formatDate.ts
 * ---------------------------------------
 * Reusable date formatting utilities
 * Whisper with Vihaan
 * ---------------------------------------
 */

export interface FormatDateOptions {
  locale?: string;
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";
}

/**
 * Example:
 * formatDate("2026-07-06")
 * → July 6, 2026
 */
export function formatDate(
  date: Date | string | number,
  options: FormatDateOptions = {}
): string {
  const {
    locale = "en-IN",
    dateStyle = "long",
  } = options;

  return new Intl.DateTimeFormat(locale, {
    dateStyle,
  }).format(new Date(date));
}

/**
 * Example:
 * formatDateTime(new Date())
 * → July 6, 2026 at 6:45 PM
 */
export function formatDateTime(
  date: Date | string | number,
  options: FormatDateOptions = {}
): string {
  const {
    locale = "en-IN",
    dateStyle = "long",
    timeStyle = "short",
  } = options;

  return new Intl.DateTimeFormat(locale, {
    dateStyle,
    timeStyle,
  }).format(new Date(date));
}

/**
 * Example:
 * formatTime(new Date())
 * → 6:45 PM
 */
export function formatTime(
  date: Date | string | number,
  locale = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
}

/**
 * Example:
 * formatShortDate(new Date())
 * → 06 Jul 2026
 */
export function formatShortDate(
  date: Date | string | number,
  locale = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Example:
 * getDayName(new Date())
 * → Monday
 */
export function getDayName(
  date: Date | string | number,
  locale = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
  }).format(new Date(date));
}

/**
 * Example:
 * getMonthName(new Date())
 * → July
 */
export function getMonthName(
  date: Date | string | number,
  locale = "en-IN"
): string {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
  }).format(new Date(date));
}

/**
 * Example:
 * getYear(new Date())
 * → 2026
 */
export function getYear(
  date: Date | string | number
): number {
  return new Date(date).getFullYear();
}

/**
 * Example:
 * isToday(new Date())
 * → true
 */
export function isToday(
  date: Date | string |number
): boolean {
  const today = new Date();
  const target = new Date(date);

  return (
    today.getDate() === target.getDate() &&
    today.getMonth() === target.getMonth() &&
    today.getFullYear() === target.getFullYear()
  );
}

/**
 * Example:
 * formatRelativeDate(new Date())
 * → Today
 * → Yesterday
 * → 3 days ago
 */
export function formatRelativeDate(
  date: Date | string | number
): string {
  const target = new Date(date);
  const now = new Date();

  const diff =
    now.getTime() - target.getTime();

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return formatDate(target);
}

/**
 * Example:
 * getCurrentYear()
 * → 2026
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Example:
 * getCurrentDate()
 * → Date object
 */
export function getCurrentDate(): Date {
  return new Date();
}
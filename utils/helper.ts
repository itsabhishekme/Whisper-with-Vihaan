/**
 * ============================================================================
 * Whisper with Vihaan
 * One Meal One Hope
 * Utility Helper Functions
 * ============================================================================
 */

/**
 * Combine class names conditionally.
 *
 * Example:
 * cn("p-4", isActive && "bg-red-500")
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Truncate long text.
 */
export function truncate(
  text: string,
  length: number = 120
): string {
  if (!text) return "";

  return text.length > length
    ? `${text.slice(0, length)}...`
    : text;
}

/**
 * Capitalize first letter.
 */
export function capitalize(text: string): string {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Convert text to slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Remove duplicate values.
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Random number between min and max.
 */
export function randomNumber(
  min: number,
  max: number
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Clamp a number.
 */
export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Delay helper.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Format large numbers.
 *
 * 1500 => 1.5K
 * 2300000 => 2.3M
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Format currency (INR).
 */
export function formatCurrency(
  amount: number,
  currency: string = "INR"
): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format percentage.
 */
export function formatPercent(
  value: number,
  digits: number = 0
): string {
  return `${value.toFixed(digits)}%`;
}

/**
 * Generate random ID.
 */
export function generateId(length: number = 10): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
}

/**
 * Copy text to clipboard.
 */
export async function copyToClipboard(
  text: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Scroll to page top.
 */
export function scrollToTop(
  behavior: ScrollBehavior = "smooth"
): void {
  if (typeof window === "undefined") return;

  window.scrollTo({
    top: 0,
    behavior,
  });
}

/**
 * Scroll to element.
 */
export function scrollToElement(
  id: string,
  behavior: ScrollBehavior = "smooth"
): void {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior,
      block: "start",
    });
  }
}

/**
 * Get initials from a name.
 */
export function getInitials(name: string): string {
  return name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Read time estimation.
 */
export function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

/**
 * Check if value is empty.
 */
export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;

  if (typeof value === "string")
    return value.trim().length === 0;

  if (Array.isArray(value))
    return value.length === 0;

  if (typeof value === "object")
    return Object.keys(value as object).length === 0;

  return false;
}

/**
 * Convert bytes to readable size.
 */
export function formatBytes(
  bytes: number,
  decimals = 2
): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB",
    "TB",
  ];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) +
    " " +
    sizes[i]
  );
}

/**
 * Shuffle array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

/**
 * Debounce helper.
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Random quote for loading screens or banners.
 */
export const inspirationalQuotes = [
  "Every meal shared plants a seed of hope.",
  "Kindness begins with a single plate.",
  "No one should sleep hungry.",
  "Hope grows where compassion is served.",
  "Together, one meal can change a life.",
  "Small acts create lasting impact.",
];
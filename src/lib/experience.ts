function parseExperienceDate(date: string): Date {
  const normalized = date.trim().toLowerCase();

  if (normalized === 'present') {
    return new Date();
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid experience date: ${date}`);
  }

  return parsed;
}

function getInclusiveMonthCount(startDate: Date, endDate: Date): number {
  const yearDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthDiff = endDate.getMonth() - startDate.getMonth();

  return yearDiff * 12 + monthDiff + 1;
}

function formatDuration(totalMonths: number): string {
  if (totalMonths <= 0) {
    return '';
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }

  return parts.join(' ');
}

export function getExperienceDuration(
  startDate: string,
  endDate: string,
  isCurrent: boolean,
): string {
  const start = parseExperienceDate(startDate);
  const end = isCurrent ? new Date() : parseExperienceDate(endDate);

  if (end < start) {
    return '';
  }

  return formatDuration(getInclusiveMonthCount(start, end));
}

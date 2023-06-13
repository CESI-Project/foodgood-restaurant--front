export const idGenerator = (suffix?: string | number) =>
	suffix !== null && suffix !== undefined ? `${Date.now()}-${suffix}` : `${Date.now()}`;

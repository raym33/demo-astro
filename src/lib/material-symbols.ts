export const MATERIAL_SYMBOLS = [
	'analytics',
	'arrow_forward',
	'arrow_outward',
	'auto_awesome',
	'bolt',
	'call',
	'campaign',
	'calendar_month',
	'check_circle',
	'close',
	'code',
	'explore',
	'flag',
	'grid_view',
	'insights',
	'inventory_2',
	'instagram',
	'keyboard_arrow_right',
	'layers',
	'linkedin',
	'location_on',
	'mail',
	'monitoring',
	'north_east',
	'open_in_new',
	'rocket_launch',
	'schedule',
	'strategy',
	'task_alt',
	'timeline',
	'twitter',
	'tune',
	'travel_explore',
	'visibility',
	'widgets',
] as const;

export type MaterialSymbolName = (typeof MATERIAL_SYMBOLS)[number];

export interface SiteIconDefinition {
	viewBox: string;
	body: string;
}

const VIEW_BOX = '0 0 24 24';
const ARROW_FORWARD =
	'<path d="M5 12h14" /><path d="m13 6 6 6-6 6" />';
const ARROW_OUTWARD =
	'<path d="M7 17 17 7" /><path d="M8 7h9v9" />';
const SPARKLE =
	'<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7Z" /><path d="m18.5 2 .6 1.5 1.4.6-1.4.6-.6 1.5-.6-1.5-1.4-.6 1.4-.6Z" /><path d="m5 15 .8 2 2 .8-2 .8L5 21l-.8-2.2-2-.8 2-.8Z" />';
const BOLT =
	'<path d="M13 2 4 14h6l-1 8 9-12h-6Z" fill="currentColor" stroke="none" />';
const PHONE =
	'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6.1-6.1A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.5-1.3a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />';
const CAMPAIGN =
	'<path d="M4 11h4l8-4v10l-8-4H4Z" /><path d="M8 15 9.5 20" /><path d="M18 9.5a3.5 3.5 0 0 1 0 5" />';
const CALENDAR =
	'<rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 9h18" /><path d="M8 13h3" /><path d="M13 13h3" /><path d="M8 17h3" /><path d="M13 17h3" />';
const CHECK_CIRCLE =
	'<circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.3 2.3 4.7-4.8" />';
const CLOSE =
	'<path d="m6 6 12 12" /><path d="M18 6 6 18" />';
const CODE =
	'<path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" />';
const COMPASS =
	'<circle cx="12" cy="12" r="9" /><path d="m10 10 6-2-2 6-6 2Z" />';
const FLAG =
	'<path d="M5 3v18" /><path d="M5 4h10l-2 4 2 4H5" />';
const GRID =
	'<rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" />';
const BAR_CHART =
	'<path d="M5 19V11" /><path d="M12 19V5" /><path d="M19 19v-8" /><path d="M3 19h18" />';
const TREND =
	'<path d="M4 16 9 11l3 3 8-8" /><path d="M14 6h6v6" />';
const BOX =
	'<path d="M4 8 12 4l8 4-8 4Z" /><path d="M4 8v8l8 4 8-4V8" /><path d="M12 12v8" />';
const INSTAGRAM =
	'<rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />';
const CHEVRON_RIGHT = '<path d="m9 6 6 6-6 6" />';
const LAYERS =
	'<path d="M12 4 4 8l8 4 8-4Z" /><path d="m4 12 8 4 8-4" /><path d="m4 16 8 4 8-4" />';
const LINKEDIN =
	'<rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="8" cy="7.5" r="1" fill="currentColor" stroke="none" /><path d="M8 10v7" /><path d="M12 10v7" /><path d="M12 13a2.2 2.2 0 0 1 4.4 0V17" />';
const LOCATION =
	'<path d="M12 21s-6-4.7-6-10a6 6 0 1 1 12 0c0 5.3-6 10-6 10Z" /><circle cx="12" cy="11" r="2.5" />';
const MAIL =
	'<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" />';
const MONITOR =
	'<rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /><path d="m7 12 3-3 2 2 4-4" />';
const ROCKET =
	'<path d="M14 4c3 0 6 3 6 6-4 1-7 4-8 8-3 0-6-3-6-6 1-4 4-7 8-8Z" /><path d="m9 15-3 3" /><path d="m12 18 0 4 2-2 2 2 0-4" /><circle cx="15" cy="9" r="1.5" />';
const CLOCK =
	'<circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" />';
const STRATEGY =
	'<circle cx="6" cy="18" r="2" /><circle cx="10" cy="10" r="2" /><circle cx="18" cy="6" r="2" /><path d="m7.5 16.5 1.5-4.5 7-4" /><path d="m18 8v6" /><path d="m15 11 3 3 3-3" />';
const TASK_ALT =
	'<circle cx="12" cy="12" r="9" /><path d="m8 12.3 2.2 2.2 5-5" />';
const TIMELINE =
	'<path d="M4 18h16" /><circle cx="7" cy="12" r="1.5" /><circle cx="12" cy="8" r="1.5" /><circle cx="17" cy="14" r="1.5" /><path d="M8.5 11 10.5 9" /><path d="m13.5 9 2 4" />';
const TWITTER =
	'<path d="M20 6.5c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.1.8A3.4 3.4 0 0 0 11.6 9c0 .3 0 .6.1.9A9.6 9.6 0 0 1 5 6.8a3.4 3.4 0 0 0 1 4.5c-.5 0-1-.2-1.5-.4 0 1.7 1.2 3.1 2.8 3.4-.3.1-.7.1-1 .1h-.6c.4 1.4 1.7 2.4 3.2 2.5A6.9 6.9 0 0 1 4 18.3 9.7 9.7 0 0 0 9.3 20c6.4 0 9.9-5.2 9.9-9.8v-.5c.7-.4 1.3-1 1.8-1.7Z" />';
const TUNE =
	'<path d="M4 7h7" /><path d="M13 7h7" /><circle cx="12" cy="7" r="2" /><path d="M4 17h11" /><path d="M17 17h3" /><circle cx="16" cy="17" r="2" />';
const EYE =
	'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" />';

export const MATERIAL_SYMBOL_DEFINITIONS = {
	analytics: { viewBox: VIEW_BOX, body: BAR_CHART },
	arrow_forward: { viewBox: VIEW_BOX, body: ARROW_FORWARD },
	arrow_outward: { viewBox: VIEW_BOX, body: ARROW_OUTWARD },
	auto_awesome: { viewBox: VIEW_BOX, body: SPARKLE },
	bolt: { viewBox: VIEW_BOX, body: BOLT },
	call: { viewBox: VIEW_BOX, body: PHONE },
	campaign: { viewBox: VIEW_BOX, body: CAMPAIGN },
	calendar_month: { viewBox: VIEW_BOX, body: CALENDAR },
	check_circle: { viewBox: VIEW_BOX, body: CHECK_CIRCLE },
	close: { viewBox: VIEW_BOX, body: CLOSE },
	code: { viewBox: VIEW_BOX, body: CODE },
	explore: { viewBox: VIEW_BOX, body: COMPASS },
	flag: { viewBox: VIEW_BOX, body: FLAG },
	grid_view: { viewBox: VIEW_BOX, body: GRID },
	insights: { viewBox: VIEW_BOX, body: TREND },
	inventory_2: { viewBox: VIEW_BOX, body: BOX },
	instagram: { viewBox: VIEW_BOX, body: INSTAGRAM },
	keyboard_arrow_right: { viewBox: VIEW_BOX, body: CHEVRON_RIGHT },
	layers: { viewBox: VIEW_BOX, body: LAYERS },
	linkedin: { viewBox: VIEW_BOX, body: LINKEDIN },
	location_on: { viewBox: VIEW_BOX, body: LOCATION },
	mail: { viewBox: VIEW_BOX, body: MAIL },
	monitoring: { viewBox: VIEW_BOX, body: MONITOR },
	north_east: { viewBox: VIEW_BOX, body: ARROW_OUTWARD },
	open_in_new: {
		viewBox: VIEW_BOX,
		body: '<path d="M14 5h5v5" /><path d="M10 14 19 5" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />',
	},
	rocket_launch: { viewBox: VIEW_BOX, body: ROCKET },
	schedule: { viewBox: VIEW_BOX, body: CLOCK },
	strategy: { viewBox: VIEW_BOX, body: STRATEGY },
	task_alt: { viewBox: VIEW_BOX, body: TASK_ALT },
	timeline: { viewBox: VIEW_BOX, body: TIMELINE },
	twitter: { viewBox: VIEW_BOX, body: TWITTER },
	travel_explore: { viewBox: VIEW_BOX, body: COMPASS },
	tune: { viewBox: VIEW_BOX, body: TUNE },
	visibility: { viewBox: VIEW_BOX, body: EYE },
	widgets: { viewBox: VIEW_BOX, body: GRID },
} satisfies Record<MaterialSymbolName, SiteIconDefinition>;

import { SITE_URL } from "@/lib/site";

export const contactEmail = "drushikesh0105@gmail.com";

/** FormSubmit — works with static export (no backend). Verify inbox on first submission. */
export const contactFormEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

/** Helps FormSubmit identify the form origin (required for some hosts). */
export const contactFormUrl = `${SITE_URL}/#contact`;

export const formActivateUrl = `${SITE_URL}/form-activate.html`;

export const contactMailto = `mailto:${contactEmail}`;
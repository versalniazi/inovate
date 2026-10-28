// Shared between the contact form (client) and /api/contact (server).

export const serviceOptions = [
  "Website Development",
  "Website Redesign",
  "Custom Software",
  "Web Applications",
  "E-commerce",
  "UI/UX Design",
  "API Integration",
  "Digital Marketing",
  "SEO",
  "Advertising",
  "Maintenance & Support",
  "Website Health Check",
  "Consultation",
  "Other / Not Sure",
] as const;

export const budgetOptions = ["£15–£50", "£50–£100", "£100–£150", "£150–£500", "£500+", "Custom / Not Sure"] as const;

export type Enquiry = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

export type FieldErrors = Partial<Record<keyof Enquiry, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export const limits = { name: 100, business: 120, email: 160, phone: 20, message: 4000 } as const;

export function validateEnquiry(e: Enquiry): FieldErrors {
  const errors: FieldErrors = {};
  if (e.name.trim().length < 2) errors.name = "Please enter your full name.";
  else if (e.name.length > limits.name) errors.name = "Name is too long.";
  if (e.business.length > limits.business) errors.business = "Business name is too long.";
  if (!EMAIL_RE.test(e.email.trim()) || e.email.length > limits.email) errors.email = "Please enter a valid email address.";
  if (e.phone.trim() && !PHONE_RE.test(e.phone.trim())) errors.phone = "Please enter a valid phone number, or leave it blank.";
  if (!(serviceOptions as readonly string[]).includes(e.service)) errors.service = "Please choose the service you need.";
  if (!(budgetOptions as readonly string[]).includes(e.budget)) errors.budget = "Please choose an approximate budget.";
  if (e.message.trim().length < 20) errors.message = "Please describe your project in a little more detail (at least 20 characters).";
  else if (e.message.length > limits.message) errors.message = `Please keep your description under ${limits.message} characters.`;
  return errors;
}

export type VolunteerRole =
  | "Food Distribution"
  | "Community Kitchen"
  | "Fundraising"
  | "Event Management"
  | "Photography"
  | "Videography"
  | "Social Media"
  | "Content Writing"
  | "Graphic Design"
  | "Medical Support"
  | "Teaching"
  | "Logistics"
  | "Administration"
  | "Corporate Partnership"
  | "Other";

export type VolunteerAvailability =
  | "Weekdays"
  | "Weekends"
  | "Flexible"
  | "Full Time"
  | "Part Time"
  | "Remote";

export type VolunteerStatus =
  | "Pending"
  | "Approved"
  | "Active"
  | "Inactive"
  | "Rejected";

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface VolunteerSkills {
  communication?: boolean;
  leadership?: boolean;
  photography?: boolean;
  videography?: boolean;
  fundraising?: boolean;
  teaching?: boolean;
  cooking?: boolean;
  firstAid?: boolean;
  logistics?: boolean;
  graphicDesign?: boolean;
  socialMedia?: boolean;
  writing?: boolean;
  driving?: boolean;
  eventManagement?: boolean;
}

export interface VolunteerSocialLinks {
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  x?: string;
  website?: string;
}

export interface VolunteerExperience {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

export interface Volunteer {
  id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  age: number;

  gender?: string;

  city: string;
  state: string;
  country: string;

  address?: string;
  postalCode?: string;

  occupation?: string;
  organization?: string;

  role: VolunteerRole;

  availability: VolunteerAvailability;

  preferredLanguage?: string[];

  interests: string[];

  skills: VolunteerSkills;

  experience?: VolunteerExperience[];

  social?: VolunteerSocialLinks;

  emergencyContact?: EmergencyContact;

  motivation: string;

  hoursPerWeek?: number;

  profileImage?: string;

  documents?: string[];

  status: VolunteerStatus;

  joinedAt: string;

  updatedAt?: string;

  notes?: string;

  isVerified: boolean;

  acceptedTerms: boolean;

  acceptedPrivacy: boolean;
}

export interface VolunteerStats {
  totalVolunteers: number;
  activeVolunteers: number;
  mealsServed: number;
  citiesCovered: number;
  eventsCompleted: number;
  volunteerHours: number;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  role: VolunteerRole;
  date: string;
  duration: string;
  slots: number;
  filledSlots: number;
  image?: string;
  featured?: boolean;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  city: string;
  state: string;
  country: string;
  role: VolunteerRole;
  availability: VolunteerAvailability;
  interests: string[];
  motivation: string;
  acceptedTerms: boolean;
  acceptedPrivacy: boolean;
}
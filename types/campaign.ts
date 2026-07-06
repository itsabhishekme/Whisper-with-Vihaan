// =============================================
// Campaign Types
// Whisper with Vihaan
// One Meal One Hope
// =============================================

export type CampaignStatus =
  | "Upcoming"
  | "Active"
  | "Completed"
  | "Paused";

export type CampaignCategory =
  | "Food Distribution"
  | "Community Kitchen"
  | "Emergency Relief"
  | "School Feeding"
  | "Nutrition"
  | "Volunteer Drive"
  | "Fundraising"
  | "Awareness";

export interface CampaignStats {
  mealsServed: number;
  familiesHelped: number;
  volunteers: number;
  citiesReached: number;
  fundsRaised: number;
}

export interface CampaignGoal {
  id: string;
  title: string;
  description: string;
  target: number;
  achieved: number;
  unit: string;
}

export interface CampaignMilestone {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface CampaignGallery {
  id: string;
  image: string;
  alt: string;
}

export interface CampaignTeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface CampaignDonation {
  minimum: number;
  suggested: number[];
  currency: string;
}

export interface Campaign {
  id: string;

  slug: string;

  title: string;

  subtitle: string;

  shortDescription: string;

  description: string;

  status: CampaignStatus;

  category: CampaignCategory;

  featured: boolean;

  coverImage: string;

  bannerImage: string;

  gallery: CampaignGallery[];

  startDate: string;

  endDate?: string;

  location: string;

  organizer: string;

  stats: CampaignStats;

  goals: CampaignGoal[];

  milestones: CampaignMilestone[];

  team: CampaignTeamMember[];

  donation: CampaignDonation;

  tags: string[];

  createdAt: string;

  updatedAt: string;
}

export interface CampaignCardProps {
  campaign: Campaign;
}

export interface CampaignListProps {
  campaigns: Campaign[];
}

export interface CampaignFilter {
  category?: CampaignCategory;
  status?: CampaignStatus;
  featured?: boolean;
  search?: string;
}
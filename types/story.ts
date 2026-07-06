export interface Story {
  id: string;
  slug: string;

  title: string;
  subtitle?: string;
  summary: string;
  content: string;

  author: string;
  category:
    | "Success Story"
    | "Volunteer"
    | "Beneficiary"
    | "Campaign"
    | "Documentary"
    | "Community";

  status: "Draft" | "Published";

  featured: boolean;

  coverImage: string;
  gallery?: string[];

  videoUrl?: string;

  location: string;

  publishedAt: string;
  updatedAt?: string;

  readingTime: number;

  tags: string[];

  views?: number;
  likes?: number;
  shares?: number;
}

export interface StoryCardProps {
  story: Story;
}

export interface FeaturedStoryProps {
  story: Story;
}

export interface StoryListProps {
  stories: Story[];
}

export interface StorySectionProps {
  title: string;
  description?: string;
  stories: Story[];
}

export interface StoryFilter {
  search: string;
  category: Story["category"] | "All";
  featured?: boolean;
}

export interface StoryStats {
  totalStories: number;
  totalViews: number;
  totalVolunteers: number;
  totalMealsServed: number;
  totalCommunitiesReached: number;
}
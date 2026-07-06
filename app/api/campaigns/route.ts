import { NextResponse } from "next/server";

const campaigns = [
  {
    id: 1,
    slug: "one-meal-one-hope",
    title: "One Meal One Hope",
    category: "Food Security",
    status: "Active",
    featured: true,
    image: "/images/campaigns/one-meal-one-hope.jpg",
    location: "Bengaluru, Karnataka",
    goal: 100000,
    raised: 68500,
    volunteers: 245,
    beneficiaries: 12500,
    description:
      "One Meal One Hope is our flagship campaign dedicated to ensuring that every individual has access to at least one nutritious meal every day. Together with volunteers and donors, we are reducing hunger and restoring hope.",
  },
  {
    id: 2,
    slug: "community-kitchen",
    title: "Community Kitchen",
    category: "Community Support",
    status: "Active",
    featured: false,
    image: "/images/campaigns/community-kitchen.jpg",
    location: "Mysuru, Karnataka",
    goal: 50000,
    raised: 32800,
    volunteers: 110,
    beneficiaries: 4300,
    description:
      "Supporting community kitchens that prepare and distribute fresh meals to vulnerable families and individuals.",
  },
  {
    id: 3,
    slug: "school-feeding",
    title: "School Feeding Program",
    category: "Education",
    status: "Active",
    featured: false,
    image: "/images/campaigns/school-feeding.jpg",
    location: "Rural Karnataka",
    goal: 75000,
    raised: 48600,
    volunteers: 156,
    beneficiaries: 6200,
    description:
      "Providing nutritious meals to school children, improving attendance, health, and learning outcomes.",
  },
  {
    id: 4,
    slug: "emergency-food-relief",
    title: "Emergency Food Relief",
    category: "Disaster Relief",
    status: "Active",
    featured: false,
    image: "/images/campaigns/emergency-relief.jpg",
    location: "Across India",
    goal: 150000,
    raised: 91000,
    volunteers: 340,
    beneficiaries: 18400,
    description:
      "Rapid food assistance for communities affected by natural disasters, emergencies, and humanitarian crises.",
  },
  {
    id: 5,
    slug: "festival-meal-drive",
    title: "Festival Meal Drive",
    category: "Seasonal Campaign",
    status: "Upcoming",
    featured: false,
    image: "/images/campaigns/festival-drive.jpg",
    location: "India",
    goal: 60000,
    raised: 12000,
    volunteers: 72,
    beneficiaries: 0,
    description:
      "Ensuring that families experiencing food insecurity can celebrate festivals with nutritious meals and dignity.",
  },
];

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      total: campaigns.length,
      campaigns,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const campaign = {
      id: campaigns.length + 1,
      slug:
        body.slug ??
        body.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, ""),
      title: body.title,
      category: body.category,
      status: body.status ?? "Draft",
      featured: body.featured ?? false,
      image: body.image ?? "/images/campaigns/default.jpg",
      location: body.location,
      goal: body.goal ?? 0,
      raised: body.raised ?? 0,
      volunteers: body.volunteers ?? 0,
      beneficiaries: body.beneficiaries ?? 0,
      description: body.description,
    };

    campaigns.push(campaign);

    return NextResponse.json(
      {
        success: true,
        message: "Campaign created successfully.",
        campaign,
      },
      {
        status: 201,
      }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      {
        status: 400,
      }
    );
  }
}
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const impact = {
      success: true,
      message: "Impact data fetched successfully.",

      organization: {
        name: "Whisper with Vihaan",
        campaign: "One Meal One Hope",
        mission:
          "Ensuring every individual has access to at least one nutritious meal every day.",
      },

      statistics: {
        mealsServed: 128450,
        familiesSupported: 18230,
        childrenFed: 38750,
        volunteers: 1260,
        activeCities: 42,
        communityKitchens: 18,
        partnerOrganizations: 31,
        donationsReceived: 9645,
      },

      achievements: [
        {
          id: 1,
          title: "Meals Distributed",
          value: "128,450+",
          icon: "UtensilsCrossed",
          description:
            "Nutritious meals served to individuals and families experiencing food insecurity.",
        },
        {
          id: 2,
          title: "Lives Impacted",
          value: "38,750+",
          icon: "HeartHandshake",
          description:
            "Children and adults supported through food relief initiatives.",
        },
        {
          id: 3,
          title: "Volunteers",
          value: "1,260+",
          icon: "Users",
          description:
            "Dedicated volunteers helping distribute meals and raise awareness.",
        },
        {
          id: 4,
          title: "Communities Reached",
          value: "42",
          icon: "MapPin",
          description:
            "Cities and rural communities benefiting from our programs.",
        },
      ],

      sdgGoals: [
        {
          goal: "SDG 1",
          title: "No Poverty",
        },
        {
          goal: "SDG 2",
          title: "Zero Hunger",
        },
        {
          goal: "SDG 3",
          title: "Good Health and Well-being",
        },
        {
          goal: "SDG 17",
          title: "Partnerships for the Goals",
        },
      ],

      recentActivities: [
        {
          id: 1,
          title: "Community Kitchen Expansion",
          location: "Bengaluru",
          meals: 3500,
          date: "2026-07-01",
        },
        {
          id: 2,
          title: "School Nutrition Drive",
          location: "Mysuru",
          meals: 1200,
          date: "2026-06-28",
        },
        {
          id: 3,
          title: "Emergency Food Relief",
          location: "Chennai",
          meals: 2800,
          date: "2026-06-24",
        },
      ],

      quote:
        "Every meal served is a step toward dignity, hope, and a future without hunger.",

      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(impact, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch impact data.",
        error:
          error instanceof Error ? error.message : "Unknown server error",
      },
      {
        status: 500,
      }
    );
  }
}
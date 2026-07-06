import { NextRequest, NextResponse } from "next/server";

interface Story {
  id: number;
  title: string;
  slug: string;
  category: string;
  location: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  mealsServed: number;
  peopleHelped: number;
}

const stories: Story[] = [
  {
    id: 1,
    title: "One Meal Changed an Entire Family",
    slug: "one-meal-changed-family",
    category: "Hope Story",
    location: "Bengaluru, Karnataka",
    date: "July 2026",
    image: "/images/stories/story-1.jpg",
    excerpt:
      "A simple meal restored hope for a struggling family and inspired an entire community to support them.",
    content:
      "Through the One Meal One Hope campaign, volunteers reached a family facing severe food insecurity. What began as a single meal became a long-term community effort, providing nutrition, education support, and renewed hope.",
    mealsServed: 1250,
    peopleHelped: 320,
  },
  {
    id: 2,
    title: "Volunteers Serving with Compassion",
    slug: "volunteers-serving-compassion",
    category: "Volunteer Story",
    location: "Mysuru, Karnataka",
    date: "June 2026",
    image: "/images/stories/story-2.jpg",
    excerpt:
      "Local volunteers came together to distribute hundreds of meals in underserved communities.",
    content:
      "More than fifty volunteers prepared and distributed fresh meals across multiple neighborhoods, ensuring families received nutritious food and encouragement.",
    mealsServed: 980,
    peopleHelped: 260,
  },
  {
    id: 3,
    title: "Every Child Deserves a Meal",
    slug: "every-child-deserves-meal",
    category: "Children",
    location: "Chennai, Tamil Nadu",
    date: "May 2026",
    image: "/images/stories/story-3.jpg",
    excerpt:
      "Nutritious meals help children focus in school and dream about a brighter future.",
    content:
      "Access to daily meals improved school attendance and overall well-being, giving children the opportunity to learn and grow with confidence.",
    mealsServed: 2100,
    peopleHelped: 540,
  },
];

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Stories fetched successfully.",
      total: stories.length,
      data: stories,
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      slug,
      category,
      location,
      image,
      excerpt,
      content,
      mealsServed,
      peopleHelped,
    } = body;

    if (!title || !slug || !excerpt) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, slug and excerpt are required.",
        },
        { status: 400 }
      );
    }

    const newStory: Story = {
      id: stories.length + 1,
      title,
      slug,
      category: category || "Hope Story",
      location: location || "India",
      date: new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
      }),
      image: image || "/images/stories/default.jpg",
      excerpt,
      content: content || "",
      mealsServed: mealsServed || 0,
      peopleHelped: peopleHelped || 0,
    };

    stories.push(newStory);

    return NextResponse.json(
      {
        success: true,
        message: "Story created successfully.",
        data: newStory,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request body.",
      },
      { status: 500 }
    );
  }
}
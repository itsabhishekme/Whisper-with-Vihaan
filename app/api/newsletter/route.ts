import { NextRequest, NextResponse } from "next/server";

interface NewsletterRequest {
  email: string;
}

const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export async function POST(request: NextRequest) {
  try {
    const body: NewsletterRequest = await request.json();

    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    /**
     * TODO:
     * Save to your database
     *
     * Example:
     * await prisma.newsletter.create({
     *   data: { email }
     * })
     *
     * or
     *
     * await mongooseModel.create({ email })
     */

    console.log("Newsletter Subscriber:", email);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for subscribing to One Meal One Hope.",
        data: {
          email,
          subscribedAt: new Date().toISOString(),
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    endpoint: "/api/newsletter",
    method: "POST",
    description:
      "Subscribe an email address to the One Meal One Hope newsletter.",
    body: {
      email: "example@email.com",
    },
  });
}
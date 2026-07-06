import { NextRequest, NextResponse } from "next/server";

type Volunteer = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  age: number;
  occupation: string;
  interests: string[];
  availability: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body: Volunteer = await request.json();

    const {
      fullName,
      email,
      phone,
      city,
      state,
      age,
      occupation,
      interests,
      availability,
      message,
    } = body;

    // Validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !occupation ||
      !availability
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (age < 18) {
      return NextResponse.json(
        {
          success: false,
          message: "Volunteers must be at least 18 years old.",
        },
        {
          status: 400,
        }
      );
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Future Database Save
    const volunteer = {
      id: crypto.randomUUID(),
      fullName,
      email,
      phone,
      city,
      state,
      age,
      occupation,
      interests,
      availability,
      message,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    console.log("New Volunteer Registration");
    console.table(volunteer);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for joining One Meal One Hope. Our team will contact you soon.",
        data: volunteer,
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
        message: "Something went wrong.",
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
    message: "Volunteer API",
    endpoints: {
      POST: "/api/volunteer",
    },
    fields: [
      "fullName",
      "email",
      "phone",
      "city",
      "state",
      "age",
      "occupation",
      "interests",
      "availability",
      "message",
    ],
  });
}
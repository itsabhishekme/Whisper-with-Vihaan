import { NextRequest, NextResponse } from "next/server";

interface DonationRequest {
  name: string;
  email: string;
  phone?: string;
  amount: number;
  message?: string;
  donationType?: "one-time" | "monthly";
}

export async function POST(request: NextRequest) {
  try {
    const body: DonationRequest = await request.json();

    const {
      name,
      email,
      phone,
      amount,
      message,
      donationType = "one-time",
    } = body;

    // Validation
    if (!name || !email || !amount) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and donation amount are required.",
        },
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Donation amount must be greater than zero.",
        },
        { status: 400 }
      );
    }

    // Future:
    // Save to database
    // Create Razorpay/Stripe Order
    // Send confirmation email

    const donation = {
      id: `DON-${Date.now()}`,
      donor: name,
      email,
      phone: phone || "",
      amount,
      donationType,
      message: message || "",
      currency: "INR",
      campaign: "One Meal One Hope",
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for supporting One Meal One Hope.",

        data: donation,

        impact: {
          estimatedMeals: Math.floor(amount / 25),
          campaign: "One Meal One Hope",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,

    campaign: "One Meal One Hope",

    description:
      "Support our mission to ensure every individual receives at least one nutritious meal every day.",

    suggestedAmounts: [
      {
        amount: 25,
        label: "Feed 1 Person",
      },
      {
        amount: 100,
        label: "Feed 4 People",
      },
      {
        amount: 500,
        label: "Feed 20 People",
      },
      {
        amount: 1000,
        label: "Support a Family",
      },
      {
        amount: 5000,
        label: "Community Kitchen",
      },
    ],

    paymentMethods: [
      "UPI",
      "Credit Card",
      "Debit Card",
      "Net Banking",
      "Wallet",
    ],

    currency: "INR",
  });
}
import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function GET() {
  return NextResponse.json(
    {
      success: true,
      message: "Whisper with Vihaan Contact API",

      endpoints: {
        method: "POST",
        url: "/api/contact",
      },

      fields: [
        "name",
        "email",
        "phone",
        "subject",
        "message",
      ],
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    // Example payload
    const contact = {
      id: crypto.randomUUID(),

      name,

      email,

      phone: phone || "",

      subject,

      message,

      createdAt: new Date().toISOString(),
    };

    /**
     * Save to Database
     *
     * await prisma.contact.create(...)
     *
     * OR
     *
     * await mongoose.save(...)
     */

    /**
     * Send Email
     *
     * await resend.emails.send(...)
     */

    console.log(contact);

    return NextResponse.json(
      {
        success: true,

        message:
          "Thank you for contacting Whisper with Vihaan. We will get back to you soon.",

        data: contact,
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
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, message, mailVolume } = body;

    // Basic validation
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the contact form submission (replace with actual email service)
    console.log("📧 Contact Form Submission:", {
      name,
      company,
      email,
      message,
      mailVolume,
      timestamp: new Date().toISOString(),
    });

    // Simulate successful submission
    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

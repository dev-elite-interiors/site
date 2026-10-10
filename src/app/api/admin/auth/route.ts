import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info.develiteinteriors@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Abhiraj@7645";
const COOKIE_NAME = "de_admin_session";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (
      email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD
    ) {
      const token = Buffer.from(
        JSON.stringify({
          email: ADMIN_EMAIL,
          role: "superadmin",
          timestamp: Date.now(),
        })
      ).toString("base64");

      const cookieStore = await cookies();
      cookieStore.set({
        name: COOKIE_NAME,
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({
        success: true,
        message: "Authenticated successfully",
        user: { email: ADMIN_EMAIL, role: "superadmin" },
      });
    }

    return NextResponse.json(
      { error: "Invalid credentials. Please verify your email and password." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication request failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME);

  if (!session || !session.value) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const data = JSON.parse(Buffer.from(session.value, "base64").toString("utf-8"));
    if (data.email === ADMIN_EMAIL) {
      return NextResponse.json({
        authenticated: true,
        user: { email: data.email, role: data.role },
      });
    }
  } catch {
    // Malformed token
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);

  return NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });
}

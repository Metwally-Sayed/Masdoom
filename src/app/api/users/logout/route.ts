import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json(
      {
        message: "Logout was successful",
      },
      { status: 200 }
    );

    res.cookies.set("token", "", { httpOnly: true });
    return NextResponse;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

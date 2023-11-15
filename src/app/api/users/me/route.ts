import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const cookiesStore = cookies();
    const currentToken = cookiesStore.get("token")?.value as string;

    console.log(cookiesStore.get("token")?.value);

    const validToken = jwt.verify(currentToken, process.env.TOKEN_SECRET!);

    if (!validToken) {
      cookiesStore.delete("token");
      const response = NextResponse.json(
        { message: "!token not vaild" },
        { status: 401 }
      );
      return response;
    }
    const response = NextResponse.json(
      { message: "token is valid ", token: currentToken },
      { status: 201 }
    );

    response.cookies.set("token", currentToken, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

import { jwtVerify, SignJWT } from "jose";

export const getJwtSecretKey = () => {
  const secret = process.env.TOKEN_SECRET;

  if (!secret || secret.length === 0) {
    throw new Error("The environment variable TOKEN_SECRET is not set.");
  }
  return secret;
};

export const verifyAuth = async (token: string) => {
  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    );
    return verified.payload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
};

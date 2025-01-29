import argon2 from "argon2";
import jwt from "jsonwebtoken";

type User = {
  id?: number;
  email: string;
  password: string;
  is_admin?: boolean;
};

const passwordsMatch = async (
  hash: string,
  password: string,
): Promise<boolean> => {
  return await argon2.verify(hash, password);
};

const generateToken = ({ user }: { user: User }) => {
  return jwt.sign(
    { userId: user.id, email: user.email, isAdmin: user.is_admin },
    process.env.APP_SECRET as string,
    {
      expiresIn: "1h",
    },
  );
};

export { generateToken, passwordsMatch };

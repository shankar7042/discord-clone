import { redirect } from "next/navigation";
import { getAuthSession } from "./auth";
import { db } from "./db";

export const initProfile = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect("/login");
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: session.user.id,
      name: session.user.name!,
      imageUrl: session.user.image!,
      email: session.user.email!,
    },
  });

  return newProfile;
};

import { getAuthSession } from "./auth";

import { db } from "./db";

export const currentProfile = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: session.user.id,
    },
  });

  return profile;
};

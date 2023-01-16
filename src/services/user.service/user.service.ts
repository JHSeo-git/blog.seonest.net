import { db } from '@/lib/prisma';

import type * as UserTypes from './types';

export async function createUser({ ipHash, code }: UserTypes.CreateUserParams) {
  const exists = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (exists) {
    return exists;
  }

  return db.user.create({
    data: {
      ipHash,
      code,
    },
  });
}

export async function updateUser({ ipHash, code }: UserTypes.UpdateUserParams) {
  const exists = await db.user.findUnique({
    where: {
      ipHash,
    },
  });

  if (!exists) {
    return null;
  }

  return db.user.update({
    where: {
      id: exists.id,
    },
    data: {
      code,
    },
  });
}

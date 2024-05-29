export const createUser = async (db: any, email: string) => {
  await db.execute({
    sql: "INSERT INTO users (email) VALUES (?)",
    args: [email],
  });

  const userResult = await db.execute({
    sql: "SELECT customerId FROM users WHERE email = ?",
    args: [email],
  });

  if (userResult.rows.length === 0) {
    throw new Error("User not found after insertion.");
  }

  return userResult.rows[0].customerId;
};

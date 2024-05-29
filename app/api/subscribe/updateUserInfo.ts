export const updateUserInfo = async (
  db: any,
  customerId: number,
  language: string,
  name?: string,
  lastName?: string,
  age?: number
) => {
  await db.execute({
    sql: `INSERT INTO userInfo (customerId, language, name, lastName, age) 
          VALUES (?, ?, ?, ?, ?) 
          ON CONFLICT(customerId) 
          DO UPDATE SET 
          language=excluded.language, 
          name=excluded.name, 
          lastName=excluded.lastName, 
          age=excluded.age`,
    args: [
      customerId,
      language || null,
      name || null,
      lastName || null,
      age || null,
    ],
  });
};

import { client } from "./connection";

export type FetchParams = {
  limit?: number;
  page?: number;
};

export async function fetchUsers({ limit }: FetchParams) {
  try {
    await client.connect();
    const db = client.db("farmer-ai");
    const users = await db.collection("users").find({}).toArray();
    return users;
  } catch (err) {
    console.log({ err });
  } finally {
    await client.close();
  }
}

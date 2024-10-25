import { client } from "./connection";

export async function seedDatabase() {
  try {
    await client.connect();
    const db = client.db("farmer-ai");
    const usersCollection = db.collection("users");
    await usersCollection.insertMany([
      {
        name: "John Doe",
        specialty: "Organic Vegetables",
        avatar: "/api/placeholder/32/32",
      },
      {
        name: "Jane Smith",
        specialty: "Sustainable Livestock",
        avatar: "/api/placeholder/32/32",
      },
      {
        name: "Mike Johnson",
        specialty: "Fruit Orchards",
        avatar: "/api/placeholder/32/32",
      },
    ]);
    console.log("Database seeded successfully!");
  } finally {
    await client.close();
  }
}

seedDatabase();

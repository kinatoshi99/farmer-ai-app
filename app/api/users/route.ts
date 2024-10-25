// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { fetchUsers } from "@/database/user-actions";

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");

    const users = await fetchUsers({
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// You can also add other HTTP methods in the same file
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Handle POST logic here
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

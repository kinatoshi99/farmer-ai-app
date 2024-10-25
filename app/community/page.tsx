// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WithId, Document } from "mongodb";

interface User {
  name: string;
  specialty: string;
  avatar: string;
  _id?: string;
}

const FarmerCard = ({ name, specialty, avatar }: User) => (
  <Card className="mb-4">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle>{name}</CardTitle>
        <p className="text-sm text-gray-500">{specialty}</p>
      </div>
    </CardHeader>
    <CardContent>
      <Button variant="outline" className="w-full">
        View Profile
      </Button>
    </CardContent>
  </Card>
);

const FarmerCommunityPage = () => {
  const [farmers, setFarmers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndDisplayFarmers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
        }
        const data = await res.json();
        const formattedFarmers = data.map(
          (farmer: any): User => ({
            name: farmer.name,
            specialty: farmer.specialty,
            avatar: farmer.avatar,
            _id: farmer._id?.toString(),
          })
        );
        setFarmers(formattedFarmers);
      } catch (error) {
        setError("Failed to fetch farmers.");
      } finally {
        setLoading(false);
      }
    };

    fetchAndDisplayFarmers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">Farmer Community</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Our Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {farmers.map((farmer, index) => (
            <FarmerCard key={index} {...farmer} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2024 Farmer Community. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FarmerCommunityPage;

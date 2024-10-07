"use client"

import { useState } from 'react'
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { Slider } from "../../../components/ui/slider"
import { Checkbox } from "../../../components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu"
import { Search, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// Mock data for demonstration
const products = [
  { id: 1, name: "Fresh Apples", price: 2.99, category: "Fruits", image: "/images/products/apple.jpeg" },
  { id: 2, name: "Organic Carrots", price: 1.99, category: "Vegetables", image: "/images/products/carrot.jpeg" },
  { id: 3, name: "Free-range Eggs", price: 4.99, category: "Dairy", image: "/images/products/eggs.jpeg" },
  { id: 4, name: "Honey Jar", price: 7.99, category: "Other", image: "/images/products/honey.jpeg" },
  { id: 5, name: "Grass-fed Beef", price: 12.99, category: "Meat", image: "/images/products/beef.jpeg" },
  //{ id: 6, name: "Organic Milk", price: 3.99, category: "Dairy", image: "/images/milk.jpg" },
];

export default function FarmerMarketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 20])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("name")

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    )
    .sort((a, b) => {
      if (sortOption === "price") return a.price - b.price
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Farmer&apos;s Marketplace</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar with filters */}
        <aside className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <Slider
                  min={0}
                  max={20}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                {["Fruits", "Vegetables", "Dairy", "Meat", "Other"].map(category => (
                  <div key={category} className="flex items-center space-x-2 mt-1">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
        
        {/* Main content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-64">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Sort by <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => setSortOption("name")}>Name</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setSortOption("price")}>Price</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id}>
                <CardHeader>
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
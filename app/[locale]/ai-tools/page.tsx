import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Cloud, Droplets, Bug, Sprout, Tractor } from "lucide-react"

export default function FarmerAITools() {
  const tools = [
    {
      title: "CropSense AI",
      description: "AI-powered crop health monitoring and disease detection",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      category: "Crop Management",
    },
    {
      title: "WeatherWise",
      description: "Precision weather forecasting for optimal farming decisions",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      category: "Weather",
    },
    {
      title: "IrrigationIQ",
      description: "Smart irrigation system with AI-driven water management",
      icon: <Droplets className="h-8 w-8 text-cyan-500" />,
      category: "Water Management",
    },
    {
      title: "PestPatrol",
      description: "AI-based pest identification and treatment recommendations",
      icon: <Bug className="h-8 w-8 text-red-500" />,
      category: "Pest Control",
    },
    {
      title: "YieldOptimizer",
      description: "Machine learning for crop yield prediction and optimization",
      icon: <Sprout className="h-8 w-8 text-yellow-500" />,
      category: "Yield Management",
    },
    {
      title: "FarmBot",
      description: "AI-powered autonomous farming robot for precision agriculture",
      icon: <Tractor className="h-8 w-8 text-orange-500" />,
      category: "Automation",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Farmer AI Tools</h1>
      <p className="text-lg text-center mb-12 text-muted-foreground">
        Discover cutting-edge AI tools designed to revolutionize your farming practices
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                {tool.icon}
                <Badge variant="secondary">{tool.category}</Badge>
              </div>
              <CardTitle className="mt-4">{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {/* Add more details or features here if needed */}
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
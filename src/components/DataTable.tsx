
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tableData = [
  {
    id: "FARM001",
    name: "Green Valley Farm",
    location: "California",
    crops: "Corn, Wheat",
    status: "Active",
    lastUpdate: "2 hours ago",
  },
  {
    id: "FARM002",
    name: "Sunset Ranch",
    location: "Texas",
    crops: "Cotton, Soy",
    status: "Monitoring",
    lastUpdate: "5 hours ago",
  },
  {
    id: "FARM003",
    name: "Prairie Fields",
    location: "Kansas",
    crops: "Wheat, Barley",
    status: "Alert",
    lastUpdate: "1 hour ago",
  },
  {
    id: "FARM004",
    name: "Mountain View Farm",
    location: "Colorado",
    crops: "Potatoes, Carrots",
    status: "Active",
    lastUpdate: "3 hours ago",
  },
];

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Farm Status</CardTitle>
        <CardDescription>
          Current status and monitoring data for all farms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Farm ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Crops</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((farm) => (
              <TableRow key={farm.id}>
                <TableCell className="font-medium">{farm.id}</TableCell>
                <TableCell>{farm.name}</TableCell>
                <TableCell>{farm.location}</TableCell>
                <TableCell>{farm.crops}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      farm.status === "Active" ? "default" : 
                      farm.status === "Monitoring" ? "secondary" : 
                      "destructive"
                    }
                  >
                    {farm.status}
                  </Badge>
                </TableCell>
                <TableCell>{farm.lastUpdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

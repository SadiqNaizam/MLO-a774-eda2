import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { CalendarDays, ChevronDown } from 'lucide-react';

interface TrackingDataPoint {
  month: string;
  closedWon: number;
  closedLost: number;
}

const leadsTrackingData: TrackingDataPoint[] = [
  { month: 'Feb', closedWon: 65, closedLost: 50 },
  { month: 'March', closedWon: 85, closedLost: 60 },
  { month: 'April', closedWon: 60, closedLost: 38 },
  { month: 'May', closedWon: 75, closedLost: 25 },
  { month: 'June', closedWon: 95, closedLost: 68 }, 
  { month: 'July', closedWon: 62, closedLost: 5 },
  { month: 'August', closedWon: 80, closedLost: 42 }, 
  { month: 'Sept', closedWon: 105, closedLost: 20 }, 
];

const LeadsTrackingCard: React.FC = () => {
  const [timeRange, setTimeRange] = React.useState<string>('Last 6 months');
  const totalClosed = 680;
  const totalLost = 70;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Leads tracking</CardTitle>
        <div className="mt-2 flex items-baseline space-x-4">
          <div>
            <span className="text-4xl font-bold text-foreground">{totalClosed}</span>
            <span className="ml-1 text-sm text-muted-foreground">total closed</span>
          </div>
          <div>
            <span className="text-4xl font-bold text-foreground">{totalLost}</span>
            <span className="ml-1 text-sm text-muted-foreground">total lost</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Tabs defaultValue="leadsConverted" className="w-auto">
            <TabsList className="bg-muted p-1 rounded-md">
              <TabsTrigger value="leadsCame" className="px-3 py-1.5 text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Leads came</TabsTrigger>
              <TabsTrigger value="leadsConverted" className="px-3 py-1.5 text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Leads Converted</TabsTrigger>
              <TabsTrigger value="totalDealsSize" className="px-3 py-1.5 text-xs data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">Total deals size</TabsTrigger>
            </TabsList>
          </Tabs>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-xs text-muted-foreground">
                <CalendarDays className="mr-2 h-4 w-4" />
                {timeRange}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTimeRange('Last 6 months')}>Last 6 months</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange('Last 12 months')}>Last 12 months</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTimeRange('This year')}>This year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs defaultValue="leadsConverted">
          <TabsContent value="leadsCame">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Data for Leads Came not implemented.
            </div>
          </TabsContent>
          <TabsContent value="leadsConverted" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={leadsTrackingData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorClosedWon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorClosedLost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} domain={[0, 'dataMax + 20']}/>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                  itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                  cursor={{ stroke: 'hsl(var(--accent))', strokeWidth: 1, strokeDasharray: '3 3' }}
                />
                <Area type="monotone" dataKey="closedWon" stroke="#14B8A6" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedWon)" dot={{ r:4, strokeWidth:2, fill: '#14B8A6', stroke:'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth:2, fill: '#14B8A6', stroke:'hsl(var(--card))' }} />
                <Area type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorClosedLost)" dot={{ r:4, strokeWidth:2, fill: '#EF4444', stroke:'hsl(var(--card))' }} activeDot={{ r: 6, strokeWidth:2, fill: '#EF4444', stroke:'hsl(var(--card))' }} />
              </AreaChart>
            </ResponsiveContainer>
             <div className="flex justify-center space-x-6 mt-4 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
                <span className="text-muted-foreground">Closed won</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                <span className="text-muted-foreground">Closed lost</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="totalDealsSize">
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Data for Total Deals Size not implemented.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingCard;

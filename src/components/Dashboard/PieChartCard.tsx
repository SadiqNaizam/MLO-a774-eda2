import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { CalendarDays, ChevronDown, Info } from 'lucide-react';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string; // Hex color for chart
  displayColor: string; // Tailwind bg color for legend
}

const leadSourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#EF4444', displayColor: 'bg-red-500' }, // red-500
  { name: 'Behance', value: 1000, percentage: 20, color: '#F59E0B', displayColor: 'bg-yellow-500' }, // amber-500 (closer to image than yellow-400)
  { name: 'Instagram', value: 1000, percentage: 20, color: '#14B8A6', displayColor: 'bg-teal-500' }, // teal-500
  { name: 'Dribbble', value: 500, percentage: 10, color: '#22C55E', displayColor: 'bg-green-500' }, // green-500
];

const PieChartCard: React.FC = () => {
  const [timeRange, setTimeRange] = React.useState<string>('Last 6 months');

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-foreground">Sources</CardTitle>
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
            <DropdownMenuItem onClick={() => setTimeRange('Last 3 months')}>Last 3 months</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTimeRange('Last 30 days')}>Last 30 days</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[200px] mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <RechartsTooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)'}}
                itemStyle={{ color: 'hsl(var(--card-foreground))' }}
                cursor={{ fill: 'hsl(var(--accent))' }}
              />
              <Pie
                data={leadSourcesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                stroke="hsl(var(--card))" // Use card background for stroke for separation
                strokeWidth={3}
              >
                {leadSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2">
          {leadSourcesData.map((source) => (
            <div key={source.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <span className={cn('w-3 h-3 rounded-sm mr-2', source.displayColor)}></span>
                <span className="text-foreground">{source.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-muted-foreground w-16 text-right">$ {source.value.toLocaleString()}</span>
                <span className={cn("text-muted-foreground w-10 text-right", source.name === 'Dribbble' && "relative")}>
                  {source.percentage}%
                  {source.name === 'Dribbble' && (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-3 w-3 text-muted-foreground absolute -top-1 -right-2 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-gray-700 text-white text-xs p-1.5">
                          <p>from leads total</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PieChartCard;

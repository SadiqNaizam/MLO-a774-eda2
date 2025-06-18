import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  value: number;
  avgTime: string;
  color: string; // Tailwind background color class e.g., 'bg-red-500'
  progressValue: number;
}

const funnelData: FunnelStage[] = [
  { id: 'discovery', name: 'Discovery', count: 200, value: 200, avgTime: '2 days', color: 'bg-red-500', progressValue: 200/6*2 },
  { id: 'qualified', name: 'Qualified', count: 100, value: 100, avgTime: '2 days', color: 'bg-yellow-400', progressValue: 100/6*2 },
  { id: 'inConversation', name: 'In conversation', count: 50, value: 100, avgTime: 'N/A', color: 'bg-indigo-600', progressValue: 50/6*2 }, // Original image has 'average time on this stage' on '2 days' for Qualified
  { id: 'negotiations', name: 'Negotiations', count: 20, value: 50, avgTime: '8 days', color: 'bg-green-500', progressValue: 20/6*2 },
  { id: 'closedWon', name: 'Closed won', count: 20, value: 50, avgTime: '10 days', color: 'bg-purple-600', progressValue: 20/6*2 },
];

const totalActiveLeads = 600;

const FunnelCard: React.FC = () => {
  const totalProgressValue = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-5xl font-bold text-foreground">{totalActiveLeads}</span>
          <span className="ml-2 text-muted-foreground">active leads</span>
        </div>

        <div className="mb-6">
          <div className="flex h-3 rounded-full overflow-hidden">
            {funnelData.map((stage) => (
              <TooltipProvider key={stage.id} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <div
                        className={cn('h-full', stage.color)}
                        style={{ width: `${(stage.count / totalActiveLeads) * 100}%` }}
                      />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{stage.name}: {stage.count} leads</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {funnelData.map((stage) => (
            <div key={stage.id} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-x-3 text-sm">
              <div className={cn('w-3 h-3 rounded-sm mr-2', stage.color)}></div>
              <p className="text-foreground truncate">{stage.name}</p>
              <p className="text-muted-foreground justify-self-end">{stage.count}</p>
              <p className="text-muted-foreground justify-self-end">$ {stage.value}</p>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className={cn("text-muted-foreground justify-self-end", stage.name === 'Qualified' && "font-semibold text-card-foreground bg-gray-700 text-white px-1.5 py-0.5 rounded text-xs")}>
                      {stage.avgTime}
                    </p>
                  </TooltipTrigger>
                  {stage.name === 'Qualified' && (
                    <TooltipContent side="top" className="bg-gray-700 text-white text-xs p-1.5">
                      <p>average time on this stage</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCard;

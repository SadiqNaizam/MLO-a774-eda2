import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface LostReason {
  id: string;
  percentage: number;
  reason: string;
}

interface OtherStat {
  id: string;
  value: string;
  label: string;
  hasInfo?: boolean;
  infoText?: string;
}

const lostReasonsData: LostReason[] = [
  { id: 'unclearProposal', percentage: 40, reason: 'The proposal is unclear' },
  { id: 'venturePursuit', percentage: 20, reason: 'However venture pursuit' },
  { id: 'other', percentage: 10, reason: 'Other' },
  { id: 'unclearProposal2', percentage: 30, reason: 'The proposal is unclear' }, // Duplicate reason as per image for layout
];

const otherStatsData: OtherStat[] = [
  { id: 'totalLeads', value: '900', label: 'total leads count' },
  { id: 'avgConvertTime', value: '12', label: 'days in average to convert lead' },
  { id: 'inactiveLeads', value: '30', label: 'inactive leads', hasInfo: true, infoText: 'Leads with no activity in the last 30 days.' },
];

const LostReasonsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-8">
          {lostReasonsData.map((item) => (
            <div key={item.id}>
              <p className="text-3xl font-bold text-foreground">{item.percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">{item.reason}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherStatsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start">
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <div className="flex items-center mt-1">
                <p className="text-sm text-muted-foreground leading-tight">{stat.label}</p>
                {stat.hasInfo && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="ml-1.5 h-4 w-4 text-muted-foreground cursor-help flex-shrink-0" />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p>{stat.infoText}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LostReasonsGrid;

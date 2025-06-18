import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCard from '../components/Dashboard/FunnelCard';
import PieChartCard from '../components/Dashboard/PieChartCard';
import LeadsTrackingCard from '../components/Dashboard/LeadsTrackingCard';
import LostReasonsGrid from '../components/Dashboard/LostReasonsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * IndexPage component.
 * This is the main page for the Leads Management Dashboard, referred to as 'LeadsDashboardPage' in requirements.
 * It uses MainAppLayout for the overall structure (Sidebar, Header, Main Content area)
 * and arranges various dashboard widget components within a tabbed interface (Sales, Leads).
 * The 'Leads' tab displays FunnelCard, PieChartCard, LeadsTrackingCard, and LostReasonsGrid.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Sales/Leads Tabs Navigation */}
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="inline-flex h-auto items-center justify-start rounded-none bg-transparent p-0 border-b border-border mb-6">
          <TabsTrigger
            value="sales"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-none px-4 py-3 text-sm font-medium text-muted-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:text-primary data-[state=active]:border-primary border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-primary/80"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-none px-4 py-3 text-sm font-medium text-muted-foreground ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=active]:text-primary data-[state=active]:border-primary border-b-2 border-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none hover:text-primary/80"
          >
            Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales">
          <div className="flex items-center justify-center h-96 rounded-lg border border-dashed bg-card">
            <p className="text-muted-foreground text-lg">Sales dashboard content will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="space-y-6">
          {/* Row 1: FunnelCard and PieChartCard */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FunnelCard />
            </div>
            <div className="lg:col-span-3">
              <PieChartCard />
            </div>
          </div>

          {/* Row 2: LeadsTrackingCard */}
          <LeadsTrackingCard />

          {/* Row 3: LostReasonsGrid */}
          <LostReasonsGrid />
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;

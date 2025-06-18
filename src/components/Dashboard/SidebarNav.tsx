import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  UserCircle,
  FileText,
  FileSpreadsheet,
  ShoppingCart,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  CircleDollarSign, // Placeholder for generic logo icon
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
  active?: boolean;
  isSectionTitle?: boolean;
}

const initialNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, path: '#', active: true },
  { id: 'leads', label: 'Leads', icon: Users, path: '#' },
  { id: 'customers', label: 'Customers', icon: UserCircle, path: '#' },
  { id: 'section-sales', label: 'Sales', isSectionTitle: true, icon: Users /* Placeholder, not rendered */, path: '' },
  { id: 'proposals', label: 'Proposals', icon: FileText, path: '#' },
  { id: 'invoices', label: 'Invoices', icon: FileSpreadsheet, path: '#' },
  { id: 'items', label: 'Items', icon: ShoppingCart, path: '#' },
  { id: 'section-tools', label: 'Tools', isSectionTitle: true, icon: Users /* Placeholder */, path: '' }, 
  { id: 'mail', label: 'Mail', icon: Mail, path: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, path: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, path: '#' },
];

const bottomNavItems: NavItem[] = [
  { id: 'help', label: 'Help', icon: HelpCircle, path: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, path: '#' },
];

const SidebarNav: React.FC = () => {
  const [navItems, setNavItems] = React.useState<NavItem[]>(initialNavItems);

  const handleNavItemClick = (id: string) => {
    setNavItems((prevItems) =>
      prevItems.map((item) => ({ ...item, active: item.id === id && !item.isSectionTitle }))
    );
  };

  return (
    <aside className="w-64 h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed top-0 left-0 z-20 border-r border-sidebar-border">
      <div className="p-4 h-20 flex items-center border-b border-sidebar-border">
        <CircleDollarSign className="h-8 w-8 text-primary mr-2" />
        <h1 className="text-2xl font-semibold text-sidebar-foreground">bo</h1>
      </div>
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          if (item.isSectionTitle) {
            return (
              <div key={item.id} className="px-3 pt-4 pb-1">
                <span className="text-xs font-semibold uppercase text-sidebar-muted-foreground tracking-wider">
                  {item.label}
                </span>
              </div>
            );
          }
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.path}
              onClick={() => handleNavItemClick(item.id)}
              className={cn(
                'flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150',
                item.active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              )}
            >
              <IconComponent className={cn('mr-3 h-5 w-5', item.active ? 'text-sidebar-accent-foreground' : 'text-sidebar-muted-foreground')} />
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="p-2 border-t border-sidebar-border">
        {bottomNavItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.path}
              className={cn(
                'flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150',
                'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              )}
            >
              <IconComponent className="mr-3 h-5 w-5 text-sidebar-muted-foreground" />
              {item.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SidebarNav;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  CircleDollarSign, 
  FileText, 
  Database, 
  Search, 
  Users, 
  Settings,
  AlertCircle 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { name: 'Dashboard', path: '/', icon: CircleDollarSign },
  { name: 'Transações', path: '/transacoes', icon: Database },
  { name: 'Rastreamento', path: '/rastreamento', icon: Search },
  { name: 'Denúncias', path: '/denuncias', icon: AlertCircle },
  { name: 'Órgãos', path: '/orgaos', icon: Users },
  { name: 'Relatórios', path: '/relatorios', icon: FileText },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col bg-fiscal-blue text-white w-64 transform transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0 md:static"
      )}
    >
      <div className="p-5">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <CircleDollarSign className="h-6 w-6 text-fiscal-green" />
          <span className="font-bold text-xl">LivroRazão</span>
        </Link>
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center p-3 rounded-md transition-colors",
                  isActive
                    ? "bg-white/10 text-fiscal-green font-medium"
                    : "hover:bg-white/5"
                )}
              >
                <item.icon className={cn("h-5 w-5 mr-3", isActive ? "text-fiscal-green" : "text-white/70")} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-auto p-5 border-t border-white/10">
        <Link
          to="/configuracoes"
          className="flex items-center p-3 rounded-md hover:bg-white/5 transition-colors"
        >
          <Settings className="h-5 w-5 mr-3 text-white/70" />
          Configurações
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

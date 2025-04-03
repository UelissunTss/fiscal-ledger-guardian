
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, Bell, Search, Menu } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { toast } = useToast();
  
  const showNotification = () => {
    toast({
      title: "Notificações",
      description: "Você tem 3 novas notificações de transações suspeitas.",
    });
  };

  return (
    <header className="bg-fiscal-blue text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="text-white">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center space-x-2">
          <CircleDollarSign className="h-6 w-6 text-fiscal-green" />
          <span className="font-bold text-xl">LivroRazão</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex relative bg-fiscal-blue-800 rounded-md border border-white/20">
          <input
            type="text"
            placeholder="Pesquisar transações..."
            className="p-2 pl-10 bg-transparent focus:outline-none text-white w-56"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/60" />
        </div>
        <Button variant="ghost" size="icon" onClick={showNotification} className="text-white relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-fiscal-red rounded-full"></span>
        </Button>
        <Button variant="outline" className="hidden md:flex">Acessar Conta</Button>
      </div>
    </header>
  );
};

export default Navbar;

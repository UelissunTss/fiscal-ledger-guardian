
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import StatCards from '@/components/dashboard/StatCards';
import TransactionChart from '@/components/dashboard/TransactionChart';
import TransactionTable from '@/components/dashboard/TransactionTable';
import { ArrowRightCircle } from 'lucide-react';

const Index = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-fiscal-blue">Dashboard</h1>
          <p className="text-fiscal-darkGray mt-1">Monitoramento de transações em tempo real</p>
        </div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <p className="text-sm bg-fiscal-blue/5 px-3 py-1 rounded-full text-fiscal-blue">
            Última atualização: {new Date().toLocaleString('pt-BR')}
          </p>
          <Button size="sm" asChild>
            <Link to="/blockchain/Ox7a59c429953becabc76c4d9396aa37f524f155384ca9527947f3b29aa561fb9b">
              <ArrowRightCircle className="mr-1 h-4 w-4" />
              Ver Exemplo Blockchain
            </Link>
          </Button>
        </div>
      </div>
      
      <StatCards />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <TransactionChart />
      </div>
      
      <TransactionTable />
    </div>
  );
};

export default Index;


import React from 'react';
import StatCards from '@/components/dashboard/StatCards';
import TransactionChart from '@/components/dashboard/TransactionChart';
import TransactionTable from '@/components/dashboard/TransactionTable';

const Index = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-fiscal-blue">Dashboard</h1>
          <p className="text-fiscal-darkGray mt-1">Monitoramento de transações em tempo real</p>
        </div>
        <p className="text-sm mt-2 md:mt-0 bg-fiscal-blue/5 px-3 py-1 rounded-full text-fiscal-blue">
          Última atualização: {new Date().toLocaleString('pt-BR')}
        </p>
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

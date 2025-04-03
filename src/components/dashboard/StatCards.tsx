
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign, TrendingUp, AlertCircle, Database } from 'lucide-react';

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <Card className="shadow-md">
        <CardContent className="flex items-center p-6">
          <div className="bg-fiscal-blue/10 p-3 rounded-full">
            <CircleDollarSign className="h-6 w-6 text-fiscal-blue" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Total de Transações</p>
            <h3 className="text-2xl font-bold text-fiscal-blue">R$ 47,5 Bi</h3>
            <p className="text-xs text-fiscal-green flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +3.2% neste mês
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardContent className="flex items-center p-6">
          <div className="bg-fiscal-green/10 p-3 rounded-full">
            <Database className="h-6 w-6 text-fiscal-green" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Órgãos Monitorados</p>
            <h3 className="text-2xl font-bold text-fiscal-blue">1.295</h3>
            <p className="text-xs text-fiscal-green flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +12 neste mês
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardContent className="flex items-center p-6">
          <div className="bg-fiscal-yellow/10 p-3 rounded-full">
            <Database className="h-6 w-6 text-fiscal-yellow" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Transações em Análise</p>
            <h3 className="text-2xl font-bold text-fiscal-blue">237</h3>
            <p className="text-xs text-amber-600 flex items-center mt-1">
              Valor: R$ 1,2 Bi
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md">
        <CardContent className="flex items-center p-6">
          <div className="bg-fiscal-red/10 p-3 rounded-full">
            <AlertCircle className="h-6 w-6 text-fiscal-red" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-muted-foreground">Transações Suspeitas</p>
            <h3 className="text-2xl font-bold text-fiscal-blue">42</h3>
            <p className="text-xs text-fiscal-red flex items-center mt-1">
              Valor: R$ 325 Mi
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;

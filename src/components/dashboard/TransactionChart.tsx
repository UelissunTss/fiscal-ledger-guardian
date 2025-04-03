
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', entrada: 40000000, saida: 38000000 },
  { name: 'Fev', entrada: 35000000, saida: 32000000 },
  { name: 'Mar', entrada: 45000000, saida: 43000000 },
  { name: 'Abr', entrada: 42000000, saida: 40000000 },
  { name: 'Mai', entrada: 38000000, saida: 37000000 },
  { name: 'Jun', entrada: 52000000, saida: 47000000 },
];

const formatValue = (value: number) => {
  return `R$ ${(value / 1000000).toFixed(1)}M`;
};

const TransactionChart = () => {
  return (
    <Card className="col-span-3 shadow-md">
      <CardHeader>
        <CardTitle className="text-fiscal-blue text-xl">Fluxo de Transações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="name" stroke="#4A5568" />
              <YAxis tickFormatter={formatValue} stroke="#4A5568" />
              <Tooltip 
                formatter={(value: number) => [`${formatValue(value)}`, '']} 
                labelStyle={{ color: '#1A365D' }}
                contentStyle={{ backgroundColor: 'white', borderColor: '#E2E8F0' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="entrada" 
                name="Entradas" 
                stroke="#2D9D78" 
                strokeWidth={2} 
                activeDot={{ r: 8 }} 
                dot={{ r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="saida" 
                name="Saídas" 
                stroke="#1A365D" 
                strokeWidth={2} 
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionChart;

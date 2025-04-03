
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const transactions = [
  {
    id: 'TX78521',
    origem: 'Tesouro Nacional',
    destino: 'Ministério da Educação',
    valor: 5200000,
    data: '2023-04-01',
    status: 'confirmada'
  },
  {
    id: 'TX78522',
    origem: 'Ministério da Saúde',
    destino: 'Hospital Universitário de Brasília',
    valor: 3800000,
    data: '2023-04-01',
    status: 'confirmada'
  },
  {
    id: 'TX78523',
    origem: 'Ministério da Infraestrutura',
    destino: 'DNIT',
    valor: 12000000,
    data: '2023-03-31',
    status: 'em análise'
  },
  {
    id: 'TX78524',
    origem: 'Fundação de Amparo à Pesquisa',
    destino: 'Universidade Federal',
    valor: 1450000,
    data: '2023-03-30',
    status: 'confirmada'
  },
  {
    id: 'TX78525',
    origem: 'Ministério da Cidadania',
    destino: 'Conta Desconhecida',
    valor: 7800000,
    data: '2023-03-30',
    status: 'suspeita'
  }
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR');
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'confirmada':
      return (
        <Badge variant="outline" className="bg-green-50 text-fiscal-green border-fiscal-green flex items-center gap-1">
          <CheckCircle className="h-3 w-3" />
          Confirmada
        </Badge>
      );
    case 'em análise':
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-600 flex items-center gap-1">
          <Circle className="h-3 w-3" />
          Em Análise
        </Badge>
      );
    case 'suspeita':
      return (
        <Badge variant="outline" className="bg-red-50 text-fiscal-red border-fiscal-red flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          Suspeita
        </Badge>
      );
    default:
      return (
        <Badge variant="outline">
          {status}
        </Badge>
      );
  }
};

const TransactionTable = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-fiscal-blue text-xl">Últimas Transações</CardTitle>
        <Button variant="outline" size="sm">Ver todas</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead>Destino</TableHead>
              <TableHead className="text-right">Valor</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className={cn(
                tx.status === 'suspeita' && "bg-red-50"
              )}>
                <TableCell className="font-mono">{tx.id}</TableCell>
                <TableCell>{tx.origem}</TableCell>
                <TableCell>{tx.destino}</TableCell>
                <TableCell className="text-right">{formatCurrency(tx.valor)}</TableCell>
                <TableCell>{formatDate(tx.data)}</TableCell>
                <TableCell>{getStatusBadge(tx.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Detalhes</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionTable;

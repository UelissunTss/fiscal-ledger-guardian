
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Search, AlertCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const TrackingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchType, setSearchType] = useState<'transaction' | 'entity' | 'funds'>('transaction');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setShowResults(true);
    }
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fiscal-blue">Rastreamento de Recursos</h1>
        <p className="text-fiscal-darkGray mt-1">
          Acompanhe transações, fundos e entidades em tempo real no sistema
        </p>
      </div>

      <Card className="mb-8 shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">Buscar no Livro Razão</CardTitle>
          <CardDescription>
            Pesquise por ID de transação, CNPJ/CPF, nome de entidade ou número de referência
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Digite o número da transação, CNPJ/CPF, ou nome da entidade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Rastrear
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                type="button" 
                variant={searchType === 'transaction' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setSearchType('transaction')}
              >
                Transações
              </Button>
              <Button 
                type="button" 
                variant={searchType === 'entity' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setSearchType('entity')}
              >
                Entidades
              </Button>
              <Button 
                type="button" 
                variant={searchType === 'funds' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setSearchType('funds')}
              >
                Fluxo de Recursos
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {showResults && searchType === 'transaction' && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Resultados da Busca</h2>
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Transação encontrada</AlertTitle>
            <AlertDescription>
              Encontramos 1 transação correspondente à sua busca. Detalhes completos abaixo.
            </AlertDescription>
          </Alert>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Detalhes da Transação TX78525</CardTitle>
              <CardDescription>Registro completo com histórico de rastreamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Valor</p>
                    <p className="text-xl font-bold">{formatCurrency(7800000)}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="flex items-center text-fiscal-red">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      TRANSAÇÃO SUSPEITA
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Caminho da Transação</h3>
                  <div className="relative">
                    <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-fiscal-blue/20" />
                    <ol className="space-y-6 relative">
                      <li className="ml-10 relative">
                        <div className="absolute -left-10 mt-1.5 rounded-full bg-fiscal-blue p-1.5" />
                        <div className="p-3 border rounded-md">
                          <p className="font-medium">Ministério da Cidadania</p>
                          <p className="text-sm text-muted-foreground">CNPJ: 01.234.567/0001-89</p>
                          <p className="text-sm text-muted-foreground">30/03/2023 14:25</p>
                        </div>
                      </li>

                      <li className="ml-10 relative">
                        <div className="absolute -left-10 mt-1.5 rounded-full bg-fiscal-red p-1.5" />
                        <div className="p-3 border rounded-md border-fiscal-red/50 bg-fiscal-red/5">
                          <p className="font-medium">Conta Desconhecida Offshore</p>
                          <p className="text-sm text-muted-foreground">CNPJ: 11.222.333/0001-44</p>
                          <p className="text-sm text-muted-foreground">30/03/2023 14:26</p>
                          <p className="text-sm text-fiscal-red mt-2">
                            <AlertCircle className="h-4 w-4 inline mr-1" />
                            Entidade não registrada no sistema
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Documentos Associados</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono">DOC123</TableCell>
                        <TableCell>Requisição de Pagamento</TableCell>
                        <TableCell>29/03/2023</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono">DOC124</TableCell>
                        <TableCell>Aprovação Orçamentária</TableCell>
                        <TableCell>28/03/2023</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Ver histórico completo</Button>
              <Button variant="destructive">
                <AlertCircle className="mr-2 h-4 w-4" />
                Reportar problema
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      
      {!showResults && (
        <div className="flex flex-col items-center justify-center text-center py-12 border-2 border-dashed rounded-lg">
          <Search className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-1">Nenhuma busca realizada</h3>
          <p className="text-muted-foreground max-w-md">
            Digite um ID de transação, CNPJ/CPF ou nome de uma entidade para rastrear informações no sistema.
          </p>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;

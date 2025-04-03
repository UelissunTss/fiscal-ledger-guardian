
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Eye, FileText, Flag, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TransactionDetail = () => {
  const { id } = useParams();
  
  // Simulando uma transação específica
  const transaction = {
    id: id || 'TX78525',
    origem: {
      nome: 'Ministério da Cidadania',
      cnpj: '01.234.567/0001-89',
      orgaoTipo: 'Federal',
      responsavel: 'Maria Silva',
      contaBancaria: '001234-5'
    },
    destino: {
      nome: 'Conta Desconhecida Offshore',
      cnpj: '11.222.333/0001-44',
      orgaoTipo: 'Privado',
      responsavel: 'João Santos',
      contaBancaria: '9876543-2'
    },
    valor: 7800000,
    dataSubmissao: '2023-03-30T14:25:30',
    dataProcessamento: '2023-03-30T14:26:12',
    descricao: 'Transferência para programa de assistência social',
    status: 'suspeita',
    razaoSuspeita: 'Destino não registrado na base de instituições autorizadas. Volume acima do permitido sem autorização prévia.',
    historico: [
      { data: '2023-03-30T14:25:30', evento: 'Transação submetida', autor: 'Sistema' },
      { data: '2023-03-30T14:26:12', evento: 'Análise automática: Transação marcada como suspeita', autor: 'Sistema' },
      { data: '2023-03-30T15:42:18', evento: 'Encaminhada para análise manual', autor: 'Sistema' },
      { data: '2023-03-30T16:15:45', evento: 'Análise iniciada', autor: 'Carlos Rodrigues (PF)' },
      { data: '2023-03-30T16:45:22', evento: 'Solicitado documentação complementar', autor: 'Carlos Rodrigues (PF)' }
    ],
    documentos: [
      { id: 'DOC123', nome: 'Requisição de Pagamento', tipo: 'pdf', data: '2023-03-29' },
      { id: 'DOC124', nome: 'Aprovação Orçamentária', tipo: 'pdf', data: '2023-03-28' },
      { id: 'DOC125', nome: 'Contrato de Prestação', tipo: 'pdf', data: '2023-01-15' }
    ]
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2" asChild>
            <Link to="/transacoes">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-fiscal-blue flex items-center">
              Transação {transaction.id}
              {transaction.status === 'suspeita' && (
                <Badge variant="destructive" className="ml-3">SUSPEITA</Badge>
              )}
            </h1>
            <p className="text-fiscal-darkGray mt-1">
              {formatDate(transaction.dataSubmissao)} • {formatCurrency(transaction.valor)}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <FileText className="mr-1 h-4 w-4" />
            Relatório
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-1 h-4 w-4" />
            Compartilhar
          </Button>
          <Button variant="destructive" size="sm">
            <Flag className="mr-1 h-4 w-4" />
            Denunciar
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Origem */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Origem</CardTitle>
            <CardDescription>Entidade que enviou os recursos</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-lg mb-2">{transaction.origem.nome}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">CNPJ:</span>
                <span>{transaction.origem.cnpj}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo:</span>
                <span>{transaction.origem.orgaoTipo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Responsável:</span>
                <span>{transaction.origem.responsavel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Conta:</span>
                <span>{transaction.origem.contaBancaria}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Destino */}
        <Card className={transaction.status === 'suspeita' ? "shadow-md border-fiscal-red" : "shadow-md"}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Destino</CardTitle>
              {transaction.status === 'suspeita' && (
                <Badge variant="destructive">Suspeito</Badge>
              )}
            </div>
            <CardDescription>Entidade que recebeu os recursos</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-lg mb-2">{transaction.destino.nome}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">CNPJ:</span>
                <span>{transaction.destino.cnpj}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tipo:</span>
                <span>{transaction.destino.orgaoTipo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Responsável:</span>
                <span>{transaction.destino.responsavel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Conta:</span>
                <span>{transaction.destino.contaBancaria}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Informações da Transação */}
        <Card className="shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Detalhes da Transação</CardTitle>
            <CardDescription>Informações sobre a transferência</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <span className="text-muted-foreground text-sm">Valor:</span>
                <p className="text-xl font-bold">{formatCurrency(transaction.valor)}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Descrição:</span>
                <p>{transaction.descricao}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Data de Submissão:</span>
                <p>{formatDate(transaction.dataSubmissao)}</p>
              </div>
              <div>
                <span className="text-muted-foreground text-sm">Data de Processamento:</span>
                <p>{formatDate(transaction.dataProcessamento)}</p>
              </div>
              
              {transaction.status === 'suspeita' && (
                <div className="mt-4 p-3 bg-fiscal-red/10 border border-fiscal-red/20 rounded-md">
                  <p className="font-medium text-fiscal-red">Motivo da Suspeita:</p>
                  <p className="text-sm mt-1">{transaction.razaoSuspeita}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="historico" className="w-full">
        <TabsList>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
          <TabsTrigger value="analise">Análise</TabsTrigger>
        </TabsList>
        
        <TabsContent value="historico">
          <Card>
            <CardHeader>
              <CardTitle>Histórico da Transação</CardTitle>
              <CardDescription>Eventos relacionados a esta transação</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Evento</TableHead>
                    <TableHead>Responsável</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transaction.historico.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{formatDate(item.data)}</TableCell>
                      <TableCell>{item.evento}</TableCell>
                      <TableCell>{item.autor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documentos">
          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
              <CardDescription>Documentação associada a esta transação</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transaction.documentos.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-mono">{doc.id}</TableCell>
                      <TableCell>{doc.nome}</TableCell>
                      <TableCell className="uppercase">{doc.tipo}</TableCell>
                      <TableCell>{doc.data}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Visualizar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analise">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Risco</CardTitle>
              <CardDescription>Verificação detalhada da transação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold mb-2">Análise Automática</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-fiscal-red/10 p-1 rounded mr-2 mt-0.5">
                        <AlertCircle className="h-4 w-4 text-fiscal-red" />
                      </div>
                      <span>Destino não está na lista de entidades aprovadas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-fiscal-red/10 p-1 rounded mr-2 mt-0.5">
                        <AlertCircle className="h-4 w-4 text-fiscal-red" />
                      </div>
                      <span>Valor superior a R$ 5 milhões sem pré-aprovação</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-fiscal-red/10 p-1 rounded mr-2 mt-0.5">
                        <AlertCircle className="h-4 w-4 text-fiscal-red" />
                      </div>
                      <span>Possível tentativa de desvio para conta offshore</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 border rounded-md">
                  <h3 className="font-semibold mb-2">Análise Manual (em andamento)</h3>
                  <p className="text-sm mb-4">Um analista da Polícia Federal está revisando esta transação.</p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline">Ver relatório preliminar</Button>
                    <p className="text-sm text-muted-foreground">Iniciado em: 30/03/2023 16:15</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TransactionDetail;

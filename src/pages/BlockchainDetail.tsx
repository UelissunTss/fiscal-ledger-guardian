
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  ArrowRightLeft, 
  AlertCircle, 
  Clock, 
  Check, 
  Copy, 
  ExternalLink, 
  FileText, 
  ReceiptText 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const BlockchainDetail = () => {
  const { id } = useParams();
  
  // Dados simulados de transação blockchain
  const transaction = {
    hash: id || 'Ox7a59c429953becabc76c4d9396aa37f524f155384ca9527947f3b29aa561fb9b',
    status: 'confirmada', // confirmada, pendente, falha
    timestamp: '2023-04-03T14:32:17',
    block: 18735240,
    from: {
      address: '0x3e104979a6b3993b87b300263a75f322c7d29080',
      label: 'Ministério da Educação',
      tipo: 'Federal'
    },
    to: {
      address: '0x63825886c67b9e96925af43cc58c24ed19a8a058',
      label: 'Universidade Federal de São Paulo',
      tipo: 'Educação'
    },
    value: 12450000,
    fee: 0.00352,
    confirmations: 30621,
    descricao: 'Pagamento de verba para pesquisa em desenvolvimento tecnológico',
    metodo: 'transferência direta',
    gasLimit: 21000,
    gasUsed: 21000,
    nonce: 184,
    validadores: [
      'Banco Central do Brasil',
      'Secretaria do Tesouro Nacional',
      'Banco do Brasil'
    ],
    documentos: [
      { id: 'DOC003728', nome: 'Contrato de Repasse', tipo: 'pdf', data: '2023-04-01' },
      { id: 'DOC003729', nome: 'Plano de Trabalho', tipo: 'pdf', data: '2023-03-15' }
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

  const formatAddress = (address: string) => {
    return `${address.substring(0, 8)}...${address.substring(address.length - 8)}`;
  };
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Você pode adicionar um toast de confirmação aqui
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Dashboard
          </Link>
        </Button>
        
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-fiscal-blue flex items-center gap-3">
              <ArrowRightLeft className="h-6 w-6" />
              Detalhes da Transação
            </h1>
            <p className="text-fiscal-darkGray mt-1">
              Hash: {formatAddress(transaction.hash)}
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5 ml-1" 
                onClick={() => copyToClipboard(transaction.hash)}
              >
                <Copy className="h-3 w-3" />
              </Button>
            </p>
          </div>
          
          <div className="flex items-center">
            {transaction.status === 'confirmada' && (
              <Badge className="bg-emerald-500">
                <Check className="mr-1 h-4 w-4" /> Confirmada
              </Badge>
            )}
            {transaction.status === 'pendente' && (
              <Badge variant="outline" className="text-amber-500 border-amber-500">
                <Clock className="mr-1 h-4 w-4" /> Pendente
              </Badge>
            )}
            {transaction.status === 'falha' && (
              <Badge variant="destructive">
                <AlertCircle className="mr-1 h-4 w-4" /> Falha
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Visão Geral */}
      <Card className="mb-6 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle>Visão Geral</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Data e Hora</p>
              <p className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" /> 
                {formatDate(transaction.timestamp)}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Bloco</p>
              <p className="font-mono">{transaction.block}</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">De</p>
            <div className="p-3 rounded-md bg-muted flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm break-all">
                  {transaction.from.address}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-5 w-5 ml-1" 
                    onClick={() => copyToClipboard(transaction.from.address)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Badge variant="outline" className="mr-2">{transaction.from.label}</Badge>
                <Badge variant="outline" className="bg-blue-50">{transaction.from.tipo}</Badge>
              </div>
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Para</p>
            <div className="p-3 rounded-md bg-muted flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-mono text-sm break-all">
                  {transaction.to.address}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-5 w-5 ml-1" 
                    onClick={() => copyToClipboard(transaction.to.address)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="mt-1">
                <Badge variant="outline" className="mr-2">{transaction.to.label}</Badge>
                <Badge variant="outline" className="bg-blue-50">{transaction.to.tipo}</Badge>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Valor</p>
              <p className="text-xl font-bold">{formatCurrency(transaction.value)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Taxa</p>
              <p>{formatCurrency(transaction.fee)}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Confirmações</p>
              <p>{transaction.confirmations}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Detalhes Extras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-sm h-full">
          <CardHeader className="pb-3">
            <CardTitle>Informações Adicionais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Descrição</p>
              <p>{transaction.descricao}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Método</p>
              <p>{transaction.metodo}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Gas Limit</p>
                <p>{transaction.gasLimit}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Gas Usado</p>
                <p>{transaction.gasUsed}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Nonce</p>
              <p>{transaction.nonce}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm h-full">
          <CardHeader className="pb-3">
            <CardTitle>Validadores</CardTitle>
            <CardDescription>Instituições que validaram esta transação</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {transaction.validadores.map((validador, index) => (
                <li key={index} className="flex items-center gap-2 p-2 rounded-md bg-blue-50">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{validador}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Documentos */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle>Documentos Anexados</CardTitle>
          <CardDescription>Documentação associada a esta transação</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transaction.documentos.map((doc) => (
              <div 
                key={doc.id}
                className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-md",
                    doc.tipo === 'pdf' ? "bg-red-100" : "bg-blue-100"
                  )}>
                    <FileText className={cn(
                      "h-5 w-5",
                      doc.tipo === 'pdf' ? "text-red-600" : "text-blue-600"
                    )} />
                  </div>
                  <div>
                    <p className="font-medium">{doc.nome}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <span className="uppercase">{doc.tipo}</span>
                      <span>•</span>
                      <span>{doc.data}</span>
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Visualizar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" className="w-full">
            <ReceiptText className="mr-2 h-4 w-4" />
            Baixar Comprovante
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlockchainDetail;

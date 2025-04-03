
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileText, Shield, Upload, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ComplaintPage = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmitComplaint = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulando o envio
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStep(2);
      toast({
        title: "Denúncia registrada",
        description: "Sua denúncia foi registrada com sucesso e será analisada pela equipe responsável.",
      });
    }, 1500);
  };
  
  const resetForm = () => {
    setFormStep(1);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-fiscal-blue">Denúncias</h1>
        <p className="text-fiscal-darkGray mt-1">
          Canal oficial para denúncias sobre uso indevido de recursos públicos
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {formStep === 1 && (
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Registrar Nova Denúncia</CardTitle>
                <CardDescription>
                  Forneça informações sobre transações suspeitas ou uso indevido de recursos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitComplaint} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="complaint-type" className="block text-sm font-medium mb-1">
                        Tipo de Denúncia
                      </label>
                      <Select defaultValue="suspicious-transaction">
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo de denúncia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="suspicious-transaction">Transação Suspeita</SelectItem>
                          <SelectItem value="misuse-of-funds">Uso Indevido de Recursos</SelectItem>
                          <SelectItem value="fraud">Fraude em Licitação</SelectItem>
                          <SelectItem value="conflict-of-interest">Conflito de Interesses</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="transaction-id" className="block text-sm font-medium mb-1">
                          ID da Transação (se aplicável)
                        </label>
                        <Input id="transaction-id" placeholder="Ex: TX78525" />
                      </div>
                      <div>
                        <label htmlFor="entity-name" className="block text-sm font-medium mb-1">
                          Entidade Envolvida
                        </label>
                        <Input id="entity-name" placeholder="Nome da entidade" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="complaint-description" className="block text-sm font-medium mb-1">
                        Descrição Detalhada
                      </label>
                      <Textarea
                        id="complaint-description"
                        rows={5}
                        placeholder="Descreva detalhadamente a suspeita ou irregularidade..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Evidências (opcional)
                      </label>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Arraste arquivos aqui ou clique para fazer upload
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Suportamos PDF, imagens e documentos (máx. 10MB)
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Selecionar Arquivos
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="reporter-contact" className="block text-sm font-medium mb-1">
                        Contato (opcional)
                      </label>
                      <Input id="reporter-contact" placeholder="Email ou telefone para contato" />
                      <p className="text-xs mt-1 text-muted-foreground">
                        Sua identidade será preservada e os dados de contato são criptografados
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar Denúncia"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
          
          {formStep === 2 && (
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-fiscal-green">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Denúncia Registrada com Sucesso
                </CardTitle>
                <CardDescription>
                  Sua denúncia foi encaminhada para análise pelos órgãos competentes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-fiscal-green/10 border border-fiscal-green/20 rounded-md p-4">
                  <h3 className="font-medium mb-2">Próximos Passos</h3>
                  <ol className="list-decimal ml-5 space-y-2 text-sm">
                    <li>Sua denúncia será analisada preliminarmente pela equipe técnica</li>
                    <li>Caso seja verificada procedência, será encaminhada aos órgãos competentes</li>
                    <li>Você poderá acompanhar o status através do código de protocolo</li>
                  </ol>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Informações da Denúncia</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="font-medium">Protocolo:</div>
                    <div>DENU-2023-783245</div>
                    <div className="font-medium">Data de Registro:</div>
                    <div>{new Date().toLocaleDateString('pt-BR')}</div>
                    <div className="font-medium">Status:</div>
                    <div>Registrada - Aguardando análise</div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={resetForm}>
                    Registrar Nova Denúncia
                  </Button>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Imprimir Comprovante
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div>
          <Card className="shadow-md mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Informações Importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="bg-fiscal-blue/10 p-2 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-fiscal-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">Sigilo Garantido</h3>
                  <p className="text-xs text-muted-foreground">
                    Sua identidade é protegida por lei e mantida em sigilo absoluto.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fiscal-blue/10 p-2 rounded-full mr-3">
                  <FileText className="h-5 w-5 text-fiscal-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">Documentação</h3>
                  <p className="text-xs text-muted-foreground">
                    Forneça o máximo de evidências e detalhes possíveis para auxiliar na investigação.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-fiscal-blue/10 p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5 text-fiscal-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1">Responsabilidade</h3>
                  <p className="text-xs text-muted-foreground">
                    Denúncias falsas ou infundadas podem resultar em responsabilização legal.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Canais Alternativos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h3 className="font-medium text-sm">Telefone</h3>
                <p className="text-sm text-muted-foreground">0800-XXX-XXXX</p>
              </div>
              <div>
                <h3 className="font-medium text-sm">Email</h3>
                <p className="text-sm text-muted-foreground">denuncias@livrorazao.gov.br</p>
              </div>
              <div>
                <h3 className="font-medium text-sm">Presencial</h3>
                <p className="text-sm text-muted-foreground">
                  Controladoria-Geral da União<br />
                  SAS, Quadra 01, Bloco A<br />
                  Brasília/DF - CEP: 70070-900
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;

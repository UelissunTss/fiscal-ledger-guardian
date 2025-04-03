
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-fiscal-lightGray">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="bg-fiscal-blue/10 p-6 rounded-full">
            <Database className="h-16 w-16 text-fiscal-blue" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-fiscal-blue mb-4">404</h1>
        <p className="text-xl text-fiscal-darkGray mb-6">
          Esta página não foi encontrada no Livro Razão
        </p>
        <p className="text-fiscal-darkGray mb-8">
          A página que você está procurando não existe ou foi removida. 
          Volte para o dashboard para continuar navegando.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

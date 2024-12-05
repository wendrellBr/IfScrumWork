"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="py-16 bg-zinc-600 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
          Fique atualizado com o <p className="text-emerald-600">IFPR - Insights.</p>
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
          Cadastre-se em nosso boletim informativo e receba dicas, guias e práticas recomendadas semanais
          diretamente na sua caixa de entrada.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-primary"
            />
            <Button
              type="submit"
              variant="secondary"
              className="whitespace-nowrap"
            >
              Inscreva-se
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
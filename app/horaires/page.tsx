"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Target, Users, Trophy } from "lucide-react";

export default function HorairesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1515474594679-6a12d48b0468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Horaires</h1>
          <p className="text-xl md:text-2xl">Des créneaux adaptés à tous les niveaux</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Saison 2023-2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-8">
                  Les horaires peuvent être modifiés pendant les vacances scolaires et les jours fériés.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Débutants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mercredi</h4>
                    <p className="text-muted-foreground">14h00 - 16h00</p>
                    <p className="text-sm text-muted-foreground">Cours encadrés</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Samedi</h4>
                    <p className="text-muted-foreground">10h00 - 12h00</p>
                    <p className="text-sm text-muted-foreground">Cours encadrés</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Confirmés
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mardi</h4>
                    <p className="text-muted-foreground">18h00 - 20h00</p>
                    <p className="text-sm text-muted-foreground">Entraînement libre</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Jeudi</h4>
                    <p className="text-muted-foreground">18h00 - 20h00</p>
                    <p className="text-sm text-muted-foreground">Entraînement encadré</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Samedi</h4>
                    <p className="text-muted-foreground">14h00 - 17h00</p>
                    <p className="text-sm text-muted-foreground">Entraînement libre</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Compétition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Lundi</h4>
                    <p className="text-muted-foreground">18h00 - 21h00</p>
                    <p className="text-sm text-muted-foreground">Entraînement spécifique</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vendredi</h4>
                    <p className="text-muted-foreground">18h00 - 21h00</p>
                    <p className="text-sm text-muted-foreground">Entraînement spécifique</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Informations Pratiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Périodes d'Inscription</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Réinscriptions : Juin - Juillet</li>
                  <li>• Nouvelles inscriptions : Septembre</li>
                  <li>• Forum des associations : Premier samedi de septembre</li>
                  <li>• Séances d'essai sur rendez-vous</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Équipement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Prêt de matériel pour les débutants</li>
                  <li>• Location possible pour les confirmés</li>
                  <li>• Conseil personnalisé pour l'achat</li>
                  <li>• Boutique partenaire avec réduction</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
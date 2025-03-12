"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Trophy, Medal } from "lucide-react";

export default function ClubPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565006447954-425bc074455c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Notre Club</h1>
          <p className="text-xl md:text-2xl">Une passion commune pour le tir à l'arc</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-lg text-muted-foreground">
              Fondé en 1985, Les Archers de la Cible d'Or est devenu l'un des clubs de tir à l'arc les plus respectés de la région. 
              Notre engagement envers l'excellence et notre passion pour ce sport nous ont permis de former des générations d'archers 
              talentueux et dévoués.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">150+ Membres</h3>
                  <p className="text-muted-foreground">Une communauté active et passionnée</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">4 Instructeurs</h3>
                  <p className="text-muted-foreground">Diplômés et expérimentés</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">30+ Titres</h3>
                  <p className="text-muted-foreground">Régionaux et nationaux</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Medal className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">35+ Années</h3>
                  <p className="text-muted-foreground">D'expérience et d'excellence</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Installations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pas de Tir Intérieur</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 10 couloirs de tir à 18m</li>
                  <li>• Éclairage LED professionnel</li>
                  <li>• Chauffage en hiver</li>
                  <li>• Ciblerie moderne</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Terrain Extérieur</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Distances de 30m à 70m</li>
                  <li>• 15 couloirs de tir</li>
                  <li>• Abri pour les archers</li>
                  <li>• Espace détente ombragé</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
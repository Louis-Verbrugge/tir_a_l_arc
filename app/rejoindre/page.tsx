"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Target, Download, ClipboardList } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    postalCode: "",
    city: "",
    level: "",
    message: "",
    acceptTerms: false,
    acceptNewsletter: false,
    acceptImage: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1593766821405-f8485354f8e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Rejoignez-nous</h1>
          <p className="text-xl md:text-2xl">Devenez membre des Archers de la Cible d'Or</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Tarifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Licence Découverte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">120€</span>
                  <span className="text-muted-foreground">/an</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Accès aux cours débutants
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Prêt de matériel inclus
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Licence FFTA
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#inscription">Choisir cette formule</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Licence Classique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">180€</span>
                  <span className="text-muted-foreground">/an</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Accès illimité au club
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Cours collectifs
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Licence FFTA
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Participation aux compétitions
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="#inscription">Choisir cette formule</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Licence Compétition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">220€</span>
                  <span className="text-muted-foreground">/an</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Tous les avantages classiques
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Entraînement personnalisé
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Accès prioritaire
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Support technique
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <a href="#inscription">Choisir cette formule</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Quel âge minimum faut-il avoir pour commencer ?</AccordionTrigger>
                <AccordionContent>
                  Le tir à l'arc peut être pratiqué à partir de 10 ans. Pour les plus jeunes, nous proposons des séances d'initiation adaptées.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Faut-il acheter son matériel dès le début ?</AccordionTrigger>
                <AccordionContent>
                  Non, le club met à disposition tout le matériel nécessaire pour les débutants pendant la première année.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Quand puis-je commencer ?</AccordionTrigger>
                <AccordionContent>
                  Les inscriptions sont ouvertes en septembre lors du forum des associations. Des sessions d'initiation sont proposées tout au long de l'année.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Le certificat médical est-il obligatoire ?</AccordionTrigger>
                <AccordionContent>
                  Oui, un certificat médical de non contre-indication à la pratique du tir à l'arc est obligatoire pour l'inscription.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="inscription" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Formulaire d'inscription
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input 
                        id="firstName" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input 
                        id="lastName" 
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Date de naissance *</Label>
                    <Input 
                      id="birthDate" 
                      type="date"
                      required
                      value={formData.birthDate}
                      onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse *</Label>
                    <Input 
                      id="address"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal *</Label>
                      <Input 
                        id="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville *</Label>
                      <Input 
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Niveau en tir à l'arc</Label>
                    <Select 
                      value={formData.level}
                      onValueChange={(value) => setFormData({...formData, level: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre niveau" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                        <SelectItem value="confirme">Confirmé</SelectItem>
                        <SelectItem value="competition">Compétition</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (facultatif)</Label>
                    <Textarea
                      id="message"
                      placeholder="Questions ou informations complémentaires"
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        required
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, acceptTerms: checked as boolean})
                        }
                      />
                      <Label htmlFor="terms" className="text-sm">
                        J'accepte les conditions générales d'adhésion et le règlement intérieur du club *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="newsletter"
                        checked={formData.acceptNewsletter}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, acceptNewsletter: checked as boolean})
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        J'accepte de recevoir la newsletter du club
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="image"
                        checked={formData.acceptImage}
                        onCheckedChange={(checked) => 
                          setFormData({...formData, acceptImage: checked as boolean})
                        }
                      />
                      <Label htmlFor="image" className="text-sm">
                        J'autorise le club à utiliser mon image dans le cadre de ses activités
                      </Label>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    * Champs obligatoires
                  </p>

                  <Button type="submit" className="w-full">
                    Envoyer ma demande d'inscription
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Documents Section */}
            <div className="space-y-8">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Documents à Télécharger
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Règlement intérieur
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Conditions générales d'adhésion
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Certificat médical (modèle)
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Tarifs {new Date().getFullYear()}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Documents à Fournir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      Certificat médical de non contre-indication
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      Photo d'identité
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      Justificatif de domicile
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      Règlement de la cotisation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
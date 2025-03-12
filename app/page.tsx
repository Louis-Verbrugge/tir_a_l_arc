"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowBigRight, Target, Trophy, Users, Clock, ArrowRight, Award, Shield, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeInWhenVisible, SlideInWhenVisible, fadeIn, staggerContainer } from "@/components/animations";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541744573214-7a299daf12e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Les Archers de la Cible d'Or
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Découvrez l'art du tir à l'arc dans un cadre exceptionnel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/rejoindre" className="group">
                Rejoignez-nous 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Notre club offre une expérience unique combinant tradition et modernité, 
                encadrement professionnel et ambiance conviviale.
              </p>
            </FadeInWhenVisible>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SlideInWhenVisible>
              <Card className="bg-card transform transition-all hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-muted-foreground">
                      Des instructeurs diplômés et passionnés pour vous accompagner
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideInWhenVisible>

            <SlideInWhenVisible>
              <Card className="bg-card transform transition-all hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
                    <p className="text-muted-foreground">
                      Un environnement sécurisé et des équipements de qualité
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideInWhenVisible>

            <SlideInWhenVisible>
              <Card className="bg-card transform transition-all hover:scale-105">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-4">
                      <Heart className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Convivialité</h3>
                    <p className="text-muted-foreground">
                      Une ambiance chaleureuse et un esprit de partage
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideInWhenVisible>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <FadeInWhenVisible>
              <div>
              <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  35+
                </motion.div>
                <div className="text-primary-foreground/80">Années d'expérience</div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div>
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  150+
                </motion.div>
                <div className="text-primary-foreground/80">Membres actifs</div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div>
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  30+
                </motion.div>
                <div className="text-primary-foreground/80">Titres remportés</div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div>
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  4
                </motion.div>
                <div className="text-primary-foreground/80">Instructeurs diplômés</div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-16">Actualités</h2>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInWhenVisible>
              <Card className="transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle>Championnat Régional 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Notre club accueillera le championnat régional les 15 et 16 juin 2024. 
                    Les inscriptions sont ouvertes !
                  </p>
                </CardContent>
              </Card>
            </SlideInWhenVisible>

            <SlideInWhenVisible>
              <Card className="transform transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle>Nouveaux créneaux débutants</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    À partir de septembre, de nouveaux créneaux seront ouverts pour les débutants 
                    le mercredi après-midi.
                  </p>
                </CardContent>
              </Card>
            </SlideInWhenVisible>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-4xl font-bold mb-8">Prêt à commencer l'aventure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Que vous soyez débutant ou archer confirmé, notre club vous accueille dans une 
            ambiance conviviale et professionnelle.
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/rejoindre">
              Rejoignez-nous
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <motion.div 
          className="absolute inset-0 opacity-50"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}
        />
      </section>
    </main>
  );
}
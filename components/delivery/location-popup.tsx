"use client"

import React from "react"

import { useState } from "react"
import { MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Lista de estados brasileiros
const ESTADOS_BRASIL = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapa" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceara" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espirito Santo" },
  { sigla: "GO", nome: "Goias" },
  { sigla: "MA", nome: "Maranhao" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Para" },
  { sigla: "PB", nome: "Paraiba" },
  { sigla: "PR", nome: "Parana" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piaui" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondonia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "Sao Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
]

// Cidades principais por estado (pode ser expandido)
const CIDADES_POR_ESTADO: Record<string, string[]> = {
  AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauaca", "Feijo"],
  AL: ["Maceio", "Arapiraca", "Rio Largo", "Palmeira dos Indios", "Penedo"],
  AP: ["Macapa", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagao"],
  AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"],
  BA: ["Salvador", "Feira de Santana", "Vitoria da Conquista", "Camacari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilheus", "Jequie", "Teixeira de Freitas"],
  CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanau", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixada"],
  DF: ["Brasilia", "Ceilandia", "Taguatinga", "Samambaia", "Planaltina", "Aguas Claras", "Gama", "Guara", "Santa Maria", "Sobradinho"],
  ES: ["Vitoria", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim", "Linhares", "Colatina", "Guarapari", "Aracruz", "Sao Mateus"],
  GO: ["Goiania", "Aparecida de Goiania", "Anapolis", "Rio Verde", "Luziania", "Aguas Lindas de Goias", "Valparaiso de Goias", "Trindade", "Formosa", "Novo Gama"],
  MA: ["Sao Luis", "Imperatriz", "Sao Jose de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailandia", "Bacabal", "Balsas"],
  MT: ["Cuiaba", "Varzea Grande", "Rondonopolis", "Sinop", "Tangara da Serra", "Caceres", "Sorriso", "Lucas do Rio Verde", "Primavera do Leste", "Barra do Garcas"],
  MS: ["Campo Grande", "Dourados", "Tres Lagoas", "Corumba", "Ponta Pora", "Naviraí", "Nova Andradina", "Aquidauana", "Sidrolandia", "Paranaiba"],
  MG: ["Belo Horizonte", "Uberlandia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirao das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinopolis", "Santa Luzia", "Pocos de Caldas", "Patos de Minas"],
  PA: ["Belem", "Ananindeua", "Santarem", "Maraba", "Parauapebas", "Castanhal", "Abaetetuba", "Cameta", "Braganca", "Altamira"],
  PB: ["Joao Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cajazeiras", "Cabedelo", "Guarabira", "Sape"],
  PR: ["Curitiba", "Londrina", "Maringa", "Ponta Grossa", "Cascavel", "Sao Jose dos Pinhais", "Foz do Iguacu", "Colombo", "Guarapuava", "Paranagua", "Araucaria", "Toledo", "Apucarana", "Pinhais", "Campo Largo"],
  PE: ["Recife", "Jaboatao dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitoria de Santo Antao"],
  PI: ["Teresina", "Parnaiba", "Picos", "Piripiri", "Floriano", "Campo Maior", "Barras", "Corrente", "Bom Jesus", "Oeiras"],
  RJ: ["Rio de Janeiro", "Sao Goncalo", "Duque de Caxias", "Nova Iguacu", "Niteroi", "Belford Roxo", "Campos dos Goytacazes", "Sao Joao de Meriti", "Petropolis", "Volta Redonda", "Magé", "Itaborai", "Macae", "Mesquita", "Cabo Frio"],
  RN: ["Natal", "Mossoro", "Parnamirim", "Sao Goncalo do Amarante", "Macaiba", "Ceara-Mirim", "Caico", "Acu", "Currais Novos", "Sao Jose de Mipibu"],
  RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravatai", "Viamao", "Novo Hamburgo", "Sao Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul"],
  RO: ["Porto Velho", "Ji-Parana", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Jaru", "Guajara-Mirim", "Ouro Preto do Oeste", "Pimenta Bueno"],
  RR: ["Boa Vista", "Rorainopolis", "Caracarai", "Alto Alegre", "Mucajai", "Canta", "Bonfim", "Pacaraima", "Amajari", "Iracema"],
  SC: ["Florianopolis", "Joinville", "Blumenau", "Sao Jose", "Chapeco", "Criciuma", "Itajai", "Jaragua do Sul", "Lages", "Palhoca", "Balneario Camboriu", "Brusque", "Tubarao", "Sao Bento do Sul", "Cacador"],
  SP: ["Sao Paulo", "Guarulhos", "Campinas", "Sao Bernardo do Campo", "Santo Andre", "Osasco", "Ribeirao Preto", "Sorocaba", "Maua", "Sao Jose dos Campos", "Santos", "Mogi das Cruzes", "Diadema", "Jundiai", "Piracicaba", "Carapicuiba", "Bauru", "Itaquaquecetuba", "Sao Vicente", "Franca"],
  SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "Sao Cristovao", "Estancia", "Tobias Barreto", "Itabaianinha", "Simao Dias", "Capela"],
  TO: ["Palmas", "Araguaina", "Gurupi", "Porto Nacional", "Paraiso do Tocantins", "Colinas do Tocantins", "Guarai", "Tocantinopolis", "Dianopolis", "Miracema do Tocantins"],
}

interface LocationPopupProps {
  onClose: () => void
  onLocationSet: (address: string) => void
}

export function LocationPopup({ onClose, onLocationSet }: LocationPopupProps) {
  const [step, setStep] = useState<"state" | "city">("state")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value)
    setSelectedCity("")
  }

  const handleCitySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value)
  }

  const handleNextToCity = () => {
    if (selectedState) {
      setStep("city")
    }
  }

  const handleConfirm = () => {
    if (selectedCity && selectedState) {
      const estadoNome = ESTADOS_BRASIL.find(e => e.sigla === selectedState)?.nome || selectedState
      onLocationSet(`${selectedCity}, ${estadoNome}`)
    }
  }

  const cidadesDoEstado = selectedState ? CIDADES_POR_ESTADO[selectedState] || [] : []

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 animate-in fade-in duration-300" />
      
      <div className="relative bg-card rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-primary p-6 text-primary-foreground text-center">
          <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold">Onde voce esta?</h2>
          <p className="text-sm text-primary-foreground/80 mt-1">
            {step === "state" ? "Escolha seu estado" : "Escolha sua cidade"}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Selecao de Estado */}
          {step === "state" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Estado</label>
                <div className="relative">
                  <select
                    value={selectedState}
                    onChange={handleStateSelect}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground
                      focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                      transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione o estado</option>
                    {ESTADOS_BRASIL.map((estado) => (
                      <option key={estado.sigla} value={estado.sigla}>
                        {estado.nome}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <Button
                onClick={handleNextToCity}
                disabled={!selectedState}
                className="w-full py-6 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base font-semibold
                  hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proximo
              </Button>
              
              <button
                onClick={onClose}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pular por enquanto
              </button>
            </div>
          )}

          {/* Selecao de Cidade */}
          {step === "city" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-secondary/50 rounded-xl p-3 mb-2">
                <p className="text-sm text-muted-foreground">Estado selecionado:</p>
                <p className="font-medium text-foreground">
                  {ESTADOS_BRASIL.find(e => e.sigla === selectedState)?.nome}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Cidade</label>
                <div className="relative">
                  <select
                    value={selectedCity}
                    onChange={handleCitySelect}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 text-foreground
                      focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                      transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione a cidade</option>
                    {cidadesDoEstado.map((cidade) => (
                      <option key={cidade} value={cidade}>
                        {cidade}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("state")}
                  variant="outline"
                  className="flex-shrink-0 bg-transparent"
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleConfirm}
                  disabled={!selectedCity}
                  className="flex-1 py-6 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base font-semibold
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirmar
                </Button>
              </div>
              
              <button
                onClick={onClose}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pular por enquanto
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

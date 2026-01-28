"use client"

import { Star, Clock, Truck, CreditCard, MapPin, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

interface StoreHeaderProps {
  userAddress?: string | null
  onChangeAddress?: () => void
}

export function StoreHeader({ userAddress, onChangeAddress }: StoreHeaderProps) {
  const [timeLeft, setTimeLeft] = useState({ minutes: 30, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return { minutes: 30, seconds: 0 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Extrai cidade do endereco
  const getCityFromAddress = (address: string) => {
    const parts = address.split(",")
    if (parts.length >= 2) {
      // Tenta pegar a penultima ou ultima parte que geralmente é a cidade
      const city = parts[parts.length - 2]?.trim() || parts[parts.length - 1]?.trim()
      return city
    }
    return address
  }

  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-lg mx-auto px-4 py-4">
        {/* Logo centralizada e maior */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="w-24 h-24 flex items-center justify-center overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Arco Bebidas"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          
          {/* Info abaixo da logo: avaliacao, tempo e frete */}
          <div className="flex items-center justify-center gap-3 mt-2 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">4.8</span>
              <span className="text-xs">(1360+ avaliacoes)</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>20-35 min</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Frete Gratis acima de R$50</span>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2 font-semibold text-center">O combo gelado e rapido pro teu bloco!</p>
        </div>

        {/* Banner de localizacao */}
        {userAddress && (
          <button
            onClick={onChangeAddress}
            className="w-full mt-4 bg-primary/10 border border-primary/20 rounded-xl py-3 px-4
              hover:bg-primary/15 active:scale-[0.99] transition-all duration-200"
          >
            <span className="text-primary font-semibold text-sm">
              Entrega Grátis para {getCityFromAddress(userAddress)}!
            </span>
          </button>
        )}

        {/* Timer de Promoção */}
        <div className="mt-3 bg-accent text-accent-foreground rounded-xl px-4 py-3 flex items-center justify-center gap-3 
          animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both
          hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
          <span className="font-medium text-sm animate-pulse">Promoção acaba em:</span>
          <div className="flex items-center gap-1 font-mono font-bold text-lg">
            <span className="bg-card text-foreground px-2 py-1 rounded shadow-sm">00</span>
            <span className="animate-pulse">:</span>
            <span className="bg-card text-foreground px-2 py-1 rounded shadow-sm transition-all duration-300">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="animate-pulse">:</span>
            <span className={`bg-card text-foreground px-2 py-1 rounded shadow-sm transition-all duration-150 ${timeLeft.seconds <= 10 ? "text-accent scale-110" : ""}`}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Info discreta */}
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground
          animate-in fade-in duration-500 delay-300 fill-mode-both">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Entrega em até 30 min</span>
          </div>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1">
            <CreditCard className="w-3.5 h-3.5" />
            <span className="leading-3 tracking-tighter"> No momento aceitamos somente Pix</span>
          </div>
        </div>
      </div>
    </header>
  )
}

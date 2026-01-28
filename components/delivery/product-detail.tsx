"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, UtensilsCrossed, Package } from "lucide-react"
import type { Product, Additional } from "@/lib/types"
import { additionals } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedAdditionals, setSelectedAdditionals] = useState<
    Record<string, number>
  >({})
  const [observation, setObservation] = useState("")

  const handleAdditionalChange = (additionalId: string, delta: number) => {
    setSelectedAdditionals((prev) => {
      const current = prev[additionalId] || 0
      const newValue = Math.max(0, Math.min(current + delta, 1))
      if (newValue === 0) {
        const updated = { ...prev }
        delete updated[additionalId]
        return updated
      }
      return { ...prev, [additionalId]: newValue }
    })
  }

  const totalAdditionals = Object.values(selectedAdditionals).reduce(
    (sum, qty) => sum + qty,
    0
  )

  const totalPrice = product.price * quantity

  const handleAddToCart = () => {
    const additionalsArray = Object.entries(selectedAdditionals)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({
        additional: additionals.find((a) => a.id === id) as Additional,
        quantity: qty,
      }))

    addItem(product, quantity, additionalsArray, observation)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-lg mx-auto min-h-screen pb-24 animate-in slide-in-from-bottom-8 duration-500 ease-out">
        <button
          onClick={onClose}
          className="fixed top-4 left-4 z-10 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 shadow-md
            hover:shadow-lg hover:scale-105 hover:bg-accent/90
            active:scale-95
            transition-all duration-200
            animate-in slide-in-from-left-4 duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          VOLTAR
        </button>

        <div className="relative aspect-square w-full max-h-[350px] overflow-hidden bg-secondary/30">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4 animate-in zoom-in-95 duration-700 ease-out"
          />
        </div>

        <div className="p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
          <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
          
          <div className="flex items-baseline gap-2 mt-2">
            {product.originalPrice && (
              <span className="text-muted-foreground line-through">
                de R$ {product.originalPrice.toFixed(2).replace(".", ",")} por
              </span>
            )}
          </div>
          <p className="text-2xl font-bold text-primary mt-1">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          
          {product.stock && (
            <p className="text-sm text-accent font-medium mt-2">
              Apenas {product.stock} disponíveis
            </p>
          )}

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Descrição</h2>
            
            {product.includes && product.includes.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <UtensilsCrossed className="w-4 h-4" />
                  O que vem no combo:
                </div>
                <ul className="text-muted-foreground text-sm space-y-1 ml-6">
                  {product.includes.map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.accompaniments && product.accompaniments.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center gap-2 text-foreground font-medium mb-2">
                  <Package className="w-4 h-4" />
                  Acompanhamentos:
                </div>
                <ul className="text-muted-foreground text-sm space-y-1 ml-6">
                  {product.accompaniments.map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 bg-primary/10 rounded-xl p-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-foreground">
                  Escolha um adicional gratuito
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escolha até 1 opção
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {totalAdditionals}/1
                </span>
                {totalAdditionals >= 1 && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {additionals.map((additional) => (
                <div
                  key={additional.id}
                  className="flex items-center justify-between bg-card rounded-lg p-3"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">
                      {additional.name} ({additional.quantity})
                    </p>
                    {additional.freeOnFirstOrder && (
                      <p className="text-xs text-primary">Grátis no 1º pedido</p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleAdditionalChange(additional.id, -1)}
                      disabled={(selectedAdditionals[additional.id] || 0) === 0}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground 
                        hover:bg-secondary hover:scale-110 active:scale-90 
                        disabled:opacity-50 transition-all duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className={`w-4 text-center font-medium text-foreground transition-all duration-200 
                      ${(selectedAdditionals[additional.id] || 0) > 0 ? "scale-125 text-primary" : ""}`}>
                      {selectedAdditionals[additional.id] || 0}
                    </span>
                    <button
                      onClick={() => handleAdditionalChange(additional.id, 1)}
                      disabled={totalAdditionals >= 1}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground 
                        hover:bg-secondary hover:scale-110 active:scale-90 
                        disabled:opacity-50 transition-all duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-foreground mb-2">
              Adicionar algum detalhe?
            </h3>
            <Textarea
              placeholder="Escreva o detalhe aqui..."
              value={observation}
              onChange={(e) => setObservation(e.target.value.slice(0, 140))}
              className="resize-none"
              rows={3}
            />
            <p className="text-xs text-muted-foreground text-right mt-1">
              {observation.length}/140
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 animate-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
          <div className="max-w-lg mx-auto flex items-center gap-4">
            <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="text-muted-foreground hover:text-foreground hover:scale-110 active:scale-90 transition-all duration-200"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-medium text-foreground w-6 text-center transition-all duration-200">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="text-muted-foreground hover:text-foreground hover:scale-110 active:scale-90 transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] py-6 text-lg font-semibold transition-all duration-200"
            >
              Adicionar R$ {totalPrice.toFixed(2).replace(".", ",")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

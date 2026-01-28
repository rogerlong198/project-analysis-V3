"use client"

import { useState, useCallback, useEffect } from "react"
import { products, categories } from "@/lib/data"
import type { Product } from "@/lib/types"
import { CartProvider } from "@/lib/cart-context"
import { StoreHeader } from "@/components/delivery/store-header"
import { CategoryNav } from "@/components/delivery/category-nav"
import { FeaturedProductCard } from "@/components/delivery/featured-product-card"
import { CompactProductCard } from "@/components/delivery/compact-product-card"
import { ReviewsSection } from "@/components/delivery/reviews-section"
import { CartButton } from "@/components/delivery/cart-button"
import { CartDrawer } from "@/components/delivery/cart-drawer"
import { ProductDetail } from "@/components/delivery/product-detail"
import { LocationPopup } from "@/components/delivery/location-popup"

function DeliveryApp() {
  const [activeCategory, setActiveCategory] = useState("ofertas")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [userAddress, setUserAddress] = useState<string | null>(null)

  useEffect(() => {
    // Verifica se ja tem endereco salvo
    const savedAddress = localStorage.getItem("delivery_address")
    if (savedAddress) {
      setUserAddress(savedAddress)
    } else {
      // Mostra popup apos 1 segundo
      const timer = setTimeout(() => {
        setShowLocationPopup(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleLocationSet = (address: string) => {
    setUserAddress(address)
    localStorage.setItem("delivery_address", address)
    setShowLocationPopup(false)
  }

  const handleCategoryChange = useCallback((categoryId: string) => {
    if (categoryId === activeCategory) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveCategory(categoryId)
      setIsTransitioning(false)
    }, 150)
  }, [activeCategory])

  const featuredProducts = products.filter((p) => p.category === "ofertas")
  const otherCategories = categories.filter((c) => c.id !== "ofertas")

  return (
    <div className="min-h-screen bg-background pb-24">
      <StoreHeader 
        userAddress={userAddress} 
        onChangeAddress={() => setShowLocationPopup(true)} 
      />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className={`max-w-lg mx-auto px-4 py-6 transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        {activeCategory === "ofertas" ? (
          <>
            <section className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-4">
                Ofertas do Dia
              </h2>
              <div className="space-y-4">
                {featuredProducts.map((product, index) => (
                  <FeaturedProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
            </section>

            {otherCategories.map((category) => {
              const categoryProducts = products.filter(
                (p) => p.category === category.id
              )
              if (categoryProducts.length === 0) return null
              return (
                <section key={category.id} className="mb-8">
                  <h2 className="text-lg font-bold text-foreground mb-4">
                    {category.name}
                  </h2>
                  <div className="space-y-3">
                    {categoryProducts.map((product, index) => (
                      <CompactProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        onClick={() => setSelectedProduct(product)}
                      />
                    ))}
                  </div>
                </section>
              )
            })}
          </>
        ) : (
          <section>
            <h2 className="text-lg font-bold text-foreground mb-4">
              {categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <div className="space-y-3">
              {products
                .filter((p) => p.category === activeCategory)
                .map((product, index) => (
                  <CompactProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
            </div>
          </section>
        )}

        <ReviewsSection />

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Todos os direitos reservados | Arco Bebidas 2026
          </p>
        </footer>
      </main>

      <CartButton onClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {showLocationPopup && (
        <LocationPopup
          onClose={() => setShowLocationPopup(false)}
          onLocationSet={handleLocationSet}
        />
      )}
    </div>
  )
}

export default function Page() {
  return (
    <CartProvider>
      <DeliveryApp />
    </CartProvider>
  )
}

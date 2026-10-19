import React, { useState, useEffect, useMemo } from 'react';
import { BouquetArticle } from './types';
import { FEATURED_BOUQUETS } from './data/bouquets';
import { Header } from './components/Header';
import { HeroFeatured } from './components/HeroFeatured';
import { BouquetCard } from './components/BouquetCard';
import { ArticleModal } from './components/ArticleModal';
import { BouquetArchitectModal } from './components/BouquetArchitectModal';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { ConditioningGuideSection } from './components/ConditioningGuideSection';
import { MoodboardDrawer } from './components/MoodboardDrawer';
import { NewsletterModal } from './components/NewsletterModal';
import { Footer } from './components/Footer';
import { Sparkles, SlidersHorizontal, BookOpen, Layers } from 'lucide-react';

const CATEGORIES = [
  'All Editorials',
  'Flemish Baroque',
  'Wild Meadow',
  'Ikebana & Wabi-Sabi',
  'French Romance',
  'Sculptural Avant-Garde',
] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Editorials');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Modals and Drawers
  const [activeArticle, setActiveArticle] = useState<BouquetArticle | null>(null);
  const [isAtelierOpen, setIsAtelierOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);

  // Saved Articles state with localStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('petalum_saved_bouquets');
      return stored ? JSON.parse(stored) : ['dutch-masters-revival'];
    } catch {
      return ['dutch-masters-revival'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('petalum_saved_bouquets', JSON.stringify(savedIds));
    } catch {
      // LocalStorage error handling
    }
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllSaves = () => {
    setSavedIds([]);
  };

  const savedArticles = useMemo(() => {
    return FEATURED_BOUQUETS.filter((b) => savedIds.includes(b.id));
  }, [savedIds]);

  // Lead cover story (Hero)
  const heroArticle = FEATURED_BOUQUETS[0];

  // Filtered Secondary Bouquets
  const filteredBouquets = useMemo(() => {
    return FEATURED_BOUQUETS.filter((b) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All Editorials' || b.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const inTitle = b.title.toLowerCase().includes(query);
      const inSubtitle = b.subtitle.toLowerCase().includes(query);
      const inCategory = b.category.toLowerCase().includes(query);
      const inBotanicals = b.keyBotanicals.some((bot) => bot.toLowerCase().includes(query));
      const inStems = b.recipe.stems.some(
        (s) =>
          s.flowerName.toLowerCase().includes(query) ||
          s.botanicalName.toLowerCase().includes(query)
      );

      return matchesCategory && (inTitle || inSubtitle || inCategory || inBotanicals || inStems);
    });
  }, [selectedCategory, searchQuery]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFlowerBouquet = (bouquetId: string) => {
    const target = FEATURED_BOUQUETS.find((b) => b.id === bouquetId);
    if (target) {
      setActiveArticle(target);
    } else {
      handleNavigate('featured');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201D1A] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        savedCount={savedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenAtelier={() => setIsAtelierOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isSearchOpen={isSearchOpen}
        onToggleSearch={() => setIsSearchOpen((prev) => !prev)}
      />

      <main className="flex-1">
        {/* Hero Lead Story Exhibition (Cover Feature) */}
        <HeroFeatured
          article={heroArticle}
          onReadArticle={setActiveArticle}
          isSaved={savedIds.includes(heroArticle.id)}
          onToggleSave={toggleSave}
        />

        {/* Featured Bouquets Catalog Section */}
        <section id="featured" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Salience Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E8E2D9]">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#631B2B] font-semibold mb-2">
                Curatorial Exhibition · Autumn 2026
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
                Featured Bouquet Studies
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#5C554D] font-serif max-w-2xl leading-relaxed">
                Fine art photographic studies and stem-by-stem formulas exploring Dutch Golden Age chiaroscuro, Scandi meadow airiness, Japanese wabi-sabi line, and French romance.
              </p>
            </div>

            {/* Quick Atelier CTA */}
            <button
              onClick={() => setIsAtelierOpen(true)}
              className="px-4 py-2.5 text-xs font-sans font-medium uppercase tracking-wider text-[#1E1B18] border border-[#DDD5C9] hover:border-[#631B2B] hover:text-[#631B2B] rounded transition-colors flex items-center gap-2 self-start md:self-auto shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A85A3C]" />
              <span>Compose Custom Formula</span>
            </button>
          </div>

          {/* Interactive Filter Tabs (Segmented Button Controls) */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs text-[#7A7369] uppercase tracking-wider font-semibold mr-2 shrink-0 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Aesthetic:</span>
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-sans font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#1E1B18] text-[#FAF8F5]'
                    : 'bg-white border border-[#DDD5C9] text-[#5C554D] hover:text-[#1E1B18] hover:border-[#B8ADA0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Result Feedback Indicator if searching */}
          {searchQuery && (
            <div className="mt-4 p-3 bg-[#F4EFEA] border border-[#E0D8CB] rounded-xs flex items-center justify-between text-xs text-[#5C554D]">
              <span>
                Showing results for &ldquo;<strong>{searchQuery}</strong>&rdquo; ({filteredBouquets.length} found)
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#631B2B] hover:underline font-semibold"
              >
                Clear filter
              </button>
            </div>
          )}

          {/* Bouquet Card Grid (Tier 2 Salience) */}
          {filteredBouquets.length === 0 ? (
            <div className="py-20 text-center text-[#7A7369] bg-white rounded-xs border border-[#E8E2D9] my-8">
              <BookOpen className="w-8 h-8 mx-auto text-[#DDD5C9] mb-3" />
              <h3 className="font-editorial text-2xl text-[#1E1B18]">No Bouquets Match Your Filter</h3>
              <p className="text-xs font-serif text-[#5C554D] mt-1 max-w-sm mx-auto">
                Try clearing your search keyword or selecting &ldquo;All Editorials&rdquo; to browse our complete collection.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All Editorials');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-medium uppercase tracking-wider bg-[#1E1B18] text-white rounded hover:bg-[#631B2B] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
              {filteredBouquets.map((article, idx) => (
                <BouquetCard
                  key={article.id}
                  article={article}
                  onReadArticle={setActiveArticle}
                  isSaved={savedIds.includes(article.id)}
                  onToggleSave={toggleSave}
                  index={idx}
                />
              ))}
            </div>
          )}
        </section>

        {/* Botanical Field Guide & Seasonal Index */}
        <SeasonalCalendar onSelectFlowerBouquet={handleSelectFlowerBouquet} />

        {/* Conditioning & Floral Hydraulics Handbook */}
        <ConditioningGuideSection />

        {/* Curatorial Newsletter Sign-up Banner Section */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#631B2B] font-semibold font-sans">
              Curatorial Dispatch
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E1B18] font-normal tracking-tight">
              Join The Petalum Society Gazette
            </h2>
            <p className="text-base text-[#5C554D] font-serif max-w-xl mx-auto leading-relaxed">
              Dispatched once each month upon the new moon: high-resolution still-life photography studies, master flower arranging formulas, and sustainable cut-flower care.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="py-3 px-6 text-xs uppercase tracking-widest font-sans font-medium text-white bg-[#1E1B18] hover:bg-[#631B2B] rounded transition-colors shadow-sm"
              >
                Request Gazette Subscription
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Editorial Colophon Footer */}
      <Footer
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        onOpenAtelier={() => setIsAtelierOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Deep-Dive Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        isSaved={activeArticle ? savedIds.includes(activeArticle.id) : false}
        onToggleSave={toggleSave}
        onOpenAtelierWithBouquet={(bouquet) => {
          setActiveArticle(null);
          setIsAtelierOpen(true);
        }}
      />

      {/* Botanical Recipe Architect Studio Modal */}
      <BouquetArchitectModal
        isOpen={isAtelierOpen}
        onClose={() => setIsAtelierOpen(false)}
      />

      {/* Saved Recipes Drawer */}
      <MoodboardDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticles}
        onRemoveSave={toggleSave}
        onReadArticle={setActiveArticle}
        onClearAll={handleClearAllSaves}
      />

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
}

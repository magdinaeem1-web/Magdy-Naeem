import React from 'react';
import { Bookmark, Sparkles, Search } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenAtelier: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isSearchOpen: boolean;
  onToggleSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  savedCount,
  onOpenBookmarks,
  onOpenAtelier,
  searchQuery,
  onSearchChange,
  isSearchOpen,
  onToggleSearch,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-baseline gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#631B2B]"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[#1E1B18] group-hover:text-[#631B2B] transition-colors whitespace-nowrap shrink-0">
              PETALUM
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#7D756C] font-sans whitespace-nowrap shrink-0">
              Botanical Review
            </span>
          </button>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-sans font-medium text-[#5F5850]">
            <button
              onClick={() => onNavigate('featured')}
              className={`hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
                activeSection === 'featured' ? 'text-[#1E1B18] border-[#1E1B18]' : 'border-transparent'
              }`}
            >
              Featured Bouquets
            </button>
            <button
              onClick={() => onNavigate('botanical-index')}
              className={`hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
                activeSection === 'botanical-index' ? 'text-[#1E1B18] border-[#1E1B18]' : 'border-transparent'
              }`}
            >
              Botanical Index
            </button>
            <button
              onClick={() => onNavigate('conditioning')}
              className={`hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
                activeSection === 'conditioning' ? 'text-[#1E1B18] border-[#1E1B18]' : 'border-transparent'
              }`}
            >
              Conditioning
            </button>
            <button
              onClick={() => onNavigate('colophon')}
              className={`hover:text-[#1E1B18] transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
                activeSection === 'colophon' ? 'text-[#1E1B18] border-[#1E1B18]' : 'border-transparent'
              }`}
            >
              Colophon
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Utility Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onToggleSearch}
              aria-label="Search articles and flowers"
              className="p-2 text-[#5F5850] hover:text-[#1E1B18] rounded-md transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Saved Bookmarks Trigger */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-2 text-[#5F5850] hover:text-[#1E1B18] rounded-md transition-colors flex items-center gap-1.5 text-xs font-sans"
              title="Saved Botanical Recipes"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="text-[11px] font-mono tabular-nums text-[#631B2B] font-semibold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenAtelier}
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#FAF8F5] bg-[#1E1B18] hover:bg-[#631B2B] rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E7A17B]" />
              <span>Bouquet Atelier</span>
            </button>
          </div>
        </div>

        {/* Expandable Search Input Row */}
        {isSearchOpen && (
          <div className="pb-4 pt-1 animate-in fade-in duration-150">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C847A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search flowers (e.g. Dahlia, Poppy, Ranunculus), styles, care tips..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#DDD5C9] rounded focus:outline-none focus:border-[#631B2B] focus:ring-1 focus:ring-[#631B2B] text-[#1E1B18] placeholder-[#9C948A]"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C847A] hover:text-[#1E1B18]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { BouquetArticle } from '../types';
import { ArrowRight, Bookmark, Check, Camera, Droplets, Clock } from 'lucide-react';

interface HeroFeaturedProps {
  article: BouquetArticle;
  onReadArticle: (article: BouquetArticle) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const HeroFeatured: React.FC<HeroFeaturedProps> = ({
  article,
  onReadArticle,
  isSaved,
  onToggleSave,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section id="hero" className="border-b border-[#E8E2D9] pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curatorial Masthead Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E2D9] text-xs font-sans text-[#7A7369]">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest text-[#1E1B18] font-semibold">Folio Edition № 14</span>
            <span aria-hidden="true">·</span>
            <span>Autumn Retrospective</span>
            <span aria-hidden="true">·</span>
            <span>Botanical Still-Life Studies</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span>By {article.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Lead Headline & Subtitle */}
        <div className="pt-8 pb-8 max-w-4xl">
          <div className="text-xs uppercase tracking-widest text-[#721C2B] font-semibold mb-3">
            Cover Story · {article.category}
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#1E1B18] tracking-tight [text-wrap:balance]">
            {article.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-[#5C554D] font-serif leading-relaxed max-w-3xl">
            {article.subtitle}
          </p>
        </div>

        {/* Primary Masterpiece Image & Visual Canvas */}
        <div className="relative group overflow-hidden rounded-xs border border-[#E0D8CB] bg-[#1E1B18]">
          <div className="aspect-[16/9] w-full relative">
            <img
              src={article.image}
              alt={article.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />
            {/* Measured Scrim for Editorial Typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Scrim Badge: Photo Specs & Stem Focus */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-4 text-white">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E7A17B] font-medium mb-1">
                  <Camera className="w-3.5 h-3.5" />
                  <span>AI-Integrated Botanical Photography</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-200 font-sans line-clamp-1 sm:line-clamp-2">
                  {article.photoMeta.lighting}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleSave(article.id)}
                  aria-label={isSaved ? 'Remove from saved' : 'Save bouquet recipe'}
                  className="px-3 py-2 text-xs font-sans rounded bg-white/20 backdrop-blur-md hover:bg-white/30 text-white transition-colors flex items-center gap-1.5"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#E7A17B] text-[#E7A17B]' : ''}`} />
                  <span>{isSaved ? 'Saved' : 'Save Recipe'}</span>
                </button>
                <button
                  onClick={() => onReadArticle(article)}
                  className="px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider bg-[#FAF8F5] text-[#1E1B18] hover:bg-[#631B2B] hover:text-white rounded transition-colors flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Story Curatorial Strip */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Drop Cap Editorial Preview */}
          <div className="lg:col-span-7">
            <p className="text-base sm:text-lg text-[#3D3833] font-serif leading-relaxed first-letter:text-5xl first-letter:font-editorial first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#631B2B]">
              {article.editorialLead}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-[#7A7369] font-sans">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#631B2B]" />
                {article.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#3F4D38]" />
                Vase Life: {article.recipe.vaseLife}
              </span>
              <span aria-hidden="true">·</span>
              <span>Vessel: {article.recipe.vessel.split('(')[0]}</span>
            </div>
          </div>

          {/* Right Column: Floral Palette Swatches & Botanical Stems */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xs border border-[#E5DEC3]/60 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D9]">
              <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1E1B18]">
                Palette Breakdown
              </span>
              <span className="text-[11px] text-[#8C847A] font-sans">
                {copiedHex ? `Copied ${copiedHex}` : 'Click swatch to copy'}
              </span>
            </div>

            {/* Interactive Swatches */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              {article.swatches.map((swatch) => (
                <button
                  key={swatch.hex}
                  onClick={() => handleCopyHex(swatch.hex)}
                  title={`${swatch.name} (${swatch.hex}) — ${swatch.description}`}
                  className="group relative flex flex-col items-center gap-1.5 p-1 rounded hover:bg-[#FAF8F5] transition-colors text-left"
                >
                  <div
                    className="w-full aspect-square rounded-xs border border-black/10 shadow-2xs group-hover:scale-105 transition-transform relative flex items-center justify-center"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    {copiedHex === swatch.hex && (
                      <Check className="w-3 h-3 text-white drop-shadow-md" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-[#5C554D] tracking-tight">
                    {swatch.hex}
                  </span>
                </button>
              ))}
            </div>

            {/* Featured Stem Key */}
            <div className="mt-5 pt-4 border-t border-[#E8E2D9]">
              <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-[#7A7369] mb-2">
                Primary Botanicals in Focus:
              </div>
              <ul className="space-y-1.5 text-xs text-[#3D3833] font-serif">
                {article.keyBotanicals.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-2">
                    <span className="text-[#631B2B] font-mono text-[10px]">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onReadArticle(article)}
                className="mt-4 w-full py-2 px-3 text-xs uppercase tracking-wider text-[#1E1B18] hover:text-[#631B2B] border border-[#DDD5C9] hover:border-[#631B2B] rounded transition-colors text-center font-medium"
              >
                Inspect Full Stem Recipe & Conditioning Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

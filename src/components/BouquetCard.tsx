import React from 'react';
import { BouquetArticle } from '../types';
import { ArrowUpRight, Bookmark, Droplets, Camera } from 'lucide-react';

interface BouquetCardProps {
  article: BouquetArticle;
  onReadArticle: (article: BouquetArticle) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  index: number;
}

export const BouquetCard: React.FC<BouquetCardProps> = ({
  article,
  onReadArticle,
  isSaved,
  onToggleSave,
  index,
}) => {
  return (
    <article className="group bg-white rounded-xs border border-[#E8E2D9] hover:border-[#CFC5B6] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xs">
      <div>
        {/* Visual Asset Container (4:3) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#201D1A]">
          <img
            src={article.image}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Top Right Save Affordance */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(article.id);
            }}
            aria-label={isSaved ? 'Remove from saved' : 'Save bouquet recipe'}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm text-[#1E1B18] shadow-xs transition-colors"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#631B2B] text-[#631B2B]' : 'text-[#5C554D]'}`} />
          </button>

          {/* Bottom Overlay: AI Photography Spec */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white/90 text-[11px] font-sans">
            <span className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
              <Camera className="w-3 h-3 text-[#E7A17B]" />
              <span>Studio Photographic Plate</span>
            </span>
            <span className="bg-black/45 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono tabular-nums">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex items-center gap-2 text-xs font-sans text-[#7A7369] mb-2.5">
            <span className="text-[#631B2B] font-medium">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Droplets className="w-3 h-3 text-[#3F4D38]" />
              {article.recipe.vaseLife.split(' ')[0]} {article.recipe.vaseLife.split(' ')[1]}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-editorial text-2xl font-normal text-[#1E1B18] leading-snug group-hover:text-[#631B2B] transition-colors line-clamp-2">
            {article.title}
          </h2>

          {/* Subtitle / Excerpt */}
          <p className="mt-2 text-sm text-[#5C554D] font-serif leading-relaxed line-clamp-2">
            {article.subtitle}
          </p>

          {/* Key Botanicals Preview */}
          <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-xs text-[#6B6358] font-sans">
            <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
              Focal Stems:
            </div>
            <p className="line-clamp-1 italic font-serif text-[#3D3833]">
              {article.keyBotanicals.slice(0, 2).join(' · ')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between border-t border-[#F0EBE1]/80">
        {/* Miniature Swatches Strip */}
        <div className="flex items-center gap-1">
          {article.swatches.slice(0, 4).map((swatch) => (
            <span
              key={swatch.hex}
              title={`${swatch.name} (${swatch.hex})`}
              className="w-3 h-3 rounded-full border border-black/10 inline-block"
              style={{ backgroundColor: swatch.hex }}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onReadArticle(article)}
          className="text-xs uppercase tracking-wider font-sans font-semibold text-[#1E1B18] group-hover:text-[#631B2B] flex items-center gap-1 transition-colors"
        >
          <span>Read Essay</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </article>
  );
};

import React, { useState, useEffect } from 'react';
import { BouquetArticle } from '../types';
import { X, Bookmark, Check, Camera, Droplets, Thermometer, Sparkles, Printer, Share2, Layers } from 'lucide-react';

interface ArticleModalProps {
  article: BouquetArticle | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenAtelierWithBouquet?: (article: BouquetArticle) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isSaved,
  onToggleSave,
  onOpenAtelierWithBouquet,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [activeTab, setActiveTab] = useState<'essay' | 'recipe' | 'photography'>('essay');
  const [checkedStems, setCheckedStems] = useState<Record<string, boolean>>({});
  const [shareFeedback, setShareFeedback] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!article) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const toggleStemCheck = (name: string) => {
    setCheckedStems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF8F5] text-[#201D1A] w-full max-w-5xl my-4 sm:my-8 rounded-xs shadow-2xl border border-[#DDD5C9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Utility Header */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-sans text-[#7A7369] truncate">
            <span className="uppercase tracking-widest text-[#1E1B18] font-semibold truncate">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{article.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Reading View Controls */}
            <div className="hidden sm:flex items-center gap-1 border border-[#DDD5C9] rounded px-1.5 py-0.5 text-xs text-[#5C554D]">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 rounded ${fontSize === 'normal' ? 'bg-[#E8E2D9] font-semibold text-[#1E1B18]' : ''}`}
                title="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 rounded text-sm ${fontSize === 'large' ? 'bg-[#E8E2D9] font-semibold text-[#1E1B18]' : ''}`}
                title="Larger reading font size"
              >
                A+
              </button>
            </div>

            {/* Print Affordance */}
            <button
              onClick={handlePrint}
              aria-label="Print or save recipe card"
              className="p-1.5 text-[#5C554D] hover:text-[#1E1B18] rounded transition-colors"
              title="Print Recipe Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Share Affordance */}
            <button
              onClick={handleShare}
              aria-label="Share article"
              className="p-1.5 text-[#5C554D] hover:text-[#1E1B18] rounded transition-colors relative"
              title="Copy Story Link"
            >
              <Share2 className="w-4 h-4" />
              {shareFeedback && (
                <span className="absolute -bottom-8 right-0 text-[10px] bg-[#1E1B18] text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>

            {/* Save Button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`px-3 py-1.5 text-xs font-sans rounded transition-colors flex items-center gap-1.5 border ${
                isSaved
                  ? 'bg-[#631B2B] text-white border-[#631B2B]'
                  : 'bg-white text-[#1E1B18] border-[#DDD5C9] hover:border-[#1E1B18]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved Recipe' : 'Save'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close article modal"
              className="p-1.5 text-[#5C554D] hover:text-[#1E1B18] hover:bg-[#E8E2D9] rounded transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Visual Presentation */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#1E1B18] overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom Title Scrim */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E7A17B] font-sans font-medium mb-2">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>Published {article.date}</span>
            </div>
            <h1 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight max-w-3xl">
              {article.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-stone-300 font-serif max-w-2xl hidden sm:block">
              {article.subtitle}
            </p>
          </div>
        </div>

        {/* Tab Navigation for Reading Views */}
        <div className="border-b border-[#E8E2D9] bg-white px-4 sm:px-8 flex items-center gap-6 text-xs uppercase tracking-wider font-sans font-medium text-[#7A7369]">
          <button
            onClick={() => setActiveTab('essay')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'essay'
                ? 'border-[#1E1B18] text-[#1E1B18]'
                : 'border-transparent hover:text-[#1E1B18]'
            }`}
          >
            Editorial Essay
          </button>
          <button
            onClick={() => setActiveTab('recipe')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'recipe'
                ? 'border-[#1E1B18] text-[#1E1B18]'
                : 'border-transparent hover:text-[#1E1B18]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#631B2B]" />
            <span>Floral Recipe & Stems ({article.recipe.stems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('photography')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'photography'
                ? 'border-[#1E1B18] text-[#1E1B18]'
                : 'border-transparent hover:text-[#1E1B18]'
            }`}
          >
            <Camera className="w-3.5 h-3.5 text-[#E7A17B]" />
            <span>AI Photography Dossier</span>
          </button>
        </div>

        {/* Main Content Body */}
        <div className="p-4 sm:p-8 lg:p-10">
          {activeTab === 'essay' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Essay Text Column */}
              <div className="lg:col-span-8">
                {/* Author Bylines */}
                <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#E8E2D9]">
                  <div className="w-10 h-10 rounded-full bg-[#1E1B18] text-white flex items-center justify-center font-editorial text-base">
                    {article.author.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-sans font-semibold text-[#1E1B18]">
                      {article.author.name}
                    </div>
                    <div className="text-xs text-[#7A7369] font-sans">
                      {article.author.role} · {article.readTime}
                    </div>
                  </div>
                </div>

                {/* Drop Cap Lead */}
                <p
                  className={`${
                    fontSize === 'large' ? 'text-xl leading-relaxed' : 'text-lg leading-relaxed'
                  } text-[#2A2622] font-serif first-letter:text-5xl first-letter:font-editorial first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#631B2B]`}
                >
                  {article.editorialLead}
                </p>

                {/* Paragraphs */}
                <div
                  className={`mt-6 space-y-5 font-serif text-[#3D3833] ${
                    fontSize === 'large' ? 'text-lg leading-loose' : 'text-base leading-relaxed'
                  }`}
                >
                  {article.bodyParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Editorial Pull Quote */}
                {article.pullQuote && (
                  <figure className="my-10 py-6 border-y border-[#DDD5C9] text-center px-4 sm:px-8">
                    <blockquote className="font-editorial italic text-2xl sm:text-3xl text-[#1E1B18] leading-snug">
                      "{article.pullQuote.text}"
                    </blockquote>
                    <figcaption className="mt-3 text-xs uppercase tracking-widest font-sans text-[#7A7369]">
                      — {article.pullQuote.attribution}
                    </figcaption>
                  </figure>
                )}

                {/* Step-by-Step Arrangement Guidance */}
                <div className="mt-10 pt-8 border-t border-[#E8E2D9]">
                  <h3 className="font-editorial text-2xl font-normal text-[#1E1B18] mb-4">
                    Architectural Assembly Sequence
                  </h3>
                  <ol className="space-y-3 font-sans text-xs sm:text-sm text-[#4A433A]">
                    {article.recipe.stepByStepCare.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="font-mono text-xs font-bold text-[#631B2B] bg-[#F2ECE3] px-2 py-0.5 rounded">
                          0{idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Curatorial Sidebar / Accession Spec */}
              <div className="lg:col-span-4 space-y-6">
                {/* Color Palette Box */}
                <div className="bg-white p-5 rounded-xs border border-[#E5DEC3]/80 shadow-2xs">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0EBE1] mb-3">
                    <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1E1B18]">
                      Palette Spectrum
                    </span>
                    <span className="text-[10px] text-[#8C847A] font-sans">
                      {copiedHex ? `Copied ${copiedHex}` : 'Click to copy'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {article.swatches.map((swatch) => (
                      <button
                        key={swatch.hex}
                        onClick={() => handleCopyHex(swatch.hex)}
                        className="w-full flex items-center justify-between p-1.5 rounded hover:bg-[#FAF8F5] transition-colors text-left group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-5 h-5 rounded-xs border border-black/10 shrink-0 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <div className="text-xs font-sans font-medium text-[#2A2622]">
                            {swatch.name}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-mono text-xs text-[#7A7369]">{swatch.hex}</span>
                          {copiedHex === swatch.hex && <Check className="w-3 h-3 text-[#3F4D38]" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Botanical Accession Parameters */}
                <div className="bg-white p-5 rounded-xs border border-[#E5DEC3]/80 shadow-2xs space-y-4 text-xs font-sans">
                  <div className="pb-2 border-b border-[#F0EBE1]">
                    <span className="uppercase tracking-widest font-semibold text-[#1E1B18]">
                      Arrangement Parameters
                    </span>
                  </div>

                  <div>
                    <div className="text-[#8C847A] uppercase text-[10px] tracking-wider mb-0.5">
                      Recommended Vessel
                    </div>
                    <div className="text-[#2A2622] font-medium font-serif text-sm">
                      {article.recipe.vessel}
                    </div>
                  </div>

                  <div>
                    <div className="text-[#8C847A] uppercase text-[10px] tracking-wider mb-0.5">
                      Internal Mechanics
                    </div>
                    <div className="text-[#2A2622] leading-relaxed">
                      {article.recipe.mechanics}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#F0EBE1]">
                    <div>
                      <div className="text-[#8C847A] uppercase text-[10px] tracking-wider flex items-center gap-1 mb-0.5">
                        <Thermometer className="w-3 h-3 text-[#A85A3C]" />
                        <span>Water Temp</span>
                      </div>
                      <div className="text-[#2A2622] font-medium text-[11px] leading-tight">
                        {article.recipe.waterTemperature.split(';')[0]}
                      </div>
                    </div>

                    <div>
                      <div className="text-[#8C847A] uppercase text-[10px] tracking-wider flex items-center gap-1 mb-0.5">
                        <Droplets className="w-3 h-3 text-[#3F4D38]" />
                        <span>Vase Longevity</span>
                      </div>
                      <div className="text-[#2A2622] font-medium text-[11px]">
                        {article.recipe.vaseLife}
                      </div>
                    </div>
                  </div>

                  {onOpenAtelierWithBouquet && (
                    <button
                      onClick={() => onOpenAtelierWithBouquet(article)}
                      className="mt-4 w-full py-2.5 px-3 text-xs uppercase tracking-wider text-white bg-[#1E1B18] hover:bg-[#631B2B] rounded transition-colors text-center font-medium flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E7A17B]" />
                      <span>Customize in Atelier</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'recipe' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E8E2D9]">
                <div>
                  <h3 className="font-editorial text-2xl font-normal text-[#1E1B18]">
                    Master Stem Recipe & Cut-Flower Checklist
                  </h3>
                  <p className="text-xs text-[#7A7369] font-sans mt-1">
                    Use this interactive checklist while at the flower market or conditioning in your studio.
                  </p>
                </div>
                <div className="text-xs font-mono text-[#631B2B] font-semibold bg-[#F4EFEA] px-3 py-1.5 rounded">
                  Total Stems: {article.recipe.stems.reduce((acc, s) => acc + s.count, 0)}
                </div>
              </div>

              {/* Stems Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-[#DDD5C9] text-[#7A7369] uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-2 w-10">Check</th>
                      <th className="py-3 px-3">Flower & Variety</th>
                      <th className="py-3 px-3">Botanical Species</th>
                      <th className="py-3 px-3 text-center">Stems</th>
                      <th className="py-3 px-3">Role</th>
                      <th className="py-3 px-3">Conditioning Tip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0EBE1]">
                    {article.recipe.stems.map((stem) => {
                      const isChecked = !!checkedStems[stem.flowerName];
                      return (
                        <tr
                          key={stem.flowerName}
                          onClick={() => toggleStemCheck(stem.flowerName)}
                          className={`cursor-pointer hover:bg-white/80 transition-colors ${
                            isChecked ? 'bg-[#F2ECE3]/50 text-[#8C847A]' : ''
                          }`}
                        >
                          <td className="py-3 px-2">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleStemCheck(stem.flowerName)}
                              className="rounded border-[#DDD5C9] text-[#631B2B] focus:ring-[#631B2B]"
                            />
                          </td>
                          <td className="py-3 px-3">
                            <div className={`font-semibold ${isChecked ? 'line-through text-[#8C847A]' : 'text-[#1E1B18]'}`}>
                              {stem.flowerName}
                            </div>
                            <div className="text-[11px] text-[#7A7369]">{stem.colorDescription}</div>
                          </td>
                          <td className="py-3 px-3 italic font-serif text-[#5C554D]">
                            {stem.botanicalName}
                          </td>
                          <td className="py-3 px-3 text-center font-mono font-semibold tabular-nums text-sm text-[#1E1B18]">
                            {stem.count}x
                          </td>
                          <td className="py-3 px-3">
                            <span className="uppercase text-[10px] tracking-wider px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#DDD5C9] text-[#5C554D]">
                              {stem.role}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-[#5C554D] max-w-xs">{stem.notes}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Vessel & Mechanics Summary Card */}
              <div className="mt-6 p-5 bg-white rounded-xs border border-[#E5DEC3] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#1E1B18]">
                    Vessel Architecture: {article.recipe.vessel}
                  </div>
                  <div className="text-xs text-[#5C554D] mt-1 font-serif">
                    {article.recipe.mechanics}
                  </div>
                </div>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs uppercase tracking-wider bg-[#1E1B18] text-white hover:bg-[#631B2B] rounded transition-colors flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Stem Card</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'photography' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#1E1B18]">
                  AI-Integrated Botanical Photography Dossier
                </h3>
                <p className="text-xs text-[#7A7369] font-sans mt-1">
                  How our botanical art directors craft camera perspectives, lighting physics, and floral stillness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xs border border-[#E5DEC3] space-y-4 text-xs font-sans">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                      Lighting Geometry & Atmosphere
                    </div>
                    <div className="text-sm font-serif text-[#2A2622] leading-relaxed">
                      {article.photoMeta.lighting}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                      Optics & Focal Depth
                    </div>
                    <div className="text-sm font-serif text-[#2A2622] leading-relaxed">
                      {article.photoMeta.lensAngle}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                      Curatorial Mood
                    </div>
                    <div className="text-sm font-serif text-[#2A2622] leading-relaxed">
                      {article.photoMeta.mood}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xs border border-[#E5DEC3] space-y-4 text-xs font-sans">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                      Location & Creation Backstory
                    </div>
                    <div className="text-sm font-serif text-[#2A2622] leading-relaxed">
                      {article.photoMeta.backstory}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-2">
                      Photographic Tonal Anchor Points
                    </div>
                    <div className="flex items-center gap-2">
                      {article.photoMeta.paletteHex.map((hex) => (
                        <div key={hex} className="flex flex-col items-center gap-1">
                          <div
                            className="w-8 h-8 rounded-xs border border-black/10 shadow-2xs"
                            style={{ backgroundColor: hex }}
                          />
                          <span className="font-mono text-[9px] text-[#7A7369]">{hex}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

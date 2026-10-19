import React, { useState } from 'react';
import { X, Sparkles, Plus, Minus, RotateCcw, Copy, Check, Printer } from 'lucide-react';
import { BouquetArticle } from '../types';

interface BouquetArchitectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBouquet?: BouquetArticle | null;
}

interface AtelierStemOption {
  id: string;
  name: string;
  botanical: string;
  category: 'focal' | 'secondary' | 'airy' | 'foliage';
  season: string;
  defaultCount: number;
  maxCount: number;
}

const AVAILABLE_STEMS: AtelierStemOption[] = [
  { id: 'rose', name: 'English Garden Rose', botanical: 'Rosa "Munstead Wood"', category: 'focal', season: 'Summer', defaultCount: 5, maxCount: 15 },
  { id: 'dahlia', name: 'Plum Dinnerplate Dahlia', botanical: 'Dahlia "Rip City"', category: 'focal', season: 'Late Summer', defaultCount: 4, maxCount: 12 },
  { id: 'poppy', name: 'Champagne Icelandic Poppy', botanical: 'Papaver nudicaule', category: 'focal', season: 'Spring', defaultCount: 6, maxCount: 14 },
  { id: 'ranunculus', name: 'White Cloni Ranunculus', botanical: 'Ranunculus asiaticus', category: 'focal', season: 'Spring', defaultCount: 3, maxCount: 10 },
  { id: 'protea', name: 'Burgundy King Protea', botanical: 'Protea cynaroides', category: 'focal', season: 'All Year', defaultCount: 1, maxCount: 3 },
  
  { id: 'hellebore', name: 'Green Winter Hellebore', botanical: 'Helleborus viridis', category: 'secondary', season: 'Winter/Spring', defaultCount: 4, maxCount: 10 },
  { id: 'spray-rose', name: 'Antique Spray Roses', botanical: 'Rosa multiflora', category: 'secondary', season: 'Summer', defaultCount: 4, maxCount: 12 },
  { id: 'anthurium', name: 'Terracotta Anthurium', botanical: 'Anthurium andraeanum', category: 'secondary', season: 'All Year', defaultCount: 3, maxCount: 8 },
  { id: 'quince', name: 'Budding Quince Branch', botanical: 'Chaenomeles speciosa', category: 'secondary', season: 'Spring', defaultCount: 2, maxCount: 6 },
  
  { id: 'quaking-grass', name: 'Briza Quaking Grass', botanical: 'Briza media', category: 'airy', season: 'Summer', defaultCount: 8, maxCount: 20 },
  { id: 'sweet-pea', name: 'Blush Sweet Peas', botanical: 'Lathyrus odoratus', category: 'airy', season: 'Early Summer', defaultCount: 6, maxCount: 16 },
  { id: 'jasmine', name: 'Star Jasmine Tendril', botanical: 'Trachelospermum jasminoides', category: 'airy', season: 'Summer', defaultCount: 3, maxCount: 8 },
  { id: 'palm-spear', name: 'Pleated Dried Fan Palm', botanical: 'Livistona chinensis', category: 'airy', season: 'All Year', defaultCount: 2, maxCount: 6 },

  { id: 'eucalyptus', name: 'Frosted Silver Eucalyptus', botanical: 'Eucalyptus cinerea', category: 'foliage', season: 'All Year', defaultCount: 4, maxCount: 12 },
  { id: 'fern', name: 'Bracken Forest Fern', botanical: 'Pteridium aquilinum', category: 'foliage', season: 'Summer', defaultCount: 5, maxCount: 12 },
  { id: 'olive', name: 'Silver Olive Foliage', botanical: 'Olea europaea', category: 'foliage', season: 'All Year', defaultCount: 3, maxCount: 10 },
  { id: 'smoke-bush', name: 'Plum Royal Smoke Bush', botanical: 'Cotinus coggygria', category: 'foliage', season: 'Summer', defaultCount: 4, maxCount: 10 },
];

const VESSELS = [
  { id: 'brass-compote', name: 'Aged Brass Compote', style: 'Baroque & Dutch Still-Life', mechanics: 'Chicken wire pillow + waterproof pot tape' },
  { id: 'stoneware', name: 'Handmade Speckled Ceramic Urn', style: 'Scandi Naturalist Meadow', mechanics: 'Brass kenzan (frog) in center' },
  { id: 'volcanic-suiban', name: 'Volcanic Basalt Shallow Suiban', style: 'Japanese Minimalist Ikebana', mechanics: 'Heavy rectangular brass kenzan' },
  { id: 'french-terracotta', name: 'Chiseled Limestone Footed Urn', style: 'French Romance & Bridal', mechanics: 'Hand-tied spiral stems + hemp twine' },
  { id: 'brutalist-cylinder', name: 'Smoked Charcoal Pedestal', style: 'Modernist Avant-Garde', mechanics: 'Weighted iron cage mechanics' },
];

export const BouquetArchitectModal: React.FC<BouquetArchitectModalProps> = ({
  isOpen,
  onClose,
  initialBouquet,
}) => {
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0].id);
  const [stemCounts, setStemCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    AVAILABLE_STEMS.forEach((s) => {
      // Default initial balance
      if (['rose', 'dahlia', 'hellebore', 'jasmine', 'fern'].includes(s.id)) {
        counts[s.id] = s.defaultCount;
      } else {
        counts[s.id] = 0;
      }
    });
    return counts;
  });
  const [copiedRecipe, setCopiedRecipe] = useState(false);

  if (!isOpen) return null;

  const updateStem = (id: string, delta: number) => {
    setStemCounts((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, Math.min(25, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const handleReset = () => {
    const counts: Record<string, number> = {};
    AVAILABLE_STEMS.forEach((s) => {
      if (['poppy', 'quaking-grass', 'eucalyptus'].includes(s.id)) {
        counts[s.id] = s.defaultCount;
      } else {
        counts[s.id] = 0;
      }
    });
    setStemCounts(counts);
  };

  // Calculations
  const totalStems = Object.values(stemCounts).reduce((a, b) => a + b, 0);

  const focalTotal = AVAILABLE_STEMS.filter((s) => s.category === 'focal').reduce(
    (acc, s) => acc + (stemCounts[s.id] || 0),
    0
  );
  const secondaryTotal = AVAILABLE_STEMS.filter((s) => s.category === 'secondary').reduce(
    (acc, s) => acc + (stemCounts[s.id] || 0),
    0
  );
  const airyTotal = AVAILABLE_STEMS.filter((s) => s.category === 'airy').reduce(
    (acc, s) => acc + (stemCounts[s.id] || 0),
    0
  );
  const foliageTotal = AVAILABLE_STEMS.filter((s) => s.category === 'foliage').reduce(
    (acc, s) => acc + (stemCounts[s.id] || 0),
    0
  );

  const focalPercent = totalStems > 0 ? Math.round((focalTotal / totalStems) * 100) : 0;
  const airyPercent = totalStems > 0 ? Math.round((airyTotal / totalStems) * 100) : 0;
  const foliagePercent = totalStems > 0 ? Math.round((foliageTotal / totalStems) * 100) : 0;

  const currentVessel = VESSELS.find((v) => v.id === selectedVessel) || VESSELS[0];

  // Curatorial assessment based on ratio
  let balanceDiagnosis = 'Balanced Botanical Composition';
  if (totalStems < 5) {
    balanceDiagnosis = 'Wabi-Sabi Minimalist Line (Few Stems)';
  } else if (focalPercent > 55) {
    balanceDiagnosis = 'Heavy Focal Mass (Baroque Density)';
  } else if (airyPercent > 45) {
    balanceDiagnosis = 'Naturalist Meadow Flutter (Airy & Kinetic)';
  } else if (foliagePercent > 45) {
    balanceDiagnosis = 'Verdant Forest Garden (Green Heavy)';
  }

  const handleCopyRecipe = () => {
    const activeStems = AVAILABLE_STEMS.filter((s) => (stemCounts[s.id] || 0) > 0);
    const text = `PETALUM BOTANICAL RECIPE FORMULA
------------------------------------------------
Vessel: ${currentVessel.name} (${currentVessel.style})
Internal Mechanics: ${currentVessel.mechanics}
Total Stem Count: ${totalStems}
Balance Assessment: ${balanceDiagnosis}

STEM INVENTORY:
${activeStems
  .map(
    (s) =>
      `• ${stemCounts[s.id]}x ${s.name} (${s.botanical}) [${s.category.toUpperCase()}]`
  )
  .join('\n')}

CONDITIONING RULES:
1. Cut all stems 2cm underwater at a 45° angle.
2. For hollow stems (dahlias/poppies), sear cut ends in hot water.
3. Condition in cool, draft-free room for 4 hours before arranging.
Generated via Petalum Botanical Journal`;

    navigator.clipboard.writeText(text);
    setCopiedRecipe(true);
    setTimeout(() => setCopiedRecipe(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF8F5] text-[#201D1A] w-full max-w-5xl my-4 sm:my-8 rounded-xs shadow-2xl border border-[#DDD5C9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-white border-b border-[#E8E2D9] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#631B2B]" />
            <div>
              <h2 className="font-editorial text-2xl font-normal text-[#1E1B18]">
                The Botanical Atelier
              </h2>
              <p className="text-xs text-[#7A7369] font-sans">
                Interactive Floral Recipe Architect & Stem Ratio Calculator
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-1.5 text-xs text-[#7A7369] hover:text-[#1E1B18] flex items-center gap-1 rounded transition-colors"
              title="Reset stem counts"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close Atelier"
              className="p-1.5 text-[#5C554D] hover:text-[#1E1B18] rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Content Grid */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Vessel & Stem Selection */}
          <div className="lg:col-span-7 space-y-6">
            {/* Vessel Selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#1E1B18] mb-2">
                1. Select Architectural Vessel
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {VESSELS.map((vessel) => (
                  <button
                    key={vessel.id}
                    onClick={() => setSelectedVessel(vessel.id)}
                    className={`p-3 rounded-xs border text-left transition-all ${
                      selectedVessel === vessel.id
                        ? 'border-[#631B2B] bg-white shadow-xs'
                        : 'border-[#E0D8CB] bg-[#FAF8F5] hover:bg-white'
                    }`}
                  >
                    <div className="font-serif text-sm font-medium text-[#1E1B18]">
                      {vessel.name}
                    </div>
                    <div className="text-[11px] text-[#7A7369] font-sans mt-0.5">
                      {vessel.style}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stem Inventory Adjuster */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-sans font-semibold text-[#1E1B18]">
                  2. Curate Botanical Stems ({totalStems} Total)
                </label>
                <span className="text-[11px] text-[#7A7369] font-sans">
                  Tap + or - to balance stems
                </span>
              </div>

              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                {(['focal', 'secondary', 'airy', 'foliage'] as const).map((cat) => {
                  const catStems = AVAILABLE_STEMS.filter((s) => s.category === cat);
                  const labels = {
                    focal: 'Focal Bloomer Stems (Primary Visual Weight)',
                    secondary: 'Secondary Stems (Tonal Bridges & Depth)',
                    airy: 'Kinetic & Airy Stems (Motion, Tendrils & Float)',
                    foliage: 'Architectural Foliage (Structure & Cradle)',
                  };

                  return (
                    <div key={cat} className="space-y-1.5">
                      <div className="text-[11px] uppercase tracking-wider text-[#631B2B] font-sans font-semibold bg-[#F2ECE3] px-2.5 py-1 rounded-xs">
                        {labels[cat]}
                      </div>

                      {catStems.map((stem) => {
                        const count = stemCounts[stem.id] || 0;
                        return (
                          <div
                            key={stem.id}
                            className={`flex items-center justify-between p-2 rounded-xs border transition-colors ${
                              count > 0 ? 'bg-white border-[#DDD5C9]' : 'bg-[#FAF8F5]/60 border-transparent hover:border-[#E8E2D9]'
                            }`}
                          >
                            <div className="truncate mr-2">
                              <div className="text-xs font-semibold text-[#1E1B18] truncate">
                                {stem.name}
                              </div>
                              <div className="text-[10px] italic font-serif text-[#7A7369] truncate">
                                {stem.botanical} · {stem.season}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => updateStem(stem.id, -1)}
                                disabled={count === 0}
                                className="w-6 h-6 rounded border border-[#DDD5C9] bg-white flex items-center justify-center text-[#5C554D] hover:bg-[#FAF8F5] disabled:opacity-30 disabled:cursor-not-allowed"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono text-xs font-semibold tabular-nums w-5 text-center text-[#1E1B18]">
                                {count}
                              </span>
                              <button
                                onClick={() => updateStem(stem.id, 1)}
                                className="w-6 h-6 rounded border border-[#DDD5C9] bg-white flex items-center justify-center text-[#1E1B18] hover:bg-[#FAF8F5]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Formula & Balance Analytics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-xs border border-[#E5DEC3] shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE1]">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#1E1B18]">
                  Formula Summary
                </span>
                <span className="font-mono text-xs font-semibold text-[#631B2B]">
                  {totalStems} Stems
                </span>
              </div>

              {/* Composition Diagnosis */}
              <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D9] rounded-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                  Arrangement Character
                </div>
                <div className="font-editorial text-lg text-[#1E1B18] font-normal leading-tight">
                  {balanceDiagnosis}
                </div>
                <div className="text-xs text-[#5C554D] font-serif mt-1">
                  Vessel: {currentVessel.name} · {currentVessel.mechanics}
                </div>
              </div>

              {/* Ratios Breakdown Bar */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#7A7369] font-semibold mb-2">
                  Structural Stem Proportions
                </div>
                <div className="h-3 w-full bg-[#E8E2D9] rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#631B2B] h-full transition-all duration-300"
                    style={{ width: `${focalPercent}%` }}
                    title={`Focal Blooms: ${focalPercent}%`}
                  />
                  <div
                    className="bg-[#A85A3C] h-full transition-all duration-300"
                    style={{ width: `${totalStems > 0 ? Math.round((secondaryTotal / totalStems) * 100) : 0}%` }}
                    title={`Secondary: ${totalStems > 0 ? Math.round((secondaryTotal / totalStems) * 100) : 0}%`}
                  />
                  <div
                    className="bg-[#E7A17B] h-full transition-all duration-300"
                    style={{ width: `${airyPercent}%` }}
                    title={`Airy Float: ${airyPercent}%`}
                  />
                  <div
                    className="bg-[#3F4D38] h-full transition-all duration-300"
                    style={{ width: `${foliagePercent}%` }}
                    title={`Foliage Base: ${foliagePercent}%`}
                  />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#631B2B] inline-block" />
                    <span className="text-[#5C554D]">Focal: {focalTotal} ({focalPercent}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A85A3C] inline-block" />
                    <span className="text-[#5C554D]">Secondary: {secondaryTotal}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E7A17B] inline-block" />
                    <span className="text-[#5C554D]">Airy Stems: {airyTotal} ({airyPercent}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3F4D38] inline-block" />
                    <span className="text-[#5C554D]">Foliage: {foliageTotal} ({foliagePercent}%)</span>
                  </div>
                </div>
              </div>

              {/* Active Stems List */}
              <div className="pt-3 border-t border-[#F0EBE1]">
                <div className="text-[11px] uppercase tracking-wider text-[#8C847A] font-semibold mb-2">
                  Market Shopping List:
                </div>
                {totalStems === 0 ? (
                  <p className="text-xs text-[#8C847A] italic">
                    No stems selected. Add stems using the selectors on the left.
                  </p>
                ) : (
                  <ul className="space-y-1 text-xs text-[#3D3833] max-h-36 overflow-y-auto pr-1">
                    {AVAILABLE_STEMS.filter((s) => (stemCounts[s.id] || 0) > 0).map((s) => (
                      <li key={s.id} className="flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="font-mono font-semibold tabular-nums text-[#631B2B]">
                          {stemCounts[s.id]} stems
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleCopyRecipe}
                  disabled={totalStems === 0}
                  className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-medium bg-[#1E1B18] text-white hover:bg-[#631B2B] rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  {copiedRecipe ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRecipe ? 'Formula Copied to Clipboard!' : 'Copy Recipe Formula'}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  disabled={totalStems === 0}
                  className="w-full py-2 px-4 text-xs uppercase tracking-wider font-medium text-[#1E1B18] border border-[#DDD5C9] hover:bg-[#FAF8F5] rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Botanical Market Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

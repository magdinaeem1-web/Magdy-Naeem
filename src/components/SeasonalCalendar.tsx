import React, { useState } from 'react';
import { BOTANICAL_FIELD_GUIDE } from '../data/fieldGuide';
import { Droplets, Sparkles, Wind, Sun } from 'lucide-react';

interface SeasonalCalendarProps {
  onSelectFlowerBouquet: (bouquetId: string) => void;
}

export const SeasonalCalendar: React.FC<SeasonalCalendarProps> = ({
  onSelectFlowerBouquet,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<string>('All');
  const [selectedFlowerId, setSelectedFlowerId] = useState<string>(BOTANICAL_FIELD_GUIDE[0].id);

  const seasons = ['All', 'Spring', 'Early Summer', 'Late Summer', 'All Year'];

  const filteredFlowers = selectedSeason === 'All'
    ? BOTANICAL_FIELD_GUIDE
    : BOTANICAL_FIELD_GUIDE.filter((f) => f.season === selectedSeason);

  const activeFlower = BOTANICAL_FIELD_GUIDE.find((f) => f.id === selectedFlowerId) || filteredFlowers[0];

  return (
    <section id="botanical-index" className="py-16 sm:py-20 border-b border-[#E8E2D9] bg-[#F4EFEA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0D8CB]">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#631B2B] font-semibold mb-2">
              Botanical Taxonomy & Field Guide
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1E1B18] font-normal tracking-tight">
              Seasonal Bloom Index & Cut-Flower Care
            </h2>
            <p className="mt-2 text-sm text-[#5C554D] font-serif max-w-2xl">
              An encyclopedic guide to botanical species, scent classifications, hydration thresholds, and flower symbolism.
            </p>
          </div>

          {/* Interactive Season Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white border border-[#DDD5C9] rounded-xs shrink-0 overflow-x-auto max-w-full">
            {seasons.map((season) => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-3 py-1.5 text-xs font-sans font-medium rounded-xs transition-colors whitespace-nowrap shrink-0 ${
                  selectedSeason === season
                    ? 'bg-[#1E1B18] text-white'
                    : 'text-[#5C554D] hover:text-[#1E1B18]'
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Flower List & Selected Detail Dossier */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Flower List (Left Column) */}
          <div className="lg:col-span-5 bg-white border border-[#DDD5C9] rounded-xs divide-y divide-[#F0EBE1] overflow-hidden">
            {filteredFlowers.map((flower) => {
              const isSelected = flower.id === activeFlower.id;
              return (
                <button
                  key={flower.id}
                  onClick={() => setSelectedFlowerId(flower.id)}
                  className={`w-full p-4 text-left transition-colors flex items-center justify-between group ${
                    isSelected ? 'bg-[#FAF8F5]' : 'hover:bg-[#FAF8F5]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${isSelected ? 'text-[#631B2B]' : 'text-[#1E1B18]'}`}>
                        {flower.commonName}
                      </span>
                    </div>
                    <div className="text-xs italic font-serif text-[#7A7369]">
                      {flower.botanicalName}
                    </div>
                  </div>

                  <div className="text-right text-xs font-sans text-[#5C554D]">
                    <div className="text-[11px] uppercase tracking-wider text-[#8C847A]">
                      {flower.season}
                    </div>
                    <div className="font-mono text-[11px] text-[#3F4D38]">
                      {flower.vaseLifeDays}d vase life
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Flower Detailed Dossier (Right Column) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-[#DDD5C9] shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#F0EBE1]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#7A7369] font-sans">
                  Family: {activeFlower.family} · Season: {activeFlower.season}
                </span>
                <h3 className="font-editorial text-3xl text-[#1E1B18] font-normal mt-0.5">
                  {activeFlower.commonName}
                </h3>
                <p className="italic font-serif text-sm text-[#631B2B]">
                  {activeFlower.botanicalName}
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-sans">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#DDD5C9] rounded text-[#3F4D38]">
                  <Droplets className="w-3.5 h-3.5" />
                  <span className="font-semibold">{activeFlower.vaseLifeDays} Days</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#DDD5C9] rounded text-[#A85A3C]">
                  <Wind className="w-3.5 h-3.5" />
                  <span>{activeFlower.scentProfile}</span>
                </span>
              </div>
            </div>

            {/* Conditioning Secret */}
            <div>
              <div className="text-xs uppercase tracking-wider font-sans font-semibold text-[#1E1B18] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#631B2B]" />
                <span>Florist Conditioning & Hydration Protocol</span>
              </div>
              <p className="text-sm font-serif text-[#3D3833] leading-relaxed bg-[#FAF8F5] p-4 rounded-xs border border-[#E8E2D9]">
                {activeFlower.stemCareTip}
              </p>
            </div>

            {/* Symbolism & Historical Lore */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF8F5] rounded-xs border border-[#E8E2D9]">
                <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                  Historical Floriography & Lore
                </div>
                <div className="text-xs font-serif text-[#2A2622] leading-relaxed">
                  {activeFlower.meaning}
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-xs border border-[#E8E2D9] flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8C847A] font-semibold mb-1">
                    Featured In Journal Arrangement
                  </div>
                  <div className="text-xs font-sans text-[#2A2622]">
                    Presented in high-fidelity photographic essay.
                  </div>
                </div>

                <button
                  onClick={() => onSelectFlowerBouquet(activeFlower.featuredInBouquetId)}
                  className="mt-3 text-xs font-sans font-semibold text-[#631B2B] hover:text-[#1E1B18] flex items-center gap-1 transition-colors self-start"
                >
                  <span>View Bouquets with this Stem</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

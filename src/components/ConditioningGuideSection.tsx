import React, { useState } from 'react';
import { EDITORIAL_COLUMNS } from '../data/fieldGuide';
import { Sparkles, Thermometer, Droplet, Flame, Scissors, Clock } from 'lucide-react';

export const ConditioningGuideSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Stem Searing (Thermal Shock)',
      icon: Flame,
      idealFor: 'Poppies, Dahlias, Euphorbia, Flowering Branches',
      technique: 'Dip freshly trimmed stem ends into boiling water (approx. 95°C) for exactly 15 to 20 seconds, or sear over a candle flame. This breaks hollow air embolisms and coagulates cloudy milky sap, allowing clear xylem water uptake.',
      rule: 'Protect delicate blooms from rising steam by shielding flower heads with a damp towel.'
    },
    {
      title: '45-Degree Underwater Angled Trimming',
      icon: Scissors,
      idealFor: 'Garden Roses, Ranunculus, Peonies, Sweet Peas',
      technique: 'When a flower stem is cut in air, microscopic air bubbles are sucked into xylem capillaries, forming an air embolism that prevents hydration. By submerging stem ends under water and slicing at a sharp 45° angle with clean floral shears, the capillary vacuum is immediately filled with life-giving water.',
      rule: 'Never crush woody or herbaceous stems with dull scissors; blunt crush causes rapid bacterial rot.'
    },
    {
      title: 'Vase Hygiene & Bacterial Prohibitions',
      icon: Droplet,
      idealFor: 'All Cut Botanicals & Fragile Blooms',
      technique: 'A vase must be clean enough to drink from. Wash vessels with mild bleach or castile soap before arranging. Strip every leaf, thorn, and twig that falls below the waterline—submerged foliage begins rotting within 4 hours, multiplying bacteria that choke stem vessels.',
      rule: 'Rinse and replace vase water every 48 hours for delicate blooms, every 24 hours in heated rooms.'
    },
    {
      title: 'Hydration Temperature Calibration',
      icon: Thermometer,
      idealFor: 'Woody Branches vs Tender Spring Bulbs',
      technique: 'Different botanicals respond to different water thermal states. Tight, hard garden roses and woody flowering branches thrive in warm water (35°C–40°C), which opens capillary pathways and encourages tight petals to unfurl. Conversely, soft spring bulbs (tulips, anemones, ranunculus) must have cold or iced water to slow cell division and maintain crisp stems.',
      rule: 'Never mix cold bulb species with warm-craving woody stems in the same immediate hydration vessel.'
    }
  ];

  return (
    <section id="conditioning" className="py-16 sm:py-20 border-b border-[#E8E2D9] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl pb-8 border-b border-[#E8E2D9]">
          <div className="text-xs uppercase tracking-widest text-[#631B2B] font-semibold mb-2">
            The Atelier Botanical Handbook
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal tracking-tight">
            The Science of Cut-Flower Conditioning
          </h2>
          <p className="mt-3 text-base text-[#5C554D] font-serif leading-relaxed">
            Why traditional floristry tricks work: understanding vascular hydraulics, thermal shocks, and botanical longevity secrets from master florists.
          </p>
        </div>

        {/* 4 Pillars Interactive Tab Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPillar(idx)}
                  className={`w-full p-4 rounded-xs border text-left transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-white border-[#631B2B] shadow-xs'
                      : 'bg-[#FAF8F5] border-[#E8E2D9] hover:bg-white'
                  }`}
                >
                  <div
                    className={`p-2 rounded-xs shrink-0 ${
                      isSelected ? 'bg-[#631B2B] text-white' : 'bg-[#F2ECE3] text-[#5C554D]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#7A7369]">Pillar 0{idx + 1}</div>
                    <div className="text-sm font-semibold text-[#1E1B18] font-serif mt-0.5">
                      {pillar.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Technical Deep Dive */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xs border border-[#DDD5C9] shadow-xs space-y-5">
            <div className="pb-3 border-b border-[#F0EBE1]">
              <span className="text-[11px] uppercase tracking-widest text-[#631B2B] font-sans font-semibold">
                Conditioning Protocol · 0{selectedPillar + 1}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#1E1B18] font-normal mt-1">
                {pillars[selectedPillar].title}
              </h3>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-sans font-semibold text-[#8C847A] mb-1">
                Target Botanicals
              </div>
              <p className="text-sm font-serif italic text-[#3D3833]">
                {pillars[selectedPillar].idealFor}
              </p>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-sans font-semibold text-[#8C847A] mb-1">
                Vascular Mechanism & Method
              </div>
              <p className="text-sm font-serif text-[#3D3833] leading-relaxed">
                {pillars[selectedPillar].technique}
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] rounded-xs border border-[#E8E2D9]">
              <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-[#631B2B] mb-1">
                Golden Rule
              </div>
              <p className="text-xs font-sans text-[#2A2622] leading-normal">
                {pillars[selectedPillar].rule}
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Guest Columns */}
        <div className="mt-16 pt-12 border-t border-[#E8E2D9]">
          <div className="text-xs uppercase tracking-widest text-[#7A7369] font-sans font-semibold mb-6">
            Curatorial Dispatches & Guest Columns
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDITORIAL_COLUMNS.map((col) => (
              <div
                key={col.id}
                className="bg-white p-6 rounded-xs border border-[#E8E2D9] hover:border-[#DDD5C9] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#7A7369] font-sans mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{col.readTime}</span>
                  </div>
                  <h4 className="font-editorial text-xl text-[#1E1B18] font-medium leading-snug">
                    {col.title}
                  </h4>
                  <p className="mt-3 text-xs text-[#5C554D] font-serif leading-relaxed line-clamp-3">
                    {col.excerpt}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0EBE1] text-xs text-[#7A7369] font-sans">
                  {col.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

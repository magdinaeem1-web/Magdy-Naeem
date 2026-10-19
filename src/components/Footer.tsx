import React from 'react';
import { Sparkles, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenNewsletter: () => void;
  onOpenAtelier: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenNewsletter,
  onOpenAtelier,
  onNavigate,
}) => {
  return (
    <footer id="colophon" className="bg-[#1E1B18] text-[#E0D8CB] border-t border-[#332E28] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#332E28]">
          {/* Brand Colophon */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-editorial text-3xl font-normal tracking-tight text-white">
              PETALUM
            </div>
            <p className="text-sm font-serif text-[#B8ADA0] leading-relaxed max-w-sm">
              An independent journal of floral architecture, ephemeral botany, and fine art still-life photography. Celebrating seasonal blooms, mindful conditioning, and sustainable floral mechanics.
            </p>
            <div className="pt-2 text-xs font-sans text-[#8C847A]">
              Folio № 14 · Autumn Issue · ISSN 2814-9921
            </div>
          </div>

          {/* Curatorial Sections */}
          <div className="md:col-span-3 space-y-3 text-xs font-sans">
            <div className="uppercase tracking-widest text-white font-semibold mb-2">
              Journal Departments
            </div>
            <ul className="space-y-2 text-[#B8ADA0]">
              <li>
                <button
                  onClick={() => onNavigate('featured')}
                  className="hover:text-white transition-colors"
                >
                  Featured Bouquet Essays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('botanical-index')}
                  className="hover:text-white transition-colors"
                >
                  Botanical Field Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('conditioning')}
                  className="hover:text-white transition-colors"
                >
                  Conditioning & Hydraulics
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAtelier}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#E7A17B]"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>The Botanical Atelier</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Ethics Pledge & Gazette CTA */}
          <div className="md:col-span-4 space-y-4">
            <div className="uppercase tracking-widest text-white font-semibold text-xs">
              Curatorial Sourcing Pledge
            </div>
            <p className="text-xs font-serif text-[#B8ADA0] leading-relaxed">
              Petalum arrangements strictly use compostable chicken-wire mechanics, ceramic frogs, and local organic growers. We advocate for a 100% microplastic-free floristry future.
            </p>

            <button
              onClick={onOpenNewsletter}
              className="py-2.5 px-4 text-xs font-sans font-medium uppercase tracking-wider text-[#1E1B18] bg-[#FAF8F5] hover:bg-[#E7A17B] rounded transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Join The Monthly Gazette</span>
            </button>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#8C847A]">
          <div>
            © {new Date().getFullYear()} Petalum Review. All rights reserved. Photographs and texts copyright their respective curators.
          </div>
          <div className="flex items-center gap-1 text-[#B8ADA0]">
            <span>Crafted with botanical devotion</span>
            <Heart className="w-3 h-3 text-[#631B2B] fill-[#631B2B]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

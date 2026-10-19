import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, Printer } from 'lucide-react';
import { BouquetArticle } from '../types';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: BouquetArticle[];
  onRemoveSave: (id: string) => void;
  onReadArticle: (article: BouquetArticle) => void;
  onClearAll: () => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onRemoveSave,
  onReadArticle,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FAF8F5] text-[#1E1B18] h-full shadow-2xl flex flex-col justify-between border-l border-[#DDD5C9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#E8E2D9] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#631B2B]" />
            <h3 className="font-editorial text-2xl font-normal text-[#1E1B18]">
              Saved Botanical Recipes
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close saved drawer"
            className="p-1.5 text-[#7A7369] hover:text-[#1E1B18] rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="py-16 text-center text-[#7A7369] space-y-3">
              <Bookmark className="w-8 h-8 mx-auto text-[#DDD5C9]" />
              <p className="font-serif text-base text-[#5C554D]">
                Your floral recipe collection is empty.
              </p>
              <p className="text-xs font-sans text-[#8C847A] max-w-xs mx-auto">
                Bookmark any featured bouquet to preserve its stem counts, vessel mechanics, and conditioning rules.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#7A7369] pb-2 border-b border-[#E8E2D9]">
                <span>{savedArticles.length} Saved Formulas</span>
                <button
                  onClick={onClearAll}
                  className="text-red-700 hover:text-red-900 transition-colors"
                >
                  Clear all
                </button>
              </div>

              {savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white p-3.5 rounded-xs border border-[#E8E2D9] hover:border-[#DDD5C9] transition-all flex gap-3.5 group"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-xs border border-black/5 shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#631B2B] font-semibold truncate">
                        {article.category}
                      </div>
                      <h4 className="font-editorial text-base text-[#1E1B18] font-medium leading-snug line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#7A7369] font-sans mt-0.5">
                        {article.recipe.stems.length} Stems · {article.recipe.vaseLife}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <button
                        onClick={() => {
                          onReadArticle(article);
                          onClose();
                        }}
                        className="font-semibold text-[#1E1B18] hover:text-[#631B2B] flex items-center gap-1 transition-colors"
                      >
                        <span>View Formula</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveSave(article.id)}
                        className="text-[#8C847A] hover:text-red-700 p-1 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {savedArticles.length > 0 && (
          <div className="p-6 border-t border-[#E8E2D9] bg-white space-y-2">
            <button
              onClick={() => window.print()}
              className="w-full py-2.5 px-4 text-xs uppercase tracking-wider font-medium text-white bg-[#1E1B18] hover:bg-[#631B2B] rounded transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Complete Bouquet Folio</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

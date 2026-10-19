import React, { useState } from 'react';
import { X, Check, Mail, BookOpen, Download } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-[#FAF8F5] text-[#201D1A] w-full max-w-lg rounded-xs shadow-2xl border border-[#DDD5C9] p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close subscription modal"
          className="absolute top-4 right-4 p-1.5 text-[#7A7369] hover:text-[#1E1B18] rounded"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="w-10 h-10 rounded-full bg-[#F2ECE3] text-[#631B2B] flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-[#631B2B] font-semibold font-sans">
              The Monthly Petalum Gazette
            </span>
            <h3 className="font-editorial text-3xl font-normal text-[#1E1B18] mt-1 mb-2">
              Receive the Curatorial Folio
            </h3>
            <p className="text-sm font-serif text-[#5C554D] leading-relaxed mb-6">
              A quiet, monthly dispatch delivering high-resolution botanical photography studies, seasonal floral recipes, conditioning formulas, and essays on floral architecture. No advertisements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider font-sans font-medium text-[#7A7369] mb-1.5">
                  Your Studio or Personal Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C847A]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="botanist@studio.com"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#DDD5C9] rounded focus:outline-none focus:border-[#631B2B] focus:ring-1 focus:ring-[#631B2B] text-[#1E1B18]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs uppercase tracking-wider font-medium text-white bg-[#1E1B18] hover:bg-[#631B2B] rounded transition-colors text-center"
              >
                Subscribe to The Gazette
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#E8E2D9] text-[11px] text-[#8C847A] font-sans text-center">
              Instant gift: includes our downloadable 18-page Autumn Floral Conditioning Guide.
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#EBF2EB] text-[#3F4D38] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-editorial text-3xl font-normal text-[#1E1B18]">
              Welcome to the Society
            </h3>
            <p className="text-sm font-serif text-[#5C554D] max-w-sm mx-auto leading-relaxed">
              We have dispatched a welcome edition to <strong className="text-[#1E1B18]">{email}</strong> alongside your companion botanical guidebook.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  // Simulate download
                  const blob = new Blob([
                    `PETALUM BOTANICAL REVIEW — COMPANION CONDITIONING FOLIO\n\nWelcome to our monthly curatorial journal.\nAlways remember: 45-degree angle stem cuts underwater preserve vascular tension.\nHappy arranging!\n— Petalum Editorial Board`
                  ], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Petalum-Autumn-Botanical-Guide.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="inline-flex items-center gap-2 py-2.5 px-4 text-xs uppercase tracking-wider font-medium bg-[#1E1B18] text-white hover:bg-[#631B2B] rounded transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Autumn Folio Card</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="block mx-auto text-xs text-[#7A7369] hover:text-[#1E1B18] pt-2"
            >
              Return to Journal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import { ReactNode } from 'react';

type PageType = 'lennox' | 'flexgen' | 'manifest' | 'duke' | 'colorado' | 'greenriver' | 'iwp' | 'driving-detection' | 'energy-forecasting' | 'adversarial-research' | 'mozambique-migration' | 'duke-blue-agent' | 'energy-analytics' | 'codeday' | 'onyx-ai';

interface WikipediaLayoutProps {
  children: ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function WikipediaLayout({ children }: WikipediaLayoutProps) {
  return (
    <div>

      <div className="wiki-content">
        <main className="wiki-article">
          {children}
        </main>
      </div>

      <footer className="wiki-footer">
        <div className="wiki-footer-content">
          <p>
            This page was last edited on 25 June 2025, at 00:00 (UTC).
          </p>
          <p>
            Text is available under the <a href="#">Creative Commons Attribution-ShareAlike License</a>;
            additional terms may apply. By using this site, you agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
            Wikipedia® is a registered trademark of the <a href="#">Wikimedia Foundation, Inc.</a>, a non-profit organization.
          </p>
        </div>
      </footer>
    </div>
  );
}
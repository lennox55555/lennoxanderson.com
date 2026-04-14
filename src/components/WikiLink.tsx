import { ReactNode } from 'react';

interface WikiLinkProps {
  children: ReactNode;
  onClick: () => void;
  isNew?: boolean;
}

export function WikiLink({ children, onClick, isNew = false }: WikiLinkProps) {
  return (
    <a 
      href="#" 
      className={isNew ? 'new' : ''} 
      onClick={(e) => { 
        e.preventDefault(); 
        onClick(); 
      }}
    >
      {children}
    </a>
  );
}
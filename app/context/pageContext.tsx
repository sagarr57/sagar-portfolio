'use client'

import { createContext, useContext } from 'react'

interface PageContextType {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const PageContext = createContext<PageContextType | undefined>(undefined)

export function usePageContext() {
  const context = useContext(PageContext)
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageProvider')
  }
  return context
}

interface PageProviderProps {
  children: React.ReactNode
}

export function PageProvider({ children }: PageProviderProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <PageContext.Provider value={{ handleScroll }}>
      {children}
    </PageContext.Provider>
  )
}

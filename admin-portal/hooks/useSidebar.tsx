"use client";

import React, { useState, createContext, useContext, useEffect } from 'react';

const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
  isDesktop: false,
});

export const useSidebar = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Adjust breakpoint as needed
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    if (!isDesktop) { 
      setIsSidebarOpen(!isSidebarOpen); 
    }
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, isDesktop }}>
      {children}
    </SidebarContext.Provider>
  );
};
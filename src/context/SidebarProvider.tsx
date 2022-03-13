/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";

const SidebarContext = React.createContext<SidebarContextVal>({});

const SidebarProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext };
export default SidebarProvider;

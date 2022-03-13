/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useState } from "react";

const SubmenuContext = React.createContext<SubmenuContextVal>({
  position: { x: 0, y: 0 },
  links: [],
});

const SubmenuProvider = ({ children }: ProviderProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [links, setLinks] = useState<SubmenuLink[]>([]);

  return (
    <SubmenuContext.Provider value={{ position, setPosition, links, setLinks }}>
      {children}
    </SubmenuContext.Provider>
  );
};

export { SubmenuContext };
export default SubmenuProvider;

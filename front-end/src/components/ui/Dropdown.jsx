export const DropdownAction = ({ children }) => {
  return <span>{children}</span>;
};

export const DropdownContent = ({
  children,
  start,
  center,
  end,
  top,
  bottom,
  text,
}) => {
  return (
    <div
      className={`absolute my-4 text-[15px] min-w-[9rem] w-[13rem] z-50 transition-all duration-200 ease-out opacity-0 scale-90 pointer-events-none group-focus:opacity-100 group-focus:scale-100 group-focus:pointer-events-auto 
      ${(!(center || end || top || bottom) || start) && "left-0"}
      ${center && "left-1/2 -translate-x-1/2"}
      ${end && "right-0"}
      ${top && "bottom-full"}
      `}
      style={{ textAlign: `${text}` }}
    >
      <ul className={`relative bg-[#1C222B] p-3 rounded-lg after:absolute after:size-3 after:content-[''] after:bg-inherit after:rotate-45 after:left-1/2 after:-translate-1/2
      ${!center && "after:hidden"}
      ${top ? "after:top-full":"after:top-0"}
        `}>{children}</ul>
    </div>
  );
};

export const DropdownItem = ({ children }) => {
  return (
    <li className="cursor-pointer hover:bg-white/5 py-2 px-4 rounded">
      {children}
    </li>
  );
};

export const DropdownDivider = () => {
  return <div className="h-[1px] bg-white/30 my-1" />;
};

export const Dropdown = ({ children }) => {
  return <button className="relative group">{children}</button>;
};

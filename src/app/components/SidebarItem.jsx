const SidebarItem = ({
  icon,
  label,
  active,
  handleClick = () => {},
  style = {},
}) => {
  return (
    <div
      className={active === label ? "div-active" : "div-inactive"}
      onClick={() => handleClick(label)}
    >
      <img
        src={icon}
        alt="HomeICon"
        className={
          active === label ? "aside-icons-active" : "aside-icons-inactive"
        }
      />
      <span
        className={` ${active === label ? `span-active` : `span-inactive`}`}
        style={style}
      >
        {label}
      </span>
    </div>
  );
};

export default SidebarItem;

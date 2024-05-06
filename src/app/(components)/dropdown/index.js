import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import PropTypes from "prop-types";
import classes from "react-style-classes";
import style from "./Dropdown.module.scss";
import Item from "./Item";
import Submenu from "./Submenu";
import Divider from "./Divider";

const Dropdown = forwardRef(
  (
    {
      title,
      children,
      isDisabled,
      position,
      wrapperClassName,
      buttonClassName,
      menuClassName,
      onClick,
      isActive,
      buttonVariant,
      openOnHover,
      ...props
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(false);

    const dropdownRef = useRef();

    // const handleClick = useCallback((e) => {
    //   if (
    //     dropdownRef.current !== null &&
    //     dropdownRef.current !== undefined &&
    //     !dropdownRef.current.contains(e.target)
    //   ) {
    //     setOpen(false);
    //     document.removeEventListener("mousedown", handleClick);
    //   }
    // }, []);

    const margin = 3; // Adjust this value based on your preference



    const handleClick = useCallback((e) => {
      if (
        dropdownRef.current !== null &&
        dropdownRef.current !== undefined &&
        !dropdownRef.current.contains(e.target)
      ) {
        // Check if the mouse is outside the menu and its items
        const menu = dropdownRef.current.querySelector(`.${style.menu}`);
        const isOutsideMenu =
        menu &&
        !menu.contains(e.target) &&
        !Array.from(menu.getElementsByTagName('*')).some(el => el.contains(e.target)) &&
        !(
          e.clientX >= menu.getBoundingClientRect().left - margin &&
          e.clientX <= menu.getBoundingClientRect().right + margin &&
          e.clientY >= menu.getBoundingClientRect().top - margin &&
          e.clientY <= menu.getBoundingClientRect().bottom + margin
        );
    
        if (isOutsideMenu) {
          setOpen(false);
          document.removeEventListener("mousedown", handleClick);
          document.removeEventListener("mouseover", handleClick);
        }
      }
    }, []);

    // useEffect(
    //   () => () => {
    //     document.removeEventListener("mousedown", handleClick);
    //   },
    //   []
    // );

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("mouseover", handleClick);
      }
    
      return () => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("mouseover", handleClick);
      };
    }, [isOpen, handleClick]);

    const handleButtonOnClick = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (isDisabled) {
        return;
      }

      onClick(e);

      setOpen(!isOpen);
      if (isOpen) {
        document.removeEventListener("mousedown", handleClick);
      } else {
        document.addEventListener("mousedown", handleClick);
      }
      
    };

    useImperativeHandle(ref, () => ({
      dropdownRef,
      toggle: handleButtonOnClick,
      isOpen,
    }));

    return (
      <div
        className={classes(style.dropdown, wrapperClassName)}
        ref={dropdownRef}
      >
        <label
          type="button"
          className={classes(
            style.button,
            (isOpen || isActive) && style.active,
            isDisabled && style.disabled,
            buttonVariant && style[`button-${buttonVariant}`],
            buttonClassName,
          )}
          disabled={isDisabled}
          tabIndex={0}
          onClick={!openOnHover ? handleButtonOnClick : undefined}
          onMouseOver={openOnHover ? handleButtonOnClick : undefined}
          {...props}
          
        >
          {'▼'}
        </label>
          
        {isOpen && (
          <div
            className={classes(
              style.menu,
              style[`menu-${position}`],
              menuClassName
            )}
          >
            <ul>{children}</ul>
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

Dropdown.propTypes = {
  title: PropTypes.any,
  buttonVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "special",
    "special-success",
    "dashed",
  ]),
  isActive: PropTypes.bool,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  position: PropTypes.oneOf(["left", "right", "top-right", "top-left"]),
  wrapperClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  menuClassName: PropTypes.string,
  onClick: PropTypes.func,
  openOnHover: PropTypes.bool,
};

Dropdown.defaultProps = {
  children: null,
  isDisabled: false,
  title: null,
  buttonVariant: "secondary",
  isActive: false,
  position: "left",
  wrapperClassName: null,
  buttonClassName: null,
  menuClassName: null,
  onClick: () => null,
  openOnHover: false,
};

Dropdown.Item = Item;
Dropdown.Submenu = Submenu;
Dropdown.Divider = Divider;




export default Dropdown;

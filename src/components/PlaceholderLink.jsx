import { useNavigate } from "react-router-dom";

/**
 * Stands in for every <a> on the original page. Links render as buttons that
 * keep the original classes and styling. Only those given a `to` route go
 * anywhere; the rest are inert placeholders for pages the clone doesn't have.
 */
export default function PlaceholderLink({ to, className = "", onClick, children, ...rest }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    onClick?.(e);
    if (to) navigate(to);
  };

  return (
    <button type="button" className={`placeholder-link ${className}`.trim()} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
}

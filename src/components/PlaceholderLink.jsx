/**
 * Stands in for every <a> on the original page. The clone has no other pages,
 * so links render as inert buttons that keep the original classes and styling.
 */
export default function PlaceholderLink({ className = "", children, ...rest }) {
  return (
    <button type="button" className={`placeholder-link ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}

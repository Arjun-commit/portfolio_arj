export function Badge({ className = "", children }) {
    return (
      <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-gray-100 ${className}`}>
        {children}
      </span>
    );
  }
  
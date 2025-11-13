export function Card({ className = "", children }) {
    return <div className={`rounded-xl border p-4 ${className}`}>{children}</div>;
  }
  export function CardHeader({ className = "", children }) {
    return <div className={`mb-2 ${className}`}>{children}</div>;
  }
  export function CardTitle({ className = "", children }) {
    return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
  }
  export function CardContent({ className = "", children }) {
    return <div className={className}>{children}</div>;
  }
  export function CardDescription({ className = "", children }) {
    return <p className={`text-gray-500 ${className}`}>{children}</p>;
  }
  
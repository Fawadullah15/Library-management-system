import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/catalog", label: "Catalog" },
    { path: "/dashboard", label: "Dashboard" },
    { path: "/admin", label: "Administration" },
    { path: "/reports", label: "Reports" },
  ];

  return (
    <nav className="border-b border-border/40 bg-ivory">
      <div className="max-w-7xl mx-auto px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-midnight-blue rounded-sm flex items-center justify-center">
              <span className="text-ivory font-serif italic" style={{ fontSize: '1.25rem' }}>L</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif" style={{ fontSize: '0.95rem', letterSpacing: '0.02em', color: 'var(--midnight-blue)' }}>
                University of Peshawar
              </span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--soft-grey)', textTransform: 'uppercase', fontWeight: 400 }}>
                Department of Computer Science
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative"
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  color: location.pathname === link.path ? 'var(--midnight-blue)' : 'var(--soft-grey)',
                  transition: 'color 0.3s ease',
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div
                    className="absolute -bottom-6 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--muted-gold)' }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

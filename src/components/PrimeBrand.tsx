import { Link } from "@tanstack/react-router";
import logo from "@/assets/prime-sites-logo.png.asset.json";

export function PrimeBrand({ to = "/", compact = false }: { to?: "/" | "/dashboard"; compact?: boolean }) {
  return <Link to={to} className="prime-brand" aria-label="Prime Sites">
    <img src={logo.url} alt="" className={compact ? "prime-brand-logo prime-brand-logo-compact" : "prime-brand-logo"} />
    <span className="prime-brand-name">Prime <strong>Sites</strong></span>
  </Link>;
}

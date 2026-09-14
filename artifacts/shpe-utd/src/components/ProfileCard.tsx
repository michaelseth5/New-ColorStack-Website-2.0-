import { Linkedin, Mail } from "lucide-react";

export interface ProfileCardCompany {
  name: string;
  logo: string;
  url?: string;
}

export interface ProfileCardProps {
  name: string;
  role: string;
  photo: string;
  email: string;
  linkedinUrl?: string;
  company?: ProfileCardCompany;
  /** Banner background color. Defaults to a clean accent blue. */
  bannerColor?: string;
  className?: string;
}

/**
 * Responsive profile card: blue banner + centered circular photo,
 * name/role, a row of clickable logo badges, and a mailto email chip.
 *
 * Sizing:
 *  - Mobile/tablet (<1024px): fills its container width (up to 400px)
 *  - Desktop (≥1024px): fixed at 280px
 */
export function ProfileCard({
  name,
  role,
  photo,
  email,
  linkedinUrl,
  company,
  bannerColor = "#2563EB",
  className = "",
}: ProfileCardProps) {
  return (
    <div
      className={`w-full max-w-[400px] lg:w-[280px] lg:max-w-[280px] mx-auto rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden ${className}`}
    >
      {/* Banner + photo */}
      <div className="relative h-24" style={{ backgroundColor: bannerColor }}>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
          <img
            src={photo}
            alt={name}
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-sm"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-5 pb-6 pt-14 text-center">
        <h3 className="text-lg font-bold leading-snug text-gray-900">{name}</h3>
        <p className="mt-1 text-sm font-semibold text-orange-500">{role}</p>

        {(linkedinUrl || company) && (
          <div className="mt-4 flex items-center justify-center gap-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-sm transition-transform duration-150 hover:scale-105"
              >
                <Linkedin size={22} strokeWidth={2} />
              </a>
            )}
            {company && (
              <a
                href={company.url ?? "#"}
                target={company.url ? "_blank" : undefined}
                rel={company.url ? "noopener noreferrer" : undefined}
                aria-label={company.name}
                title={company.name}
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform duration-150 hover:scale-105"
              >
                <img src={company.logo} alt={company.name} className="h-7 w-7 object-contain" />
              </a>
            )}
          </div>
        )}

        <a
          href={`mailto:${email}`}
          className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-xs font-medium text-gray-700 transition-colors duration-150 hover:border-gray-300 hover:bg-gray-100 sm:text-sm"
          aria-label={`Email ${name}`}
        >
          <Mail size={15} strokeWidth={2} className="shrink-0 text-gray-500 group-hover:text-gray-700" />
          <span className="min-w-0 truncate">{email}</span>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;

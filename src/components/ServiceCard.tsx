import CTAButton from "./CTAButton";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  message: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  features,
  message,
}: ServiceCardProps) {
  return (
    <div className="card-clean group flex flex-col h-full bg-white relative">
      {/* Icon with subtle gold accent background */}
      <div className="w-12 h-12 rounded-lg bg-[var(--color-off-white)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-6 text-[var(--color-gold)] transition-colors duration-200 group-hover:border-[var(--color-soft-gold)] group-hover:bg-[var(--color-gold-tint)]">
        {icon}
      </div>

      {/* Service Title */}
      <h3
        className="text-2xl font-normal text-[var(--color-primary-green)] mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      {/* Description in Manrope */}
      <p className="text-[var(--color-text-medium)] text-sm leading-relaxed mb-6 font-normal flex-grow">
        {description}
      </p>

      {/* Feature Bullet Points */}
      <ul className="space-y-2.5 mb-8 border-t border-[var(--color-border-subtle)] pt-5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--color-text-medium)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Direct WhatsApp Consultation Action */}
      <div className="mt-auto pt-2">
        <CTAButton
          message={message}
          className="w-full justify-center"
          size="sm"
          variant="secondary"
        >
          Consult on WhatsApp ↗
        </CTAButton>
      </div>
    </div>
  );
}

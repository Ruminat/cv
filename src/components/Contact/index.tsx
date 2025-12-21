import type { ComponentChildren } from "preact";
import "./contact.css";

export function Contact({ icon, label, href }: { icon: ComponentChildren; label: ComponentChildren; href: string }) {
  return (
    <a className='contact' href={href} target='_blank'>
      {icon}
      {label}
    </a>
  );
}

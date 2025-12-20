import type { ReactNode } from "preact/compat";

export function header(content: ReactNode) {
  return <h2>{content}</h2>;
}

export function text(content: ReactNode) {
  return <span>{content}</span>;
}

export function sectionHeader(title: string) {
  return <h3>{title}</h3>;
}

export function pair(partA: ReactNode, partB: ReactNode) {
  return (
    <div className='pair'>
      <div className='start'>{partA}</div>
      <div className='end'>{partB}</div>
    </div>
  );
}

export function list(...items: ReactNode[]) {
  return (
    <ul className='list'>
      {items.map((item, i) => (
        <li className='item' key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function contact(icon: ReactNode, label: ReactNode, href: string) {
  return (
    <a className='contact' href={href} target='_blank'>
      {icon}
      {label}
    </a>
  );
}

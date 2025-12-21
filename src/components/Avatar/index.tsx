import "./avatar.css";

export function Avatar({ size }: { size: number }) {
  return (
    <div className='avatar'>
      <img width={`${size}px`} height={`${size}px`} src='/public/me.jpg' />
    </div>
  );
}

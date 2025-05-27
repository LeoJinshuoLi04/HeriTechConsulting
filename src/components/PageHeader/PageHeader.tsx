import "./PageHeader.css";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="pageHeader">
      <div className="underline1">{title}</div>
      <div className="underline2"></div>
    </div>
  );
}

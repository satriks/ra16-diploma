type Props = { text: string | null };

export default function ErrorInfo({ text }: Props) {
  return (
    <div className="error-message">
      <h2>{text}</h2>
    </div>
  );
}

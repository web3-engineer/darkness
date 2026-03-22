type Props = {
  title: string;
  description: string;
};

export default function GlassCard({ title, description }: Props) {
  return (
    <div className="glass rounded-3xl p-6 w-full max-w-sm shadow-xl hover:scale-[1.02]">
      <h2 className="text-xl font-semibold mb-2 text-white">
        {title}
      </h2>
      <p className="text-white/70 text-sm">
        {description}
      </p>
    </div>
  );
}
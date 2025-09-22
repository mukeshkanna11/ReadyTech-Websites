export default function TestimonialCard({ name, feedback, avatar }) {
  return (
    <div className="p-6 text-gray-800 transition bg-white shadow-md rounded-xl hover:shadow-lg">
      <p className="mb-4">"{feedback}"</p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
}

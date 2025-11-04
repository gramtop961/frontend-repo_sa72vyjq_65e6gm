import React from 'react';

const stories = [
  {
    title: 'The Fisher and the Tide',
    excerpt:
      'At dawn, the harbor breathes. Between nets and gulls, we learn how local wisdom keeps both people and fish thriving.',
    img:
      'https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=1600&auto=format&fit=crop',
    tag: 'Community',
  },
  {
    title: 'Rainforest to Reef',
    excerpt:
      'A winding river threads the canopy to the coral — a reminder that every drop upstream shapes life offshore.',
    img:
      'https://images.unsplash.com/photo-1486530555807-11f29d0dff36?q=80&w=1600&auto=format&fit=crop',
    tag: 'Ecosystems',
  },
  {
    title: 'Listening to Waves',
    excerpt:
      'The ocean speaks in cycles. Learning to hear it can change how we move through the world.',
    img:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    tag: 'Perspective',
  },
];

export default function Stories() {
  return (
    <section id="stories" className="w-full bg-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Stories from the shoreline</h2>
          <p className="mt-3 text-slate-300">
            Personal essays and field notes that bring the textures of nature and community to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-medium text-white shadow">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.excerpt}</p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-sky-300 underline-offset-2 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

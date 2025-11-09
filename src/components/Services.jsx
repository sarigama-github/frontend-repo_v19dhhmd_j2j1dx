import React from 'react';
import { Code2, Smartphone, Cloud, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Web Apps',
    desc:
      'Robust, scalable web applications using modern stacks tailored to your business goals.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    desc:
      'High-performance iOS and Android apps with seamless UX and native capabilities.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc:
      'Secure, cost-efficient cloud architectures, CI/CD pipelines, and observability.',
  },
  {
    icon: Rocket,
    title: 'Product Acceleration',
    desc:
      'From MVP to scale—rapid prototyping, validation, and performance optimization.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#030712] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          What we <span className="text-[#1D97C1]">do</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Full-service software development tailored to your market, team, and roadmap.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-lg bg-[#1D97C1]/15 p-3 text-[#1D97C1]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

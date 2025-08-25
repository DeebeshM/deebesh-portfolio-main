const EducationSection = () => {
  const educationData = [
    {
      year: "2021",
      title: "High School",
      institution: "Meensurruty Boys Hr Sec School",
      type: "graduation"
    },
    {
      year: "2021",
      title: "University",
      institution: "Dhanalakshmi College of Engineering",
      type: "university"
    },
    {
      year: "2025",
      title: "Internship",
      institution: "Basent Technologies - Full Stack Development Python",
      type: "experience"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Education <span className="text-neon">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 timeline-dot z-10"></div>

                {/* Year Badge */}
                <div className={`${
                  index % 2 === 0 ? "mr-8 text-right" : "ml-8 text-left"
                } flex-shrink-0`}>
                  <div className="inline-block bg-primary/20 border border-primary rounded-lg px-4 py-2 neon-glow">
                    <span className="text-primary font-bold text-xl">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "mr-16" : "ml-16"} max-w-md`}>
                  <div className="card-neon group">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
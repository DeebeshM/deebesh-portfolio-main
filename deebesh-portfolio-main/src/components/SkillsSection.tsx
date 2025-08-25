const SkillsSection = () => {
  const skills = [
    {
      title: "fullstackdevelopment",
      description: "Developed and maintained dynamic web applications using Python, and Hibernate, ensuring high performance and scalability."
    },
    {
      title: "web developer",
      description: "Developed and maintained dynamic web applications using Python, ensuring high performance and scalability."
    },
    {
      title: "GIT/GITHUB",
      description: "version control"
    },
    {
      title: "mysql",
      description: "sql database"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-darker-surface/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-neon">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-neon group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/30 rounded-full group-hover:border-primary transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

const AboutSection = () => {
  // for backend development

  // const skills = [
  //   "Python",
  //   "C",
  //   "C++",
  //   "MySQL",
  //   "Java",
  //   "JavaScript", 
  //   "HTML",
  //   "Machine Learning",
  //   "Blockchain Technology",
  //   "CyberSecurity",
  //   "RESTful APIs",
  // ];

  //for frontend development
  const skills = [
    "JavaScript",
    "Next.js",
    "Node.js",
    "React",
    "Python",
    "C",
    "C++",
    "MySQL",
    "Java", 
    "HTML",
    "Machine Learning",
    "Blockchain Technology",
    "CyberSecurity",
    "RESTful APIs",
  ];

  return (
    <section id="about" className="bg-background section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square w-full max-w-md mx-auto md:mx-0 bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/GLCRealm/My-Portfolio/main/public/photos/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>             
                
              <h3 className="text-2xl font-semibold mb-4">Anshdeep Rawat</h3>
              
              {/* this is for backend developer */}
              {/* <p className="text-muted-foreground mb-6">
                I'm a backend developer and AI enthusiast with hands-on experience 
                building scalable systems, secure APIs, and NLP-powered tools. I enjoy 
                working at the intersection of machine learning and system design to solve real-world problems.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, I'm learning about cybersecurity, exploring new AI models, 
                or refining personal projects that challenge my skills.
              </p> */}
              
              {/* this is for frontend developer */}
              <p className="text-muted-foreground mb-6">
                I'm a frontend developer and AI enthusiast with hands-on experience crafting dynamic, responsive, and accessible user interfaces.
              </p>
              <p className="text-muted-foreground mb-6">
                When I'm not coding, I'm diving into UI/UX trends, experimenting with new JavaScript frameworks, or pushing the limits of web animation and frontend performance through side projects.
              </p>
              
              <div>
                <h4 className="text-lg font-medium mb-3">My Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap,
  Heart,
  Target,
  Layers,
  Globe
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

interface TechStack {
  name: string;
  image: string;
  category: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code />,
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'R', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frontend Development',
    icon: <Smartphone />,
    skills: ['React', 'Next.js', 'Redux', 'HTML/CSS', 'Tailwind CSS', 'TypeScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Backend Development',
    icon: <Server />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Databases',
    icon: <Database />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Machine Learning & AI',
    icon: <Brain />,
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'Data Science'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Big Data & Analytics',
    icon: <BarChart3 />,
    skills: ['Apache Spark', 'Apache Hadoop', 'Tableau', 'Power BI', 'MS Excel'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud />,
    skills: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'CI/CD'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Tools & Others',
    icon: <Zap />,
    skills: ['Postman', 'Git', 'VS Code', 'Jupyter Notebook'],
    color: 'from-pink-500 to-rose-500'
  }
];

const techStack: TechStack[] = [
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Language" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language" },
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
  { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Language" },
  { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "Backend" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools" },
  { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
  { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Cloud" }
];

const features = [
  {
    icon: <Code size={24} />,
    title: "Full-Stack Development",
    description: "Building end-to-end applications with modern technologies and best practices",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Brain size={24} />,
    title: "Machine Learning",
    description: "Developing intelligent systems with 92.4% accuracy in predictive models",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Data Analysis",
    description: "Processing 550K+ records to extract actionable business insights",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: <Heart size={24} />,
    title: "Problem Solving",
    description: "5⭐ CodeChef coder with top global rankings in competitive programming",
    color: "from-red-500 to-pink-500"
  }
];

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -90 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl`}
        >
          {category.icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
          {category.title}
        </h3>
      </div>
      
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
            whileHover={{ x: 5, scale: 1.02 }}
            className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:shadow-md hover:from-indigo-50 hover:to-pink-50 dark:hover:from-indigo-900/20 dark:hover:to-pink-900/20 transition-all duration-200 cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, machine learning, data science,
            and modern cloud technologies for building scalable solutions.
          </p>
        </motion.div>

        {/* About Software Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Software Development Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                As a dedicated software engineer and data scientist, I specialize in creating scalable 
                full-stack applications and intelligent data-driven solutions. My expertise spans from 
                frontend React applications to backend APIs, with a strong foundation in machine learning 
                and data analysis.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With experience processing over 550,000+ records and achieving 92.4% accuracy in machine 
                learning models, I bridge the gap between software engineering and data science to deliver 
                comprehensive solutions that drive business value.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack MERN Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Machine Learning Engineer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Data Science Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">5⭐ Competitive Programmer</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-white mb-4`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Technology Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Technology Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotateY: 180,
                  transition: { duration: 0.3 }
                }}
                className="group relative w-20 h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                </div>

                {/* Category badge */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
            >
              50+
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Technologies</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2"
            >
              5⭐
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">CodeChef</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2"
            >
              92.4%
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">ML Accuracy</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2"
            >
              4+
            </motion.div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Years Coding</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
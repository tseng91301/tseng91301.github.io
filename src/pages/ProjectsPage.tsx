
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  githubLink?: string;
  image?: string;
  tags: string[];
}

const ProjectsPage = () => {
  // Placeholder projects data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 0,
      title: '系上原創空間預約管理系統',
      description: '使用 php, mySQL 技術製作原創空間的預約系統，能夠依據使用者的權限層級來客製化能夠預約的機台或設備，同時管理員也能夠更加方便的管理每個人的預約紀錄，省去紙本或普通表單在資料整理上的麻煩',
      link: 'https://ntu-bime-linebot.onrender.com/reservation/maker_space/index.php',
      githubLink: 'https://github.com/tseng91301/BIME-Department-Association-site/tree/master/local_server/reservation/maker_space',
      image: 'https://raw.githubusercontent.com/tseng91301/tseng91301.github.io/refs/heads/v3-react/src/assets/reservation_system_page.png',
      tags: ['PHP', 'mySQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      id: 1,
      title: '系學會網站',
      description: '一個用來傳達系學會訊息和陳列系學會資源的網站，裡面就包含了原創空間預約系統，另外還有系產下載等實用工具',
      link: 'https://ntu-bime-linebot.onrender.com/index.html',
      githubLink: 'https://github.com/tseng91301/BIME-Department-Association-site',
      image: 'https://images.unsplash.com/photo-1649442279006-8bccb4cc63e1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['PHP', 'mySQL', 'HTML', 'CSS', 'JavaScript', 'python', 'Flask']
    },
    {
      id: 2,
      title: 'Robot Core by Cellphone',
      description: '將手機變成機器人處理器(大腦)的專案',
      link: 'https://github.com/tseng91301/robot-core-adv',
      githubLink: 'https://github.com/tseng91301/robot-core-adv',
      image: 'https://raw.githubusercontent.com/tseng91301/tseng91301.github.io/refs/heads/v3-react/src/assets/phone-robot.png',
      tags: ['react-native', 'Tensorflow', 'Yolov11', 'Kotlin', 'Android']
    },
  ];

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">我的專案</h1>
          <p className="text-gray-600 text-center mb-8">以下是我開發的一些項目和作品</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
                  {project.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{project.title}</span>
                    </CardTitle>
                    <CardDescription className="truncate">
                      {project.description.length > 100
                        ? `${project.description.slice(0, 100)}...`
                        : project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center"
                      >
                        <span>查看項目</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:underline inline-flex items-center"
                      >
                        <span>查看原始碼</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-8 mb-8">更多作品可以到我的<a href="https://github.com/tseng91301/" target="_blank" className="text-primary hover:underline">GitHub</a>查看</p>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProjectsPage;

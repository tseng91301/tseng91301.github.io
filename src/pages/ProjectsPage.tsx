
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
      id: 1,
      title: '個人作品集網站',
      description: '使用React和TypeScript打造的個人網站，展示我的作品和經歷。採用Tailwind CSS進行樣式設計和響應式佈局。',
      link: 'https://example.com/portfolio',
      githubLink: 'https://github.com/username/portfolio',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: '電子商務平台',
      description: '基於React開發的全功能電子商務網站，包括產品瀏覽、購物車功能、結帳流程和用戶帳戶管理。',
      link: 'https://example.com/ecommerce',
      githubLink: 'https://github.com/username/ecommerce',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux']
    },
    {
      id: 3,
      title: '任務管理應用',
      description: '一款簡潔而功能強大的任務管理工具，支持任務創建、編輯、分類和優先級設置。具有直觀的用戶界面和拖放功能。',
      link: 'https://example.com/taskapp',
      githubLink: 'https://github.com/username/taskapp',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      tags: ['React', 'Firebase', 'MUI']
    },
    {
      id: 4,
      title: '天氣預報應用',
      description: '使用現代前端技術和天氣API創建的實用天氣預報應用，提供當前天氣狀況和未來7天預報。',
      link: 'https://example.com/weather',
      githubLink: 'https://github.com/username/weather',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      tags: ['JavaScript', 'API Integration', 'CSS3']
    },
    {
      id: 5,
      title: '社交媒體儀表板',
      description: '為社交媒體管理者設計的分析儀表板，整合多個平台的數據，提供統計圖表和見解報告。',
      link: 'https://example.com/dashboard',
      githubLink: 'https://github.com/username/dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['React', 'Chart.js', 'REST API']
    }
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
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProjectsPage;

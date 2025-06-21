
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import profile from '@/assets/profile.jpg';
import { title } from 'process';
import { School } from 'lucide-react';
import { Description } from '@radix-ui/react-dialog';
import { textStyles } from '@/lib/styles';

const HomePage = () => {
  // Placeholder data - replace with your actual information
  const personalInfo = {
    name: 'Kai',
    title: '軟韌體工程師 / 全端開發者',
    bio: '一個喜歡寫程式和騎公路車的大學生。平常會用做一些網站開發，也會玩 Arduino, ESP32 等各種開發板，下面會有我的更多詳細資訊⬇',
    education: [
      {title: 'Elementary School', school: '南投縣立埔里國民小學', period: '2014 - 2019', link: "https://ples.ntct.edu.tw/"},
      {title: 'Junior High', school: '南投縣立埔里國民中學', period: '2019 - 2021', link: "https://pljh.ntct.edu.tw/"},
      {title: 'Senior High', school: '台中市立台中第一高級中等學校', period: '2021 - 2023', link: "https://tcfsh.tc.edu.tw/"},
      {title: 'University', school: '國立台灣大學', period: '2023 - Now', link: "https://www.ntu.edu.tw/"}
    ],
    experiences: [
      { title: '電腦組裝測試工程師', company: '東霖資訊有限公司', period: '2023 - 2023 (暑假)', description: '電腦顯示卡、處理器、顯示卡的更換或故障檢查，或是新電腦系統、基礎軟體的安裝。到學校電腦教室等場域進行電腦或智慧教室裝置的裝配。家用網路的配置，以及對網路連線狀況的偵錯。' },
      { title: '樂高機器人程式教學', company: '光點創意 - 樂高機器人創客中心', period: '2024 - 2025', description: '與其說是個教學程式，展現程式實力的好老師，大部分時間我更像一個保母(⊙_⊙)？' },
    ],
    community: [
      {title: '機器人社', period: "國中時期", description: '初次體驗自己用木板/冰棒棍等原始材料手做機器人，以及第一次樂高機器人的方塊程式！'},
      {title: '電腦資訊研究社', period: "高中時期", description: '透過社團課程以及當上幹部後與學長的互動，學到了非常多程式設計的知識，為現在的我打下基礎。'},
      {title: '單車社', period: "大學時期", description: '在充滿理工和程式設計味道的大學生活中選擇了運動型社團，讓我能夠鍛鍊身體，並且結交到更多朋友。'}
    ],
    interests: ['網頁設計', '人工智能', '旅行', '公路車', '微控制器']
  };

  return (
    <Layout>
      <div className="relative h-80 md:h-80 overflow-hidden">
        {/* Banner background */}
        <div className="absolute inset-0 h-64 md:h-64 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        
        {/* Profile picture */}
        <div className="container mx-auto px-4 h-64 md:h-64 flex flex-col justify-end items-center relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white absolute -bottom-16 md:-bottom-20 overflow-hidden shadow-lg"
          >
            <img 
              src={profile}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Profile bottom block */}
        <div className='h-16 md:h-20 bg-gray-800' style={{ opacity: 0 }} />
      </div>
      <div className="container mx-auto px-4 pt-20 md:pt-24 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Name and title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{personalInfo.name}</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-1">{personalInfo.title}</p>
          </div>
          
          {/* Short Bio */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">個人簡介</h2>
            <p className="text-gray-600 leading-relaxed">{personalInfo.bio}</p>
          </div>

          {/* Current Project */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">最近做的事情</h2>
            <p className='text-gray-600 leading-relaxed' style={textStyles.title}>React Native Android 機器人大腦</p>
            <p className='text-gray-600 leading-relaxed mt-2' style={{fontSize: '15px'}}>&emsp;&emsp;手機，是每個人手上都有的一台超級電腦：機器人，卻是我們遙不可及的夢想。我想要藉由這個專案，讓我們不須擔心那昂貴的機器人主板，放上手機，一切盡在掌控之中！</p>
            <p className='text-gray-600 leading-relaxed mt-2' style={{fontSize: '15px'}}>詳情請見我的 <a href='https://github.com/tseng91301/robot-core-adv' style={textStyles.link}>Github 專案</a></p>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">就學經歷</h2>
            <div className="space-y-6">
              {personalInfo.education.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-4 py-1"
                >
                  <h3 className="text-lg font-medium text-gray-800">{exp.title}</h3>
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <span className="text-sm text-blue-600"><a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.school}</a></span>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">待過的社團</h2>
            <div className="space-y-6">
              {personalInfo.community.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-4 py-1"
                >
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <h3 className="text-lg font-medium text-gray-800">{exp.title}</h3>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-6">打過的工</h2>
            <div className="space-y-6">
              {personalInfo.experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-2 border-blue-500 pl-4 py-1"
                >
                  <h3 className="text-lg font-medium text-gray-800">{exp.title}</h3>
                  <div className="flex justify-between items-center mt-1 mb-2">
                    <span className="text-sm text-blue-600">{exp.company}</span>
                    <span className="text-xs text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Interests */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4">興趣</h2>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center space-x-4">
            <Link to="/projects">
              <Button variant="default" size="lg" className="px-6">
                查看我的專案
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outline" size="lg" className="px-6">
                體驗小工具
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default HomePage;

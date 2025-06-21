
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarCheck, ExternalLink, Facebook, FlameKindling, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactCard {
  id: number;
  title: string;
  description?: string;
  link?: string;
  link_text?: string;
  icon?: JSX.Element;
  iconColor?: string;
}

const ContactPage = () => {
  const contactCards: ContactCard[] = [
    {
      id: 0,
      title: 'Email',
      description: '我的 Email 帳號: tseng91301@gmail.com',
      link: 'mailto: tseng91301@gmail.com',
      link_text: '點擊此處發送郵件',
      icon: <Mail />
    },
    {
      id: 1,
      title: 'Facebook',
      description: "Facebook 名稱: 曾敬凱",
      link: 'https://www.facebook.com/ceng.jing.kai.94657',
      link_text: '點擊此處打開連結',
      icon: <Facebook />
    },
    {
      id: 2,
      title: 'Instagram',
      description: "Instagram 帳號: t.c.k_319",
      link: 'https://www.instagram.com/t.c.k_319/',
      link_text: '點擊此處打開連結',
      icon: <Instagram />
    },
    {
      id: 3,
      title: 'Discord',
      description: "Discord 名稱: ilikehelloworld",
      link: 'https://discordapp.com/users/ilikehelloworld',
      link_text: '點擊此處打開連結',
      icon: <FlameKindling />
    },
    {
      id: 4,
      title: '需要約個時間碰面?',
      description: "點擊下面連結，填寫預約表單即可",
      link: '/contact/reservation',
      link_text: '點擊此處打開連結',
      icon: <CalendarCheck />
    }
  ]

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">聯絡資訊</h1>
          <p className="text-gray-600 text-center mb-8">以下是能夠與我建立聯繫的方法</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactCards.map((contactCard, index) => (
              <motion.div
                key={contactCard.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{contactCard.title}</span>{contactCard.icon && contactCard.icon}
                    </CardTitle>
                    {
                      contactCard.description && (
                        <CardDescription className="truncate">
                          {contactCard.description.length > 100
                            ? `${contactCard.description.slice(0, 100)}...`
                            : contactCard.description}
                        </CardDescription>
                      )
                    }
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    {contactCard.link && (
                      <a 
                        href={contactCard.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center"
                      >
                        <span>{contactCard.link_text && contactCard.link_text}</span>
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

export default ContactPage;

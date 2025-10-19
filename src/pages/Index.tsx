import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold text-primary">Перспектива</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О колледже</button>
              <button onClick={() => scrollToSection('applicants')} className="hover:text-primary transition-colors">Абитуриентам</button>
              <button onClick={() => scrollToSection('students')} className="hover:text-primary transition-colors">Студентам</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Учебный процесс</button>
              <button onClick={() => scrollToSection('news')} className="hover:text-primary transition-colors">Новости</button>
              <button onClick={() => scrollToSection('life')} className="hover:text-primary transition-colors">Студенческая жизнь</button>
              <button onClick={() => scrollToSection('career')} className="hover:text-primary transition-colors">Карьера</button>
            </div>
            <Button onClick={() => scrollToSection('applicants')} className="hidden md:inline-flex">Подать заявку</Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <img 
          src="https://cdn.poehali.dev/projects/c9226099-cc04-4ee2-af0b-cab2d0dc5018/files/0c86eb00-4adf-4fc5-ad3e-47fd639c26a8.jpg" 
          alt="Студенты" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Образование для успешной карьеры
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Коммерческий колледж «Перспектива» — ваш путь к профессиональному успеху
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('applicants')} className="text-lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Подать заявку на обучение
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/60 backdrop-blur border-primary/20 hover:border-primary transition-all">
              <CardHeader>
                <Icon name="Briefcase" size={32} className="text-primary mb-2" />
                <CardTitle>Гарантированное трудоустройство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Партнёрство с ведущими компаниями региона</p>
              </CardContent>
            </Card>
            <Card className="bg-card/60 backdrop-blur border-primary/20 hover:border-primary transition-all">
              <CardHeader>
                <Icon name="DollarSign" size={32} className="text-primary mb-2" />
                <CardTitle>Доступная цена</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Гибкие программы оплаты и стипендии</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Популярные специальности</h2>
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            {[
              { title: 'Программирование', icon: 'Code', desc: 'Full-stack разработка и DevOps', students: 120 },
              { title: 'Дизайн', icon: 'Palette', desc: 'UI/UX и графический дизайн', students: 85 },
              { title: 'Бизнес-администрирование', icon: 'TrendingUp', desc: 'Менеджмент и маркетинг', students: 95 }
            ].map((spec, i) => (
              <Card key={i} className="group hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer">
                <CardHeader>
                  <Icon name={spec.icon as any} size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-2xl">{spec.title}</CardTitle>
                  <CardDescription>{spec.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-4">
                    <Icon name="Users" size={14} className="mr-1" />
                    {spec.students} студентов
                  </Badge>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" onClick={() => scrollToSection('applicants')}>
                    Узнать подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Последние новости</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { date: '15 октября 2025', title: 'День открытых дверей', category: 'Мероприятие' },
              { date: '10 октября 2025', title: 'Новая программа стажировок', category: 'Карьера' },
              { date: '5 октября 2025', title: 'Студенты на олимпиаде', category: 'Достижения' },
              { date: '1 октября 2025', title: 'Обновление библиотеки', category: 'Учёба' }
            ].map((news, i) => (
              <Card key={i} className="hover:border-primary transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{news.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8">Быстрые ссылки</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Button size="lg" variant="outline" className="h-20 text-lg" onClick={() => scrollToSection('students')}>
              <Icon name="BookOpen" size={24} className="mr-3" />
              Для студентов
            </Button>
            <Button size="lg" variant="outline" className="h-20 text-lg" onClick={() => scrollToSection('applicants')}>
              <Icon name="UserPlus" size={24} className="mr-3" />
              Для абитуриентов
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">О колледже</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-heading font-semibold">Наша миссия</h3>
              <p className="text-lg text-muted-foreground">
                Колледж «Перспектива» создан для подготовки высококвалифицированных специалистов, 
                готовых к вызовам современного рынка труда. Мы сочетаем академическое образование 
                с практическими навыками.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">1500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Трудоустройство</div>
                </div>
              </div>
            </div>
            <img 
              src="https://cdn.poehali.dev/projects/c9226099-cc04-4ee2-af0b-cab2d0dc5018/files/e37ed5f7-9c63-4252-bf95-497d3eb9ac8f.jpg" 
              alt="Колледж" 
              className="rounded-lg shadow-2xl object-cover h-full"
            />
          </div>

          <h3 className="text-3xl font-heading font-semibold mb-8">Руководство и преподаватели</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { name: 'Иванова Елена', role: 'Директор', exp: '20 лет опыта' },
              { name: 'Петров Сергей', role: 'Зам. директора', exp: '15 лет опыта' },
              { name: 'Смирнова Ольга', role: 'Зав. кафедрой IT', exp: '12 лет опыта' },
              { name: 'Козлов Дмитрий', role: 'Зав. кафедрой бизнеса', exp: '18 лет опыта' }
            ].map((person, i) => (
              <Card key={i} className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <CardDescription>{person.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{person.exp}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-3xl font-heading font-semibold mb-8">Виртуальный тур</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-card rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Image" size={48} className="text-primary" />
                </div>
              </div>
            ))}
          </div>

          <Card className="bg-card/60">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="MapPin" size={24} />
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@perspektiva-college.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Образования, д. 15</div>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Icon name="Map" size={64} className="text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="applicants" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Абитуриентам</h2>

          <Tabs defaultValue="specialties" className="mb-20">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="specialties">Специальности</TabsTrigger>
              <TabsTrigger value="admission">Приём</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="specialties">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    title: 'Программирование и разработка ПО', 
                    desc: 'Изучение современных языков программирования, веб-разработки, мобильных приложений',
                    skills: ['Python', 'JavaScript', 'React', 'SQL'],
                    career: 'Full-stack разработчик, Backend/Frontend специалист'
                  },
                  { 
                    title: 'Графический и UI/UX дизайн', 
                    desc: 'Создание визуальных концепций, работа с Figma, Adobe Creative Suite',
                    skills: ['Figma', 'Photoshop', 'Illustrator', 'Веб-дизайн'],
                    career: 'UI/UX дизайнер, Графический дизайнер'
                  },
                  { 
                    title: 'Бизнес-администрирование', 
                    desc: 'Менеджмент, маркетинг, финансовый анализ, управление проектами',
                    skills: ['Управление', 'Маркетинг', 'Аналитика', 'Excel'],
                    career: 'Менеджер проектов, Маркетолог'
                  },
                  { 
                    title: 'Информационная безопасность', 
                    desc: 'Защита данных, сетевая безопасность, этичный хакинг',
                    skills: ['Кибербезопасность', 'Linux', 'Сети', 'Криптография'],
                    career: 'Специалист по ИБ, Пентестер'
                  },
                  { 
                    title: 'Цифровой маркетинг', 
                    desc: 'SMM, контент-маркетинг, SEO/SEM, аналитика',
                    skills: ['SMM', 'SEO', 'Google Analytics', 'Контент'],
                    career: 'Digital-маркетолог, SMM-специалист'
                  },
                  { 
                    title: 'Прикладная информатика', 
                    desc: 'Системный анализ, базы данных, корпоративные системы',
                    skills: ['Базы данных', 'ERP', 'Аналитика', 'BI'],
                    career: 'Системный аналитик, Администратор БД'
                  }
                ].map((spec, i) => (
                  <Card key={i} className="hover:shadow-xl hover:shadow-primary/10 transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl">{spec.title}</CardTitle>
                      <CardDescription>{spec.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold mb-2">Навыки:</div>
                        <div className="flex flex-wrap gap-2">
                          {spec.skills.map((skill, j) => (
                            <Badge key={j} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-1">Карьерные перспективы:</div>
                        <div className="text-sm text-muted-foreground">{spec.career}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="admission">
              <div className="max-w-3xl mx-auto space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" size={24} />
                      Приёмная кампания 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Начало приёма</div>
                        <div className="text-lg font-semibold">1 июня</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Окончание</div>
                        <div className="text-lg font-semibold">25 августа</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground mb-1">Мест</div>
                        <div className="text-lg font-semibold">350</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Аттестат об основном общем образовании</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Паспорт или свидетельство о рождении</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>6 фотографий 3×4</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Медицинская справка</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Форма связи с приёмной комиссией</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Ваше имя" />
                        <Input type="email" placeholder="Email" />
                      </div>
                      <Input placeholder="Телефон" />
                      <Textarea placeholder="Ваш вопрос" rows={4} />
                      <Button className="w-full">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible>
                  <AccordionItem value="q1">
                    <AccordionTrigger>Какие документы нужны для поступления?</AccordionTrigger>
                    <AccordionContent>
                      Для поступления необходимы: аттестат об основном общем образовании, паспорт, 
                      6 фотографий 3×4, медицинская справка формы 086-У.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q2">
                    <AccordionTrigger>Есть ли общежитие?</AccordionTrigger>
                    <AccordionContent>
                      Да, колледж предоставляет общежитие для иногородних студентов. 
                      Современные комнаты на 2-3 человека, Wi-Fi, охрана.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q3">
                    <AccordionTrigger>Какова стоимость обучения?</AccordionTrigger>
                    <AccordionContent>
                      Стоимость зависит от специальности и составляет от 45 000 до 75 000 рублей в год. 
                      Доступна рассрочка платежа.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q4">
                    <AccordionTrigger>Есть ли стипендии?</AccordionTrigger>
                    <AccordionContent>
                      Да, студенты с отличной успеваемостью получают стипендии от 3000 до 8000 рублей в месяц.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="q5">
                    <AccordionTrigger>Помогаете ли с трудоустройством?</AccordionTrigger>
                    <AccordionContent>
                      Да, у нас есть отдел карьеры, который помогает с практикой и трудоустройством. 
                      95% выпускников находят работу в первые 3 месяца после окончания.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="students" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Студентам</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Calendar" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Расписание занятий</CardTitle>
                <CardDescription>Актуальное расписание по группам</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="BookOpen" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Электронная библиотека</CardTitle>
                <CardDescription>Доступ к учебным материалам</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Стипендии</CardTitle>
                <CardDescription>Информация о выплатах</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Home" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Общежитие</CardTitle>
                <CardDescription>Условия проживания</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="FileText" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Расписание сессий</CardTitle>
                <CardDescription>График экзаменов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all cursor-pointer group">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle>Расписание звонков</CardTitle>
                <CardDescription>Время начала и окончания пар</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Расписание занятий</CardTitle>
              <CardDescription>Группа ПР-301</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { day: 'Понедельник', lessons: [
                    { time: '9:00-10:30', subject: 'Программирование', teacher: 'Иванов И.И.', room: '401' },
                    { time: '10:45-12:15', subject: 'Математика', teacher: 'Петрова А.С.', room: '305' },
                    { time: '12:30-14:00', subject: 'Английский язык', teacher: 'Смирнова О.В.', room: '210' }
                  ]},
                  { day: 'Вторник', lessons: [
                    { time: '9:00-10:30', subject: 'Базы данных', teacher: 'Козлов Д.П.', room: '402' },
                    { time: '10:45-12:15', subject: 'Веб-разработка', teacher: 'Иванов И.И.', room: '401' }
                  ]}
                ].map((daySchedule, i) => (
                  <div key={i} className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{daySchedule.day}</h3>
                    <div className="space-y-2">
                      {daySchedule.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-center gap-4 p-3 bg-muted/50 rounded">
                          <div className="text-sm font-mono text-muted-foreground min-w-[100px]">{lesson.time}</div>
                          <div className="flex-1">
                            <div className="font-semibold">{lesson.subject}</div>
                            <div className="text-sm text-muted-foreground">{lesson.teacher}</div>
                          </div>
                          <Badge variant="outline">Ауд. {lesson.room}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Расписание звонков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    '1 пара: 9:00 - 10:30',
                    '2 пара: 10:45 - 12:15',
                    '3 пара: 12:30 - 14:00',
                    '4 пара: 14:15 - 15:45',
                    '5 пара: 16:00 - 17:30'
                  ].map((bell, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded">
                      <Icon name="Bell" size={16} className="text-primary" />
                      <span className="font-mono">{bell}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Информация о стипендиях</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded">
                  <div className="font-semibold mb-1">Академическая стипендия</div>
                  <div className="text-sm text-muted-foreground">От 3000 до 8000 руб/мес</div>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <div className="font-semibold mb-1">Социальная стипендия</div>
                  <div className="text-sm text-muted-foreground">5000 руб/мес</div>
                </div>
                <div className="p-3 bg-muted/50 rounded">
                  <div className="font-semibold mb-1">Именная стипендия</div>
                  <div className="text-sm text-muted-foreground">До 15000 руб/мес</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Учебный процесс</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Icon name="Building2" size={48} className="text-primary mb-4" />
                <CardTitle>Отделение информационных технологий</CardTitle>
                <CardDescription>Программирование, дизайн, ИБ</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>8 специальностей</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-primary mb-4" />
                <CardTitle>Экономическое отделение</CardTitle>
                <CardDescription>Бизнес, маркетинг, финансы</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>5 специальностей</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Icon name="Cpu" size={48} className="text-primary mb-4" />
                <CardTitle>Техническое отделение</CardTitle>
                <CardDescription>Прикладная информатика</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>4 специальности</Badge>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-3xl font-heading font-semibold mb-8">Производственная практика</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { company: 'Яндекс', direction: 'Разработка ПО', students: 25 },
              { company: 'Сбербанк', direction: 'Бизнес-аналитика', students: 18 },
              { company: 'VK', direction: 'Frontend разработка', students: 20 },
              { company: 'Тинькофф', direction: 'Дизайн интерфейсов', students: 15 }
            ].map((practice, i) => (
              <Card key={i} className="hover:border-primary transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{practice.company}</CardTitle>
                      <CardDescription>{practice.direction}</CardDescription>
                    </div>
                    <Badge variant="secondary">{practice.students} студентов</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon name="Briefcase" size={48} className="text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">График учебного процесса на 2024-2025 учебный год</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { period: 'Сентябрь - Декабрь', type: 'Теоретическое обучение', weeks: 17 },
                  { period: 'Январь', type: 'Зимняя сессия', weeks: 3 },
                  { period: 'Февраль - Май', type: 'Теоретическое обучение', weeks: 16 },
                  { period: 'Июнь', type: 'Летняя сессия', weeks: 3 },
                  { period: 'Июль - Август', type: 'Практика и каникулы', weeks: 8 }
                ].map((period, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">{period.period}</div>
                      <div className="text-sm text-muted-foreground">{period.type}</div>
                    </div>
                    <Badge variant="outline">{period.weeks} недель</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Новости и события</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-6">Лента новостей</h3>
            <div className="space-y-6">
              {[
                { 
                  date: '19 октября 2025', 
                  category: 'Мероприятие', 
                  title: 'День открытых дверей 20 октября',
                  text: 'Приглашаем всех желающих посетить наш колледж, познакомиться с преподавателями и узнать об условиях поступления.',
                  image: true
                },
                { 
                  date: '15 октября 2025', 
                  category: 'Достижения', 
                  title: 'Студенты победили на хакатоне',
                  text: 'Команда студентов отделения IT заняла первое место на региональном хакатоне по разработке мобильных приложений.',
                  image: false
                },
                { 
                  date: '10 октября 2025', 
                  category: 'Карьера', 
                  title: 'Новые партнёры для практики',
                  text: 'Колледж заключил договоры с 5 новыми IT-компаниями для организации производственной практики студентов.',
                  image: false
                },
                { 
                  date: '5 октября 2025', 
                  category: 'Учёба', 
                  title: 'Обновление электронной библиотеки',
                  text: 'Добавлено 500+ новых учебных материалов по программированию и дизайну.',
                  image: false
                }
              ].map((news, i) => (
                <Card key={i} className="hover:shadow-xl transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center gap-4">
                          <Badge>{news.category}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {news.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-heading font-semibold">{news.title}</h3>
                        <p className="text-muted-foreground">{news.text}</p>
                        <Button variant="link" className="p-0">
                          Читать полностью
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                      {news.image && (
                        <div className="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg flex items-center justify-center">
                          <Icon name="Image" size={48} className="text-primary" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Афиша предстоящих мероприятий</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { date: '20 окт', title: 'День открытых дверей', time: '10:00', type: 'Мероприятие' },
                { date: '25 окт', title: 'Студенческая олимпиада по программированию', time: '14:00', type: 'Олимпиада' },
                { date: '1 ноя', title: 'Конференция "Будущее IT"', time: '12:00', type: 'Конференция' },
                { date: '10 ноя', title: 'Спортивный праздник', time: '15:00', type: 'Спорт' },
                { date: '15 ноя', title: 'Ярмарка вакансий', time: '11:00', type: 'Карьера' },
                { date: '20 ноя', title: 'Студенческий КВН', time: '18:00', type: 'Развлечение' }
              ].map((event, i) => (
                <Card key={i} className="hover:border-primary transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-center min-w-[60px]">
                        <div className="text-3xl font-bold text-primary">{event.date.split(' ')[0]}</div>
                        <div className="text-sm text-muted-foreground uppercase">{event.date.split(' ')[1]}</div>
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{event.type}</Badge>
                        <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="Clock" size={14} />
                          {event.time}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="life" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Студенты вне учёбы</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Dumbbell" size={48} className="text-primary mb-4" />
                <CardTitle>Спортивные секции</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Футбол', 'Баскетбол', 'Волейбол', 'Фитнес', 'Йога'].map((sport, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{sport}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Music" size={48} className="text-primary mb-4" />
                <CardTitle>Творческие клубы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['Вокальная студия', 'Театр', 'Танцы', 'КВН', 'Фотоклуб'].map((club, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{club}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Студенческий совет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Организация студенческих мероприятий, защита прав студентов, культурная жизнь колледжа
                </p>
                <Badge variant="secondary">Активных членов: 45</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Trophy" size={48} className="text-primary mb-4" />
                <CardTitle>Мероприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {['День студента', 'Фестиваль талантов', 'Спартакиада', 'Посвящение в студенты'].map((event, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Coffee" size={48} className="text-primary mb-4" />
                <CardTitle>Столовая</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Современная столовая с разнообразным меню, комплексные обеды от 150 рублей
                </p>
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Clock" size={14} />
                    Пн-Пт: 9:00 - 17:00
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-primary mb-4" />
                <CardTitle>Волонтёрство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Участие в социальных проектах, помощь детским домам, экологические акции
                </p>
                <Badge variant="secondary">Волонтёров: 78</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform">
                <Icon name="Users" size={48} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold text-center mb-16">Карьера и трудоустройство</h2>

          <div className="mb-16">
            <h3 className="text-3xl font-heading font-semibold mb-8 text-center">Наши партнёры-работодатели</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                'Яндекс', 'Сбербанк', 'VK', 'Тинькофф', 
                'Ozon', 'Авито', 'Wildberries', 'Kaspersky'
              ].map((company, i) => (
                <Card key={i} className="text-center hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <div className="text-2xl font-bold text-primary">{company}</div>
                    </div>
                    <Badge variant="outline">Партнёр</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-heading font-semibold mb-8 text-center">Ярмарка вакансий</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  company: 'Яндекс', 
                  position: 'Junior Frontend Developer', 
                  salary: 'от 80 000 ₽',
                  type: 'Полная занятость'
                },
                { 
                  company: 'Сбербанк', 
                  position: 'Бизнес-аналитик', 
                  salary: 'от 70 000 ₽',
                  type: 'Полная занятость'
                },
                { 
                  company: 'VK', 
                  position: 'UI/UX Designer', 
                  salary: 'от 75 000 ₽',
                  type: 'Полная занятость'
                },
                { 
                  company: 'Тинькофф', 
                  position: 'Python Developer', 
                  salary: 'от 90 000 ₽',
                  type: 'Полная занятость'
                }
              ].map((vacancy, i) => (
                <Card key={i} className="hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">{vacancy.company}</Badge>
                        <CardTitle className="text-xl mb-2">{vacancy.position}</CardTitle>
                        <CardDescription className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Icon name="DollarSign" size={14} />
                            {vacancy.salary}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Briefcase" size={14} />
                            {vacancy.type}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Откликнуться
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-heading font-semibold mb-8 text-center">Истории успеха выпускников</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  name: 'Алексей Морозов', 
                  year: '2022', 
                  position: 'Senior Developer в Яндекс',
                  specialty: 'Программирование',
                  quote: 'Колледж дал мне отличную базу для карьеры в IT'
                },
                { 
                  name: 'Мария Волкова', 
                  year: '2021', 
                  position: 'Lead Designer в VK',
                  specialty: 'Дизайн',
                  quote: 'Практика и менторство преподавателей — бесценны'
                },
                { 
                  name: 'Дмитрий Соколов', 
                  year: '2023', 
                  position: 'Product Manager в Сбербанк',
                  specialty: 'Бизнес-администрирование',
                  quote: 'Здесь я научился не только теории, но и реальным навыкам'
                }
              ].map((graduate, i) => (
                <Card key={i} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={40} className="text-primary" />
                    </div>
                    <CardTitle className="text-center text-xl">{graduate.name}</CardTitle>
                    <CardDescription className="text-center">
                      <Badge variant="outline" className="mb-2">{graduate.specialty}</Badge>
                      <div className="text-sm">Выпуск {graduate.year}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="font-semibold text-primary mb-3">{graduate.position}</div>
                    <p className="text-sm text-muted-foreground italic">"{graduate.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-primary" />
                <h3 className="text-xl font-heading font-bold">Перспектива</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Коммерческий колледж для успешной карьеры
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-primary cursor-pointer transition-colors">О колледже</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Специальности</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Поступление</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Контакты</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Для студентов</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-primary cursor-pointer transition-colors">Расписание</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Библиотека</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Общежитие</div>
                <div className="hover:text-primary cursor-pointer transition-colors">Стипендии</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  info@perspektiva.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  Москва, ул. Образования, 15
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Коммерческий колледж «Перспектива». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

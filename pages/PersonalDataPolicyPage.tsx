import React from 'react';

const PersonalDataPolicyPage: React.FC = () => {
    return (
        <div className="pt-24 sm:pt-32 pb-16 px-4 sm:px-8 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-700 dark:from-gray-300 dark:to-gray-500">
                           Политика обработки персональных данных
                        </span>
                    </h1>
                </header>

                <main className="space-y-6 text-gray-700 dark:text-gray-300 opacity-0 animate-fade-in-up-delay-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">1. Введение</h2>
                    <p>Мы серьезно относимся к вашей конфиденциальности и стремимся защищать ваши персональные данные. Настоящая политика объясняет, какие персональные данные мы собираем, как мы их используем и какие у вас есть права в отношении ваших данных.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">2. Сбор Персональных Данных</h2>
                    <p>Мы собираем информацию, которую вы нам предоставляете напрямую, например, когда вы заполняете форму обратной связи, подписываетесь на нашу рассылку или связываетесь с нами для получения поддержки.</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li><strong>Контактная информация:</strong> Ваше имя, адрес электронной почты, номер телефона.</li>
                        <li><strong>Техническая информация:</strong> IP-адрес, тип браузера, операционная система, данные о посещенных страницах.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">3. Использование Персональных Данных</h2>
                    <p>Мы используем ваши данные для следующих целей: предоставление и улучшение наших услуг, общение с вами, маркетинг и реклама, соблюдение юридических обязательств.</p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-4">4. Хранение и Безопасность Данных</h2>
                    <p>Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>

                    <p className="pt-8 text-sm text-gray-500"><em>Последнее обновление: 21 мая 2024 г.</em></p>
                </main>
            </div>
        </div>
    );
};

export default PersonalDataPolicyPage;

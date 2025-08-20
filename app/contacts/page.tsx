import React from 'react';
import { MailIcon } from '../../components/icons/MailIcon';
import { PhoneIcon } from '../../components/icons/PhoneIcon';
import { TelegramIcon } from '../../components/icons/TelegramIcon';
import { SendIcon } from '../../components/icons/SendIcon';

const ContactInfoItem: React.FC<{ icon: React.ElementType, title: string, value: string, href: string }> = ({ icon: Icon, title, value, href }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-yellow-500" />
        </div>
        <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{title}</h3>
            <a href={href} className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors">{value}</a>
        </div>
    </div>
);


export default function ContactsPage() {
    return (
        <div className="pt-24 sm:pt-32 pb-16 px-4 sm:px-8 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <header className="text-center mb-12 md:mb-16 opacity-0 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                         <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500">
                           Свяжитесь с нами
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Готовы обсудить ваш проект? Заполните форму или используйте контакты ниже.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="space-y-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s'}}>
                        <ContactInfoItem icon={MailIcon} title="Email" value="hello@romana.ai" href="mailto:hello@romana.ai" />
                        <ContactInfoItem icon={TelegramIcon} title="Telegram" value="@roman_ai_support" href="https://t.me/roman_ai_support" />
                        <ContactInfoItem icon={PhoneIcon} title="Телефон" value="+7 (999) 123-45-67" href="tel:+79991234567" />
                    </div>
                    
                    <form className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s'}}>
                         <div className="relative">
                            <input type="text" id="name" placeholder=" " className="block px-4 py-3 w-full text-md text-gray-900 dark:text-white bg-transparent rounded-lg border-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer" />
                            <label htmlFor="name" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-[#0a0a0a] px-2 peer-focus:px-2 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Ваше Имя</label>
                        </div>
                         <div className="relative">
                            <input type="email" id="email" placeholder=" " className="block px-4 py-3 w-full text-md text-gray-900 dark:text-white bg-transparent rounded-lg border-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer" />
                            <label htmlFor="email" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-[#0a0a0a] px-2 peer-focus:px-2 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Email</label>
                        </div>
                         <div className="relative">
                            <textarea id="message" rows={5} placeholder=" " className="block px-4 py-3 w-full text-md text-gray-900 dark:text-white bg-transparent rounded-lg border-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"></textarea>
                            <label htmlFor="message" className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-[#0a0a0a] px-2 peer-focus:px-2 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2">Сообщение</label>
                        </div>
                        <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50">
                            <SendIcon className="w-5 h-5" />
                            <span>Отправить</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
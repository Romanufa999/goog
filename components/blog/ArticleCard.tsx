import React from 'react';

interface ArticleCardProps {
    category: string;
    title: string;
    excerpt: string;
    image: string;
    animationDelay?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ category, title, excerpt, image, animationDelay = 0 }) => {
    return (
        <div 
            className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${animationDelay}s` }}
        >
            <div className="aspect-video overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="p-6">
                <p className="text-sm font-medium text-blue-500 dark:text-blue-400 mb-1">{category}</p>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
                <a href="#" className="font-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-500 dark:group-hover:text-blue-400">
                    Читать далее <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>
        </div>
    );
};

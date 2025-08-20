import React from 'react';

const CrmColumn: React.FC<{ title: string; color: string; children?: React.ReactNode }> = ({ title, color, children }) => (
    <div className="w-24 flex-shrink-0">
        <div className="flex items-center gap-2 mb-3">
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200">{title}</h4>
        </div>
        <div className="w-full h-64 bg-black/5 dark:bg-white/5 rounded-lg">
            {children}
        </div>
    </div>
);

const CrmCard: React.FC<{ name: string; source: string; animationClass: string; }> = ({ name, source, animationClass }) => (
    <div className={`absolute top-0 left-0 w-24 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-black/10 dark:border-white/10 ${animationClass}`}>
        <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full"></div>
            <span className="text-xs font-bold">{name}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{source}</p>
    </div>
);


export const CrmAnimation: React.FC = () => {
    return (
        <div className="w-[340px] h-[280px] p-4 rounded-2xl bg-gray-100/50 dark:bg-gray-900/40 backdrop-blur-sm border border-black/10 dark:border-white/10 relative overflow-hidden">
            <div className="flex justify-between space-x-4">
                <CrmColumn title="Новые" color="bg-blue-400" />
                <CrmColumn title="В работе" color="bg-yellow-400" />
                <CrmColumn title="Оплата" color="bg-green-400" />
            </div>
            
            {/* Animated Cards */}
            <div className="absolute top-10 left-4 w-[310px] h-[240px]">
                 <CrmCard name="Заявка #123" source="С сайта" animationClass="animate-crm-flow-1" />
                 <CrmCard name="Клиент Telegram" source="@username" animationClass="animate-crm-flow-2" />
                 <CrmCard name="Лид Директ" source="Поиск" animationClass="animate-crm-flow-3" />
            </div>
        </div>
    );
};

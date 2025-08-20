import React from 'react';

const Toggle: React.FC<{ label: string; delay: number; defaultChecked?: boolean }> = ({ label, delay, defaultChecked = true }) => (
    <div className="flex items-center justify-between opacity-0 animate-fade-in-up" style={{ animationDelay: `${delay}s`}}>
        <span className="text-sm">{label}</span>
        <div className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${defaultChecked ? 'bg-green-400' : 'bg-gray-300 dark:bg-gray-600'}`}>
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${defaultChecked ? 'translate-x-4' : ''}`}></div>
        </div>
    </div>
);

export const SetupDashboard: React.FC = () => {
    return (
        <div className="w-full max-w-sm h-full flex items-center justify-center">
            <div className="w-full p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-xl space-y-4">
                <h4 className="font-bold text-lg opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Настройка Кампании</h4>
                <div className="space-y-3">
                    <Toggle label="Ретаргетинг" delay={0.2} defaultChecked />
                    <Toggle label="Гео-таргетинг" delay={0.3} defaultChecked />
                    <Toggle label="Авто-ставки" delay={0.4} defaultChecked={false} />
                </div>
                <div className="pt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s'}}>
                    <label className="text-sm font-medium">Дневной Бюджет</label>
                    <div className="mt-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                           className="bg-gradient-to-r from-cyan-400 to-yellow-400 h-2.5 rounded-full animate-fill-bar"
                           style={{ '--fill-width': '75%' } as React.CSSProperties}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

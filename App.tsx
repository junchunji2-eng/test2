import React, { useState, useCallback } from 'react';

const App: React.FC = () => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleConfirmClick = useCallback(() => {
    setIsConfirmed(true);
    // Reset the confirmation message after 3 seconds for better UX
    setTimeout(() => {
        setIsConfirmed(false);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4 text-center font-sans">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">

        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          클릭 확인 시스템
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          아래 버튼을 클릭하여 작업을 확인해주세요.
        </p>

        <button
          onClick={handleConfirmClick}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transform transition-transform duration-200 hover:-translate-y-1 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isConfirmed}
        >
          {isConfirmed ? '처리 중...' : '확인'}
        </button>

        <div className="h-16 mt-6 flex items-center justify-center">
            {isConfirmed && (
              <div
                className="animate-fade-in-up p-4 w-full bg-green-100 dark:bg-green-800/50 border-l-4 border-green-500 text-green-700 dark:text-green-200 rounded-md"
                role="alert"
              >
                <p className="font-bold">성공!</p>
                <p>요청이 확인되었습니다.</p>
              </div>
            )}
        </div>
        <style>{`
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }
        `}</style>
      </div>
       <footer className="absolute bottom-5 text-gray-500 dark:text-gray-400 text-sm">
        <p>간단한 확인 앱</p>
      </footer>
    </div>
  );
};

export default App;

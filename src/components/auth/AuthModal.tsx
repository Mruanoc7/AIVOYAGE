// Layout.tsx o App.tsx (tu componente principal)
import React from 'react';

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header fijo */}
            <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="VoyageAI" className="h-8" />
                        <span className="ml-2 text-xl font-semibold">VoyageAI</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-600">About</a>
                        <a href="#" className="text-gray-600">Sign in</a>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                            Get Started
                        </button>
                    </div>
                </nav>
            </header>

            {/* Contenido principal con padding-top para el header */}
            <main className="pt-16">
                {/* Tu contenido actual */}
            </main>
        </div>
    );
};

// AuthModal.tsx
interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialView = 'login' }: AuthModalProps) {
    const [view, setView] = React.useState(initialView);

    if (!isOpen) return null;

    return (
        <>
            {/* Portal div - asegúrate de tener un div con id="modal-root" en tu HTML */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                    onClick={onClose}
                />

                {/* Modal container */}
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Content */}
                            <div className="p-6">
                                {view === 'login' ? (
                                    <LoginForm onSignupClick={() => setView('signup')} />
                                ) : (
                                    <SignupForm onLoginClick={() => setView('login')} />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
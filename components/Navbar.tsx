import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, FileText, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-lg font-extrabold tracking-tight mr-4">
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-violet-600">MT</span>
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors relative ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-violet-500 after:rounded-full'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors relative ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-violet-500 after:rounded-full'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex items-center gap-2 font-medium transition-colors relative ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-violet-500 after:rounded-full'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </NavLink>
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
          aria-label="Toggle Theme"
        >
          <span className={`block transition-transform duration-300 ${isDark ? 'rotate-0' : 'rotate-180'}`}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

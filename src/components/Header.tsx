import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X, ChevronDown, BookOpen, BookText, Gavel, FileText } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [legisOpen, setLegisOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLegisOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const legisLinks = [
    { to: '/clt', label: 'CLT — Direitos', icon: <BookOpen className="w-4 h-4" /> },
    { to: '/sumulas', label: 'Súmulas TST', icon: <BookText className="w-4 h-4" /> },
    { to: '/jurisprudencia', label: 'Jurisprudência', icon: <Gavel className="w-4 h-4" /> },
    { to: '/ojs', label: 'OJs TST', icon: <FileText className="w-4 h-4" /> },
  ];

  const mainLinks = [
    { to: '/', label: 'Início' },
    { to: '/ferramentas', label: 'Calculadoras' },
  ];

  const secondaryLinks = [
    { to: '/guias', label: 'Guias' },
    { to: '/blog', label: 'Blog' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isLegisActive = legisLinks.some(l => isActive(l.to));

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <Scale className="w-7 h-7 text-primary-500 group-hover:text-primary-600 transition-colors" />
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">
              <span className="text-primary-500">Calculadora</span>Trabalhista
            </span>
            <span className="font-bold text-lg text-gray-900 sm:hidden">
              <span className="text-primary-500">CT</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {mainLinks.map(link => (
              <Link key={link.to} to={link.to}
                className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >{link.label}</Link>
            ))}

            {/* Legislação Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setLegisOpen(!legisOpen)}
                className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  legisOpen ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Legislação <ChevronDown className={`w-3.5 h-3.5 transition-transform ${legisOpen ? 'rotate-180' : ''}`} />
              </button>
              {legisOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[220px] z-50">
                  {legisLinks.map(link => (
                    <Link key={link.to} to={link.to} onClick={() => setLegisOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        isActive(link.to)
                          ? 'text-primary-600 bg-primary-50 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-gray-400">{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mx-3 my-1" />
                  <div className="px-4 py-2 text-xs text-gray-400">Fonte oficial: TST</div>
                </div>
              )}
            </div>

            {secondaryLinks.map(link => (
              <Link key={link.to} to={link.to}
                className={`px-2.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >{link.label}</Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)} aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 pt-2 space-y-1">
            {mainLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.to) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >{link.label}</Link>
            ))}
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 pt-3 pb-1">Legislação</div>
            {legisLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.to) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-gray-400">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            {secondaryLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.to) ? 'text-primary-600 bg-primary-50' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >{link.label}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

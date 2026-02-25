'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Evolução Física', path: '/evolucao-fisica' },
  { name: 'Evolução Financeira', path: '/evolucao-financeira' },
  { name: 'Diário de Obra', path: '/diario-obra' },
  { name: 'Relatório Fotográfico', path: '/relatorio-fotografico' },
  { name: 'Administração', path: '/admin' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h1 className="logo-text">PERCURSO PIPA</h1>
        <p className="logo-sub">VIANA E MOURA</p>
        <div className="instituto-badge">Parceiro Instituto PIPA</div>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background-color: var(--white);
          border-right: 1px solid var(--border);
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }

        .logo-container {
          padding: 30px 20px;
          border-bottom: 2px solid #f9f9f9;
          text-align: center;
          margin-bottom: 10px;
        }

        .logo-text {
          font-size: 1.4rem;
          color: var(--primary);
          font-weight: 900;
          letter-spacing: -1px;
          margin-bottom: 0;
        }

        .logo-sub {
          font-size: 0.65rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-top: -5px;
        }

        .instituto-badge {
          display: inline-block;
          margin-top: 12px;
          padding: 5px 12px;
          background: var(--leaf-green);
          color: white;
          font-size: 0.6rem;
          font-weight: 800;
          border-radius: 20px;
          text-transform: uppercase;
          box-shadow: 0 2px 4px rgba(76, 175, 80, 0.2);
        }

        nav {
          flex: 1;
          padding: 10px 15px;
        }

        ul {
          list-style: none;
        }

        li {
          margin-bottom: 8px;
        }

        li a {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: var(--playful-radius);
        }

        li a:hover {
          background-color: #f5f5f5;
          color: var(--primary);
          transform: translateX(5px);
        }

        li a.active {
          background-color: #fef2f2;
          color: var(--primary);
          font-weight: 700;
          box-shadow: 0 4px 12px rgba(183, 50, 57, 0.1);
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          nav ul {
            display: flex;
            overflow-x: auto;
          }
          li a {
             padding: 15px;
             white-space: nowrap;
             border-left: none;
             border-bottom: 3px solid transparent;
          }
          li a.active {
             border-left: none;
             border-bottom-color: var(--primary);
          }
        }
      `}</style>
    </aside>
  );
}

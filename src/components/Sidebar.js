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
                <h1>PERCURSO PIPA</h1>
                <p>Viana e Moura</p>
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
          padding: 20px;
          border-bottom: 1px solid var(--border);
          text-align: center;
        }

        .logo-container h1 {
          font-size: 1.2rem;
          color: var(--primary);
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .logo-container p {
          font-size: 0.7rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        nav {
          flex: 1;
          padding: 20px 0;
        }

        ul {
          list-style: none;
        }

        li a {
          display: block;
          padding: 12px 25px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          transition: all 0.2s;
          border-left: 4px solid transparent;
        }

        li a:hover {
          background-color: #f9f9f9;
          color: var(--primary);
        }

        li a.active {
          background-color: #fef2f2;
          color: var(--primary);
          font-weight: 600;
          border-left-color: var(--primary);
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

'use client';

export default function Header({ title }) {
  return (
    <header className="header">
      <div className="header-content">
        <h2>{title || 'Acompanhamento de Engenharia'}</h2>
        <div className="user-info">
          <span>Engenheiro Responsável</span>
          <div className="avatar">VM</div>
        </div>
      </div>

      <style jsx>{`
        .header {
          height: var(--header-height);
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 0 30px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 900;
        }

        .header-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h2 {
          font-size: 1.1rem;
          color: var(--foreground);
          font-weight: 600;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-info span {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .avatar {
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .header {
            padding: 0 15px;
          }
        }
      `}</style>
    </header>
  );
}

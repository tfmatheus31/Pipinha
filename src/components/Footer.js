'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Material desenvolvido no treinamento de Código Sem Fronteiras: Desenvolvimento Web com IA. Ministrado por Eliakim Rocha. Na data de 25 de fevereiro de 2025.</p>

      <style jsx>{`
        .footer {
          padding: 20px;
          text-align: center;
          background: var(--white);
          border-top: 1px solid var(--border);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-top: auto;
        }
      `}</style>
    </footer>
  );
}

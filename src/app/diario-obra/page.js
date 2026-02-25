'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { diarioObraData } from '@/lib/mockData';

export default function DiarioObra() {
    const [filterDate, setFilterDate] = useState('');

    const filteredData = filterDate
        ? diarioObraData.filter(item => item.data === filterDate)
        : diarioObraData;

    const formatDate = (dateString) => {
        const parts = dateString.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    return (
        <>
            <Header title="Diário de Obra" />
            <div className="container">

                <div className="card flex justify-between align-center">
                    <div>
                        <h3 style={{ fontSize: '1rem' }}>Registros de Atividades</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            {filteredData.length} registros encontrados
                        </p>
                    </div>
                    <div className="flex align-center gap-10">
                        <label htmlFor="date-filter" style={{ fontSize: '0.9rem' }}>Filtrar por data:</label>
                        <input
                            type="date"
                            id="date-filter"
                            className="input-date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                        />
                        {filterDate && (
                            <button className="btn-clear" onClick={() => setFilterDate('')}>Limpar</button>
                        )}
                    </div>
                </div>

                <div className="diario-list">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div key={item.id} className="card diario-item">
                                <div className="diario-header flex justify-between align-center">
                                    <div className="date-badge">{formatDate(item.data)}</div>
                                    <div className="clima-info">
                                        <span>{item.clima}</span>
                                        <span className="temp">{item.temperatura}</span>
                                    </div>
                                </div>

                                <div className="diario-body">
                                    <h4>Resumo das Atividades:</h4>
                                    <p className="description">{item.descricao}</p>

                                    <div className="equipe-info">
                                        <strong>Equipe em campo:</strong> {item.equipe}
                                    </div>

                                    {item.observacoes && (
                                        <div className="obs-info">
                                            <strong>Observações/Ocorrências:</strong> {item.observacoes}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="card" style={{ textAlign: 'center', padding: '50px' }}>
                            <p>Nenhum registro encontrado para a data selecionada.</p>
                            <button onClick={() => setFilterDate('')} className="btn-primary" style={{ marginTop: '20px' }}>
                                Ver todos os registros
                            </button>
                        </div>
                    )}
                </div>

            </div>

            <style jsx>{`
        .input-date {
          padding: 8px 12px;
          border-radius: 4px;
          border: 1px solid var(--border);
          font-family: inherit;
        }

        .btn-clear {
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          font-size: 0.85rem;
          text-decoration: underline;
        }

        .diario-list {
           display: flex;
           flex-direction: column;
           gap: 10px;
        }

        .diario-item {
           border-left: 4px solid var(--primary);
           padding: 25px;
        }

        .date-badge {
           background: var(--primary);
           color: var(--white);
           padding: 5px 12px;
           border-radius: 20px;
           font-weight: bold;
           font-size: 0.9rem;
        }

        .clima-info {
           font-size: 0.85rem;
           color: var(--text-secondary);
           display: flex;
           gap: 15px;
           align-items: center;
        }

        .clima-info .temp {
           background: #eee;
           padding: 2px 8px;
           border-radius: 4px;
           font-weight: 600;
           color: #333;
        }

        .diario-body {
           margin-top: 20px;
        }

        .diario-body h4 {
           font-size: 0.95rem;
           color: #333;
           margin-bottom: 10px;
           text-transform: uppercase;
           letter-spacing: 0.5px;
        }

        .description {
           font-size: 1rem;
           line-height: 1.6;
           color: #444;
           margin-bottom: 20px;
        }

        .equipe-info, .obs-info {
           background: #f9f9f9;
           padding: 12px;
           border-radius: 6px;
           font-size: 0.85rem;
           margin-top: 10px;
           border-left: 3px solid #ddd;
        }

        .btn-primary {
           background: var(--primary);
           color: white;
           padding: 10px 20px;
           border-radius: 6px;
           border: none;
           cursor: pointer;
           font-weight: 600;
        }
      `}</style>
        </>
    );
}

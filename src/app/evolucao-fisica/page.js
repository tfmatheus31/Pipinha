'use client';

import Header from '@/components/Header';
import { evolucaoFisicaData } from '@/lib/mockData';

export default function EvolucaoFisica() {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Concluído': return 'status-concluido';
            case 'Em andamento': return 'status-andamento';
            case 'Atrasado': return 'status-atrasado';
            case 'Não iniciado': return 'status-n-iniciado';
            default: return '';
        }
    };

    return (
        <>
            <Header title="Evolução Física da Obra" />
            <div className="container">

                <div className="card">
                    <div className="flex justify-between align-center" style={{ marginBottom: '20px' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>Cronograma Físico por Etapa</h3>
                        <div className="flex gap-10">
                            <span className="status-badge status-concluido">Concluído</span>
                            <span className="status-badge status-andamento">Em andamento</span>
                            <span className="status-badge status-atrasado">Atrasado</span>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Etapa</th>
                                    <th style={{ textAlign: 'center' }}>Peso (%)</th>
                                    <th style={{ textAlign: 'center' }}>Previsto (%)</th>
                                    <th style={{ textAlign: 'center' }}>Executado (%)</th>
                                    <th style={{ textAlign: 'center' }}>Desvio (%)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {evolucaoFisicaData.map((item) => (
                                    <tr key={item.id}>
                                        <td><strong>{item.etapa}</strong></td>
                                        <td style={{ textAlign: 'center' }}>{item.peso.toFixed(1)}%</td>
                                        <td style={{ textAlign: 'center' }}>{item.previsto.toFixed(1)}%</td>
                                        <td style={{ textAlign: 'center' }}>{item.executado.toFixed(1)}%</td>
                                        <td style={{ textAlign: 'center', color: item.desvio < 0 ? 'var(--primary)' : 'inherit' }}>
                                            {item.desvio > 0 ? `+${item.desvio.toFixed(1)}` : item.desvio.toFixed(1)}%
                                        </td>
                                        <td>
                                            <span className={`status-badge ${getStatusClass(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card" style={{ background: '#f9f9f9', borderLeft: '5px solid var(--accent)' }}>
                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                        <strong>Nota:</strong> O desvio é calculado com base na diferença entre o percentual previsto para a data e o percentual efetivamente executado em campo.
                    </p>
                </div>

            </div>
        </>
    );
}

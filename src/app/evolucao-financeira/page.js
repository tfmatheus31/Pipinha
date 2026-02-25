'use client';

import Header from '@/components/Header';
import { evolucaoFinanceiraData, dashboardData } from '@/lib/mockData';

export default function EvolucaoFinanceira() {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    return (
        <>
            <Header title="Evolução Financeira" />
            <div className="container">

                {/* Financial Summary */}
                <div className="kpi-grid">
                    <div className="kpi-card">
                        <h3>Previsto Acumulado</h3>
                        <div className="value">{formatCurrency(dashboardData.valorExecutado + dashboardData.saldo * 0.1)}</div>
                    </div>
                    <div className="kpi-card">
                        <h3>Executado Acumulado</h3>
                        <div className="value">{formatCurrency(dashboardData.valorExecutado)}</div>
                    </div>
                    <div className="kpi-card" style={{ borderLeftColor: 'var(--accent)' }}>
                        <h3>Percentual Pago</h3>
                        <div className="value">{dashboardData.percentualFinanceiro}%</div>
                    </div>
                    <div className="kpi-card">
                        <h3>Saldo Restante</h3>
                        <div className="value">{formatCurrency(dashboardData.saldo)}</div>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Fluxo de Caixa Mensal</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Mês / Referência</th>
                                    <th style={{ textAlign: 'right' }}>Previsto (R$)</th>
                                    <th style={{ textAlign: 'right' }}>Executado (R$)</th>
                                    <th style={{ textAlign: 'center' }}>% Exec.</th>
                                    <th style={{ textAlign: 'right' }}>Saldo Período (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {evolucaoFinanceiraData.map((item) => (
                                    <tr key={item.id}>
                                        <td><strong>{item.mes}</strong></td>
                                        <td style={{ textAlign: 'right' }}>{formatCurrency(item.previsto)}</td>
                                        <td style={{ textAlign: 'right' }}>{formatCurrency(item.executado)}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <span style={{
                                                fontWeight: '600',
                                                color: item.percentual < 90 ? 'var(--primary)' : 'var(--success)'
                                            }}>
                                                {item.percentual}%
                                            </span>
                                        </td>
                                        <td style={{ textAlign: 'right' }}>{formatCurrency(item.saldo)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr style={{ background: '#f4f4f4', fontWeight: 'bold' }}>
                                    <td>TOTAL ACUMULADO</td>
                                    <td style={{ textAlign: 'right' }}>
                                        {formatCurrency(evolucaoFinanceiraData.reduce((acc, curr) => acc + curr.previsto, 0))}
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                        {formatCurrency(evolucaoFinanceiraData.reduce((acc, curr) => acc + curr.executado, 0))}
                                    </td>
                                    <td style={{ textAlign: 'center' }}>-</td>
                                    <td style={{ textAlign: 'right' }}>
                                        {formatCurrency(evolucaoFinanceiraData.reduce((acc, curr) => acc + curr.saldo, 0))}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}

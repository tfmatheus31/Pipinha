'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { dashboardData, curvaSData } from '@/lib/mockData';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Simulating API fetch
    setData(dashboardData);
    setChartData(curvaSData);
  }, []);

  if (!data) return <div className="container">Carregando indicadores...</div>;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <>
      <Header title="Dashboard Executivo" />
      <div className="container">

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>Valor Total Contrato</h3>
            <div className="value">{formatCurrency(data.valorContrato)}</div>
          </div>
          <div className="kpi-card">
            <h3>Valor Executado (Financeiro)</h3>
            <div className="value">{formatCurrency(data.valorExecutado)}</div>
          </div>
          <div className="kpi-card">
            <h3>Saldo a Executar</h3>
            <div className="value">{formatCurrency(data.saldo)}</div>
          </div>
          <div className="kpi-card" style={{ borderLeftColor: 'var(--accent)' }}>
            <h3>Evolução Física</h3>
            <div className="value">{data.percentualFisico}%</div>
          </div>
        </div>

        {/* Charts & Details Section */}
        <div className="dashboard-content">

          <div className="card">
            <h3 className="card-title">Curva S - Previsto vs Executado (Acumulado %)</h3>
            <div style={{ width: '100%', height: 400, marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="mes" />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend verticalAlign="top" height={36} />
                  <Line
                    type="monotone"
                    dataKey="previstoAcumulado"
                    name="Previsto"
                    stroke="#555"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="executadoAcumulado"
                    name="Executado"
                    stroke="var(--primary)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div className="card">
              <h3 className="card-title">Resumo Cronograma</h3>
              <div className="info-list">
                <div className="info-item">
                  <span>Início Obra</span>
                  <strong>{data.prazoInicio}</strong>
                </div>
                <div className="info-item">
                  <span>Previsão Término</span>
                  <strong>{data.prazoFim}</strong>
                </div>
                <div className="info-item">
                  <span>Dias Decorridos</span>
                  <strong>{data.diasDecorridos}</strong>
                </div>
                <div className="info-item">
                  <span>Dias Restantes</span>
                  <strong>{data.diasRestantes}</strong>
                </div>
              </div>
            </div>

            <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="card-title">Status Geral</h3>
              <div className="status-circle">
                <div className="percent">{data.percentualFisico}%</div>
                <div className="label">Físico Concluído</div>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Última atualização: {data.dataAtualizacao}
              </p>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .card-title {
          font-size: 1rem;
          color: var(--foreground);
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
        }

        .info-item span { color: var(--text-secondary); }

        .status-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 10px solid #eee;
          border-top-color: var(--primary);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .status-circle .percent {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }

        .status-circle .label {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
      `}</style>
    </>
  );
}

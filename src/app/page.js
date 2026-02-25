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
                    stroke="#888"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="executadoAcumulado"
                    name="Executado"
                    stroke="var(--sky-blue)"
                    strokeWidth={4}
                    dot={{ r: 6, fill: 'var(--sky-blue)' }}
                    activeDot={{ r: 9 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Seção Impacto Social - Instituto Pipa */}
          <div className="card impact-card" style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%)', border: 'none' }}>
            <div className="flex justify-between align-center">
              <div>
                <h3 className="card-title" style={{ border: 'none', marginBottom: '10px' }}>Instituto PIPA - Impacto Social</h3>
                <p style={{ fontSize: '0.85rem', color: '#444', maxWidth: '500px' }}>
                  A Viana e Moura e o Instituto Pipa transformam espaços urbanos em percursos de aprendizado para crianças de 0 a 3 anos.
                </p>
              </div>
              <div className="impact-stats flex gap-20">
                <div className="stat-pill">
                  <span className="label">FAMÍLIAS</span>
                  <span className="val" style={{ color: 'var(--leaf-green)' }}>+500</span>
                </div>
                <div className="stat-pill">
                  <span className="label">VAGAS</span>
                  <span className="val" style={{ color: 'var(--sky-blue)' }}>120</span>
                </div>
              </div>
            </div>

            <div className="percurso-list flex gap-20" style={{ marginTop: '20px' }}>
              <div className="percurso-item">
                <div className="img-placeholder" style={{ background: 'var(--sky-blue)', opacity: 0.2 }}></div>
                <span>Praça Pipa Caruaru</span>
              </div>
              <div className="percurso-item">
                <div className="img-placeholder" style={{ background: 'var(--leaf-green)', opacity: 0.2 }}></div>
                <span>Vila Mais Verde</span>
              </div>
              <div className="percurso-item">
                <div className="img-placeholder" style={{ background: 'var(--sunny-yellow)', opacity: 0.2 }}></div>
                <span>Percurso Infantil Leste</span>
              </div>
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

        .stat-pill {
          background: white;
          padding: 8px 15px;
          border-radius: 30px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .stat-pill .label { display: block; font-size: 0.6rem; color: #888; font-weight: bold; }
        .stat-pill .val { font-size: 1.1rem; font-weight: 800; }

        .percurso-list {
          margin-top: 20px;
          display: flex;
          gap: 15px;
        }

        .percurso-item {
          flex: 1;
          background: white;
          padding: 12px;
          border-radius: 12px;
          text-align: center;
          border: 1px dashed #e0e0e0;
        }

        .percurso-item .img-placeholder {
          height: 60px;
          border-radius: 8px;
          margin-bottom: 8px;
        }

        .percurso-item span { font-size: 0.75rem; font-weight: 700; color: #555; }
      `}</style>
    </>
  );
}

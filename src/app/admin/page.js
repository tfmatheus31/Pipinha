'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';

const TABS = [
    { id: 'dashboard', label: 'Indicadores' },
    { id: 'evolucao-fisica', label: 'Física' },
    { id: 'evolucao-financeira', label: 'Financeira' },
    { id: 'diario-obra', label: 'Diário' },
];

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Simulando chamada à API
        try {
            const response = await fetch(`/api/sheets/${activeTab}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: 'exemplo' }), // Simplificado para o protótipo
            });
            const res = await response.json();
            setMessage({ type: 'success', text: res.message });
        } catch (err) {
            setMessage({ type: 'error', text: 'Falha ao salvar dados.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header title="Painel Administrativo" />
            <div className="container">

                <div className="card admin-header">
                    <div className="flex justify-between align-center">
                        <div>
                            <h3>Gestão de Dados da Obra</h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                Atualize os indicadores e tabelas que alimentam o Dashboard e Relatórios.
                            </p>
                        </div>
                        <div className="flex gap-10">
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {message && (
                    <div className={`alert alert-${message.type}`}>
                        {message.text}
                    </div>
                )}

                <div className="card">
                    <h4>Editar Seção: {TABS.find(t => t.id === activeTab)?.label}</h4>

                    <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                        {activeTab === 'dashboard' && (
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Valor Total do Contrato (R$)</label>
                                    <input type="number" step="0.01" defaultValue="4850000.00" />
                                </div>
                                <div className="form-group">
                                    <label>Percentual Físico Atual (%)</label>
                                    <input type="number" step="0.1" defaultValue="42.5" />
                                </div>
                                <div className="form-group">
                                    <label>Prazo de Início</label>
                                    <input type="date" defaultValue="2024-06-01" />
                                </div>
                                <div className="form-group">
                                    <label>Prazo de Término</label>
                                    <input type="date" defaultValue="2025-12-31" />
                                </div>
                            </div>
                        )}

                        {activeTab === 'diario-obra' && (
                            <div className="form-grid">
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Data da Atividade</label>
                                    <input type="date" />
                                </div>
                                <div className="form-group">
                                    <label>Clima</label>
                                    <select>
                                        <option>Ensolarado</option>
                                        <option>Nublado</option>
                                        <option>Chuvoso</option>
                                        <option>Parcialmente nublado</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Temperatura (°C)</label>
                                    <input type="number" />
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Descrição das Atividades</label>
                                    <textarea rows="4"></textarea>
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Equipe em Campo</label>
                                    <input type="text" placeholder="Ex: 15 operários, 1 eng..." />
                                </div>
                            </div>
                        )}

                        {(activeTab === 'evolucao-fisica' || activeTab === 'evolucao-financeira') && (
                            <div style={{ textAlign: 'center', padding: '40px', background: '#f9f9f9', borderRadius: '8px' }}>
                                <p style={{ color: '#666' }}>
                                    Para tabelas de evolução, os dados são processados via importação de planilha.
                                </p>
                                <button type="button" className="btn-secondary" style={{ marginTop: '15px' }}>
                                    Fazer Upload de CSV/Excel
                                </button>
                            </div>
                        )}

                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className="btn-save" disabled={loading}>
                                {loading ? 'Salvando...' : 'Salvar Alterações'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="card">
                    <h4>Ações Rápidas</h4>
                    <div className="flex gap-10" style={{ marginTop: '15px' }}>
                        <button className="btn-outline">Download Relatório PDF</button>
                        <button className="btn-outline">Sincronizar com Google Sheets</button>
                        <button className="btn-outline" style={{ color: 'var(--danger)', borderColor: 'var(--danger)' }}>
                            Limpar Cache Local
                        </button>
                    </div>
                </div>

            </div>

            <style jsx>{`
        .tab-btn {
           padding: 8px 20px;
           border: 1px solid var(--border);
           background: var(--white);
           cursor: pointer;
           font-size: 0.9rem;
           transition: all 0.2s;
        }

        .tab-btn.active {
           background: var(--primary);
           color: white;
           border-color: var(--primary);
        }

        .tab-btn:first-child { border-radius: 4px 0 0 4px; }
        .tab-btn:last-child { border-radius: 0 4px 4px 0; }

        .form-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 20px;
        }

        .form-group {
           display: flex;
           flex-direction: column;
           gap: 8px;
        }

        .form-group label {
           font-size: 0.85rem;
           font-weight: 600;
           color: var(--text-secondary);
        }

        input, select, textarea {
           padding: 10px;
           border: 1px solid var(--border);
           border-radius: 4px;
           font-family: inherit;
        }

        .btn-save {
           background: var(--primary);
           color: white;
           padding: 12px 30px;
           border: none;
           border-radius: 4px;
           font-weight: bold;
           cursor: pointer;
        }

        .btn-save:disabled { background: #ccc; cursor: not-allowed; }

        .btn-secondary {
           background: #eee;
           border: none;
           padding: 10px 20px;
           border-radius: 4px;
           cursor: pointer;
        }

        .btn-outline {
           background: white;
           border: 1px solid var(--border);
           padding: 8px 15px;
           border-radius: 4px;
           font-size: 0.85rem;
           cursor: pointer;
        }

        .alert {
           padding: 15px;
           border-radius: 4px;
           margin-bottom: 20px;
           font-weight: 600;
        }

        .alert-success { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .alert-error { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
      `}</style>
        </>
    );
}

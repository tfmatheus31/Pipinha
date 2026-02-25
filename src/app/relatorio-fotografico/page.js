'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import { relatorioFotograficoData } from '@/lib/mockData';

export default function RelatorioFotografico() {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const categories = ['Todas', ...new Set(relatorioFotograficoData.map(item => item.categoria))];

    const filteredData = selectedCategory === 'Todas'
        ? relatorioFotograficoData
        : relatorioFotograficoData.filter(item => item.categoria === selectedCategory);

    const formatDate = (dateString) => {
        const parts = dateString.split('-');
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    };

    return (
        <>
            <Header title="Relatório Fotográfico" />
            <div className="container">

                <div className="card flex justify-between align-center">
                    <div>
                        <h3 style={{ fontSize: '1rem' }}>Galeria de Fotos da Obra</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            Evidências fotográficas da evolução do empreendimento
                        </p>
                    </div>
                    <div className="flex gap-10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`btn-filter ${selectedCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="photo-grid">
                    {filteredData.map((item) => (
                        <div key={item.id} className="photo-card card">
                            <div className="photo-placeholder">
                                {/* Em produção, aqui estariam as URLs reais das fotos */}
                                <div className="img-simulated">
                                    <span>FOTO DA OBRA</span>
                                    <small>{item.categoria}</small>
                                </div>
                            </div>
                            <div className="photo-info">
                                <div className="flex justify-between align-center">
                                    <span className="date">{formatDate(item.data)}</span>
                                    <span className="category-badge">{item.categoria}</span>
                                </div>
                                <p className="description">{item.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ marginTop: '40px', padding: '40px', textAlign: 'center', borderStyle: 'dashed', borderWidth: '2px', borderColor: '#ccc' }}>
                    <h4 style={{ color: '#666' }}>Upload de Novas Fotos</h4>
                    <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '10px' }}>
                        Utilize a área administrativa para realizar o upload de novos registros fotográficos.
                    </p>
                </div>

            </div>

            <style jsx>{`
        .btn-filter {
           padding: 6px 15px;
           border-radius: 20px;
           border: 1px solid var(--border);
           background: var(--white);
           cursor: pointer;
           font-size: 0.85rem;
           color: var(--text-secondary);
           transition: all 0.2s;
        }

        .btn-filter:hover {
           border-color: var(--primary);
           color: var(--primary);
        }

        .btn-filter.active {
           background: var(--primary);
           color: var(--white);
           border-color: var(--primary);
        }

        .photo-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
           gap: 20px;
           margin-top: 20px;
        }

        .photo-card {
           padding: 0;
           overflow: hidden;
           transition: transform 0.2s;
        }

        .photo-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 8px 15px rgba(0,0,0,0.1);
        }

        .photo-placeholder {
           width: 100%;
           height: 200px;
           background: #eee;
           position: relative;
        }

        .img-simulated {
           width: 100%;
           height: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           color: #999;
           background: linear-gradient(45deg, #e0e0e0 25%, #f0f0f0 25%, #f0f0f0 50%, #e0e0e0 50%, #e0e0e0 75%, #f0f0f0 75%, #f0f0f0 100%);
           background-size: 40px 40px;
        }

        .img-simulated span { font-weight: bold; font-size: 1.1rem; }

        .photo-info {
           padding: 15px;
        }

        .date { font-size: 0.8rem; color: var(--text-secondary); }

        .category-badge {
           font-size: 0.7rem;
           background: #f0f0f0;
           padding: 2px 8px;
           border-radius: 4px;
           color: var(--text-secondary);
           text-transform: uppercase;
        }

        .description {
           margin-top: 10px;
           font-size: 0.9rem;
           color: #444;
           line-height: 1.4;
        }
      `}</style>
        </>
    );
}

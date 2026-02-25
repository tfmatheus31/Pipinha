import { NextResponse } from 'next/server';
import * as mockData from '@/lib/mockData';

export async function GET(request, { params }) {
    const { tab } = params;

    // Mapeamento de abas para chaves do mock
    const dataMap = {
        'dashboard': mockData.dashboardData,
        'evolucao-fisica': mockData.evolucaoFisicaData,
        'evolucao-financeira': mockData.evolucaoFinanceiraData,
        'diario-obra': mockData.diarioObraData,
        'relatorio-fotografico': mockData.relatorioFotograficoData,
        'curva-s': mockData.curvaSData,
    };

    const data = dataMap[tab];

    if (!data) {
        return NextResponse.json({ error: 'Aba não encontrada' }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function POST(request, { params }) {
    const { tab } = params;
    const body = await request.json();

    // Simulação de inserção
    console.log(`[API MOCK] Inserindo em ${tab}:`, body);

    return NextResponse.json({
        success: true,
        message: 'Dado inserido com sucesso (Simulação)',
        data: { ...body, id: Date.now() }
    }, { status: 201 });
}

export async function PUT(request, { params }) {
    const { tab } = params;
    const body = await request.json();

    // Simulação de atualização
    console.log(`[API MOCK] Atualizando em ${tab}:`, body);

    return NextResponse.json({
        success: true,
        message: 'Dado atualizado com sucesso (Simulação)',
        data: body
    });
}

export async function DELETE(request, { params }) {
    const { tab } = params;
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Simulação de exclusão
    console.log(`[API MOCK] Excluindo de ${tab} ID:`, id);

    return NextResponse.json({
        success: true,
        message: 'Dado excluído com sucesso (Simulação)'
    });
}

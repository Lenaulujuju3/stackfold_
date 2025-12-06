import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { filename } = body;

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    console.log('🎯 Score Request:', {
      filename,
      timestamp: new Date().toISOString(),
    });

    // Simulate job creation
    const jobId = Date.now().toString();
    
    return NextResponse.json(
      { jobId, message: 'Scoring job started' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Score API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const jobId = searchParams.get('jobId');

    if (!jobId) {
      return NextResponse.json(
        { error: 'Job ID is required' },
        { status: 400 }
      );
    }

    console.log('🎯 Score Poll Request:', {
      jobId,
      timestamp: new Date().toISOString(),
    });

    // Simulate polling response - always return complete for demo
    return NextResponse.json({
      status: 'complete',
      downloadUrl: `/mock-scored-${jobId}.csv`,
      recordsProcessed: 12345,
      avgScore: 72.5,
    });
  } catch (error) {
    console.error('Score poll error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

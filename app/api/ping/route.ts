import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const host = searchParams.get('host');

  if (!host) {
    return NextResponse.json({ error: 'Host is required' }, { status: 400 });
  }

  // Sanitize host to prevent command injection
  // Only allow alphanumeric, dot, and dash
  const sanitizedHost = host.replace(/[^a-zA-Z0-9.-]/g, '');

  if (!sanitizedHost) {
    return NextResponse.json({ error: 'Invalid host' }, { status: 400 });
  }

  const isWin = process.platform === "win32";
  const pingCmd = isWin ? `ping -n 3 ${sanitizedHost}` : `ping -c 3 ${sanitizedHost}`;

  try {
    const { stdout, stderr } = await execPromise(pingCmd);
    return NextResponse.json({ output: stdout || stderr });
  } catch (error: any) {
    // If ping fails (e.g. timeout), it usually throws, but we still want the output
    if (error.stdout || error.stderr) {
      return NextResponse.json({ output: error.stdout || error.stderr });
    }
    return NextResponse.json({ error: 'Failed to execute ping' }, { status: 500 });
  }
}

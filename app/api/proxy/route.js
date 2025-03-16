import { NextResponse } from 'next/server';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Direct proxy implementation for Next.js App Router
// This implementation handles proxying requests to lobocl.online
export async function GET(request) {
  const url = new URL(request.url);
  // Extract the path correctly - this is crucial for the proxy to work
  let path = '';
  // Log the incoming request URL for debugging
  console.log('Incoming request URL:', url.toString());
  console.log('Pathname:', url.pathname);
  
  if (url.pathname === '/api/proxy') {
    path = '';
  } else if (url.pathname.startsWith('/api/proxy/')) {
    path = url.pathname.substring('/api/proxy'.length);
  }
  
  const targetUrl = 'https://lobocl.online' + path + url.search;
  
  console.log('Proxying GET to:', targetUrl); // Debug log
  
  try {
    // Forward the request to the target URL
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        // Forward necessary headers
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept': request.headers.get('accept') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'Referer': process.env.NEXT_PUBLIC_URL || request.headers.get('referer') || '',
        'Cookie': request.headers.get('cookie') || '',
        // Add any other headers needed
      },
      credentials: 'include',
    });

    // Get the response body as an array buffer
    const data = await response.arrayBuffer();
    
    // Create a new response with the same status, headers, and body
    const newResponse = new NextResponse(data, {
      status: response.status,
      statusText: response.statusText,
    });

    // Copy all headers from the original response
    response.headers.forEach((value, key) => {
      // Skip setting content-encoding header to avoid issues with compressed content
      if (key.toLowerCase() !== 'content-encoding') {
        newResponse.headers.set(key, value);
      }
    });

    // Set CORS headers to allow iframe embedding
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return newResponse;
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch from target server' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Handle POST requests similarly
export async function POST(request) {
  // Extract the path from the request URL
  const url = new URL(request.url);
  // Extract the path correctly - this is crucial for the proxy to work
  let path = '';
  if (url.pathname === '/api/proxy') {
    path = '';
  } else if (url.pathname.startsWith('/api/proxy/')) {
    path = url.pathname.substring('/api/proxy'.length);
  }
  
  const targetUrl = 'https://lobocl.online' + path + url.search;
  
  console.log('Proxying POST to:', targetUrl); // Debug log
  
  try {
    // Get the request body
    const body = await request.arrayBuffer();
    
    // Forward the request to the target URL
    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': request.headers.get('content-type') || 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept': request.headers.get('accept') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'Referer': process.env.NEXT_PUBLIC_URL || request.headers.get('referer') || '',
        'Cookie': request.headers.get('cookie') || '',
      },
      body: body,
      credentials: 'include',
    });

    // Get the response body as an array buffer
    const data = await response.arrayBuffer();
    
    // Create a new response with the same status, headers, and body
    const newResponse = new NextResponse(data, {
      status: response.status,
      statusText: response.statusText,
    });

    // Copy all headers from the original response
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'content-encoding') {
        newResponse.headers.set(key, value);
      }
    });

    // Set CORS headers to allow iframe embedding
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return newResponse;
  } catch (error) {
    console.error('Proxy error:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch from target server' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}